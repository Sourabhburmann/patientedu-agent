
import Dream from '../models/Dream.js';
import Groq from 'groq-sdk';

// We will initialize Groq lazily inside the route handler 
// to ensure dotenv.config() has run first in index.js
let groq;

// Medical topic keyword extraction helper (used for the image prompt)
const extractMedicalTopic = (text) => {
    const lower = text.toLowerCase();
    const topics = [
        'diabetes', 'hypertension', 'blood pressure', 'cancer', 'asthma', 'arthritis',
        'covid', 'influenza', 'flu', 'pneumonia', 'heart disease', 'stroke', 'depression',
        'anxiety', 'alzheimer', 'parkinson', 'thyroid', 'cholesterol', 'obesity', 'anemia',
        'tuberculosis', 'malaria', 'dengue', 'kidney disease', 'liver disease', 'hepatitis',
        'epilepsy', 'migraine', 'eczema', 'psoriasis', 'lupus', 'multiple sclerosis',
    ];
    const found = topics.find(t => lower.includes(t));
    return found ? found.charAt(0).toUpperCase() + found.slice(1) : 'general health';
};

export const chatWithAI = async (req, res, next) => {
    try {
        const { messages } = req.body;
        
        if (!messages || messages.length === 0) {
            return res.status(400).json({ error: 'Messages are required' });
        }

        const rawText = messages[messages.length - 1].content.trim();
        
        // --- 1. PROMPT VALIDATION ---
        const wordCount = rawText.split(/\s+/).filter(word => word.length > 0).length;
        const hasAlphabets = /[a-zA-Z]/.test(rawText);
        const isValid = rawText.length >= 5 && wordCount >= 2 && hasAlphabets;

        if (!isValid) {
            return res.status(200).json({ 
                reply: "Please describe your health question or the disease/condition you'd like to learn about in a bit more detail.", 
                image: null 
            });
        }

        // Removed image topic extraction

        // --- 3. GENERATE REPLY VIA GROQ API ---
        if (!groq) {
            groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
        }

        const systemMessage = {
            role: 'system',
            content: `You are PatientEdu Agent, an AI medical education companion. Explain diseases, symptoms, and treatments in clear, plain, everyday language that a patient with no medical background can understand. Structure your response with clear sections (e.g., "What it is", "Common Symptoms", "Treatment Approach", and "When to See a Doctor"). Always include a disclaimer at the very end stating that this is educational information and does not replace professional medical advice. Keep your response concise, empathetic, and highly informative.`
        };

        const formattedMessages = messages.map(msg => ({
            role: msg.role === 'ai' ? 'assistant' : msg.role,
            content: msg.content
        }));

        const chatCompletion = await groq.chat.completions.create({
            messages: [systemMessage, ...formattedMessages],
            model: "llama-3.1-8b-instant",
            temperature: 0.5,
            max_tokens: 1024,
        });

        const reply = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response at this time.";

        // --- 4. PERSISTENCE ---
        if (req.user && req.user.id) {
            try {
                const newConsultation = new Dream({
                    userId: req.user.id,
                    title: rawText.length > 40 ? rawText.substring(0, 40) + "..." : rawText,
                    description: rawText,
                    explanation: reply
                });
                await newConsultation.save();
            } catch (err) {
                console.error("Failed to save consultation to history:", err);
            }
        }

        // --- 5. RESPONSE ---
        res.status(200).json({ 
            reply
        });

    } catch (error) {
        console.error('Chat Logic Error:', error);
        res.status(500).json({ error: 'Internal server error in the health education engine' });
    }
};

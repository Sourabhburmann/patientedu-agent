// Fake AI response generator
const DREAM_RESPONSES = [
  "That sounds like a fascinating dream! The imagery you're describing suggests deep creativity brewing within you. Let me ask — were there any specific colors or feelings that stood out?",
  "Incredible vision! I'm processing the emotional undertones of your dream. The symbolism here is rich with possibility. Could you describe the atmosphere — was it warm, cold, ethereal?",
  "Your dream contains powerful archetypal elements. I'm beginning to form a visual interpretation. What was the dominant emotion you felt during this experience?",
  "I can sense the depth of this dreamscape. The narrative threads are weaving together beautifully. Tell me more about the characters or beings you encountered.",
  "Fascinating! This dream has layers of meaning waiting to be unveiled. Based on what you've shared, I'm visualizing a scene filled with luminous energy. Shall I generate an interpretation?",
  "The subconscious imagery you've described is truly unique. I'm detecting themes of transformation and discovery. What aspect of this dream stayed with you the most upon waking?",
  "Your dream speaks of a journey — both literal and metaphorical. The visual elements are starting to coalesce in my processing. Can you describe the setting in more detail?",
];

let responseIndex = 0;

export const generateAIResponse = (userMessage) => {
  return new Promise((resolve) => {
    const delay = 1500 + Math.random() * 1500;
    setTimeout(() => {
      const response = DREAM_RESPONSES[responseIndex % DREAM_RESPONSES.length];
      responseIndex++;
      resolve(response);
    }, delay);
  });
};

export const formatTimestamp = (date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const generateId = () => Math.random().toString(36).substring(2, 11);

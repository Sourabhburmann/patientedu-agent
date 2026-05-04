import { motion } from 'framer-motion';
import { MessageSquare, Cpu, Image, ChevronRight, Clock, Shield, Zap, Info, Sparkles, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Ask Your Health Question',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200',
    description:
      'Begin by asking PatientEdu Agent about any disease, symptom, or medical condition in your own words. No medical jargon needed — just describe what you want to understand.',
    tips: ['Ask about specific diseases or conditions', 'Mention symptoms you want explained', 'Ask about treatment options', 'Request comparisons between conditions'],
    color: 'from-teal-500 to-cyan-600',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI Explains Clearly',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1200',
    description:
      'PatientEdu Agent breaks down your question into a structured, easy-to-understand explanation. It covers what the condition is, common symptoms, causes, and treatment pathways — all in plain language.',
    tips: ['Plain-language explanations, no jargon', 'Covers symptoms, causes & treatments', 'Evidence-based information', 'Follow-up questions always welcome'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    number: '03',
    icon: Image,
    title: 'Visual Medical Diagram',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1200',
    description:
      'Every explanation is paired with an AI-generated anatomical or medical illustration to help you truly visualize the condition. See what your doctor is talking about, not just read about it.',
    tips: ['Anatomical diagrams generated instantly', 'Saved to your consultation history', 'Download or share with caregivers', 'Ask for more detail anytime'],
    color: 'from-emerald-500 to-teal-600',
  },
];

const faqs = [
  { q: 'How accurate is the medical information?', a: 'PatientEdu Agent provides general educational information based on established medical knowledge. Always consult your healthcare provider for personal medical advice.' },
  { q: 'Is my health data kept private?', a: 'Absolutely. Your consultation data is encrypted, never sold, and you can delete it at any time. We take privacy very seriously.' },
  { q: 'Can I ask follow-up questions?', a: 'Yes! You can ask PatientEdu Agent to clarify any aspect, dive deeper into a topic, or explain related conditions as many times as you like.' },
  { q: 'Do I need any medical background?', a: 'None at all. PatientEdu Agent is designed specifically for patients and caregivers with no medical training. Explanations are always in plain, everyday language.' },
];

export default function HowItWorks() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      {/* Hero with Visual Depth */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[130px] rounded-full" />
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-8 backdrop-blur-md uppercase tracking-widest">
                Our Methodology
              </div>
              <h1 className={`font-display text-5xl sm:text-7xl font-black mb-8 leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                Your Path to <br />
                <span className="gradient-text">Health Understanding</span>
              </h1>
              <p className={`text-xl leading-relaxed max-w-2xl mx-auto mb-12 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                We've combined modern AI with medical knowledge to give every patient clear, visual explanations of their conditions and treatments.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Visual Walkthrough */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40">
          {steps.map(({ number, icon: Icon, title, image, description, tips, color }, idx) => (
            <div key={number} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Column */}
              <FadeIn className="w-full lg:w-1/2" direction={idx % 2 === 0 ? 'left' : 'right'}>
                <div className="relative group">
                  <div className={`absolute -inset-4 bg-gradient-to-br ${color} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700 pointer-events-none rounded-3xl`} />
                  <div className={`relative rounded-[2.5rem] overflow-hidden border ${dark ? 'border-white/10 shadow-2xl shadow-black/50' : 'border-slate-200 shadow-xl'}`}>
                    <img 
                      src={image} 
                      alt={title} 
                      className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Glass Overlay with Number */}
                    <div className="absolute top-6 left-6 flex items-center gap-4 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/20">
                        <span className="font-display text-2xl font-black text-white">{number}</span>
                        <div className="w-px h-6 bg-white/20" />
                        <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Content Column */}
              <FadeIn className="w-full lg:w-1/2 space-y-8" direction={idx % 2 === 0 ? 'right' : 'left'}>
                <div className="space-y-4">
                  <h2 className={`font-display text-4xl sm:text-5xl font-black leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                    {title}
                  </h2>
                  <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${color}`} />
                </div>
                
                <p className={`text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {tips.map(tip => (
                    <div key={tip} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-sm opacity-20`} />
                      <CheckCircle2 className={`w-4 h-4 text-white absolute translate-x-1 opacity-80`} style={{ display: 'none' }} /> {/* Placeholder trick to keep icons aligned */}
                      <span className={`text-sm font-medium ${dark ? 'text-slate-300' : 'text-slate-800'}`}>{tip}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Performance Section */}
      <section className={`py-40 relative overflow-hidden ${dark ? 'bg-[#0a0a0f]' : 'bg-slate-50'}`}>
        <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${dark ? 'rgba(124,58,237,0.05)' : 'rgba(124,58,237,0.02)'} 0%, transparent 70%)`
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <h2 className={`font-display text-5xl font-black mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Beyond <span className="gradient-text">Education</span>
            </h2>
            <p className={`text-lg ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Engineering excellence meets compassionate patient communication.</p>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-3 gap-10" staggerDelay={0.15}>
            {[
              { icon: Clock, stat: 'Fast Response', value: '< 5s', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=800', desc: 'Get your medical explanation and diagram in under 5 seconds on average.' },
              { icon: Shield, stat: 'Data Security', value: 'Encrypted', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800', desc: 'Your health consultation data is fully encrypted and never shared with third parties.' },
              { icon: Zap, stat: 'System Uptime', value: '99.9%', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800', desc: 'PatientEdu Agent is always available — whenever you need a health question answered.' },
            ].map(({ icon: Icon, stat, value, image, desc }) => (
              <StaggerItem key={stat}>
                <div className={`group relative p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-4 overflow-hidden ${
                  dark ? 'bg-[#12121a] border-white/5 hover:border-violet-500/20' : 'bg-white border-slate-200 shadow-xl'
                }`}>
                  {/* Ghibli Style Background Overlay */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none">
                    <img src={image} className="w-full h-full object-cover" alt="" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${dark ? 'from-[#12121a]' : 'from-white'} via-transparent to-transparent`} />
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-violet-400" />
                    </div>
                    <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{stat}</div>
                    <div className="font-display text-4xl font-black text-white mb-4 gradient-text">{value}</div>
                    <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Elevated FAQ with Ghibli elements */}
      <section className="py-40 relative">
        {/* Whimsical Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] rounded-full -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full -ml-32 -mb-32 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-24">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-500/20 to-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-2xl backdrop-blur-md">
                  <Sparkles className="w-10 h-10 text-violet-400 animate-pulse" />
              </div>
            <h2 className={`font-display text-5xl sm:text-6xl font-black mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Patient <span className="gradient-text">FAQs</span>
            </h2>
            <p className={`text-xl ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Everything you need to know about using PatientEdu Agent.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                q: 'How accurate is the medical information?', 
                a: 'PatientEdu Agent provides educational information based on established medical knowledge. Always consult your healthcare provider for personal medical advice.',
                image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=400',
                color: 'from-teal-500/10'
              },
              { 
                q: 'Is my health data kept private?', 
                a: 'Absolutely. Your consultation data is encrypted, never sold, and you can delete it at any time. We take privacy very seriously.',
                image: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?q=80&w=400',
                color: 'from-cyan-500/10'
              },
              { 
                q: 'Can I ask follow-up questions?', 
                a: 'Yes! You can ask PatientEdu Agent to clarify any aspect, dive deeper, or explain related conditions as many times as you like.',
                image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=400',
                color: 'from-emerald-500/10'
              },
              { 
                q: 'Do I need any medical background?', 
                a: 'None at all. PatientEdu Agent is designed for patients with no medical training. All explanations are in plain, everyday language.',
                image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=400',
                color: 'from-amber-500/10'
              },
            ].map(({ q, a, image, color }, idx) => (
              <FadeIn key={q} delay={idx * 0.1}>
                <div className={`group relative p-8 rounded-[2rem] border overflow-hidden transition-all duration-300 hover:border-violet-500/30 backdrop-blur-md h-full ${
                  dark ? 'bg-[#12121a]/80 border-white/5' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${color} blur-3xl rounded-full opacity-50`} />
                  
                  <div className="flex gap-6 items-start relative z-10">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <img src={image} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-3 ${dark ? 'text-white' : 'text-slate-900'}`}>{q}</h3>
                      <p className={`text-base leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{a}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} className="mt-24 text-center">
            <Link
              to="/signup"
              className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-black text-lg hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:scale-105 transition-all duration-500"
            >
              Initialize Consultation <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </PublicLayout>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Brain, Palette, MessageCircle, Zap, Star, ChevronRight, HeartPulse, Stethoscope, BookOpen } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';
import TestimonialMarquee from '../components/TestimonialMarquee';
import ctaPortalImg from '../assets/cta_portal.png';
import feature1Img from '../assets/feature1.png';
import feature2Img from '../assets/feature2.png';
import feature3Img from '../assets/feature3.png';

// Animated chatbot preview
function ChatPreview({ dark }) {
  const messages = [
    { role: 'ai', text: "Hello! I'm PatientEdu Agent. Ask me about any disease or treatment to get a clear explanation." },
    { role: 'user', text: "Can you explain Type 2 Diabetes and how it's treated?" },
    { role: 'ai', text: "Absolutely! Type 2 Diabetes is a chronic condition where the body doesn't use insulin efficiently. Treatment includes diet changes, exercise, and medication. Shall I generate a diagram?" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      className={`rounded-2xl p-1 ${dark ? 'bg-gradient-to-br from-teal-500/20 to-cyan-500/10' : 'bg-gradient-to-br from-teal-100 to-cyan-50'}`}
    >
      <div className={`rounded-xl overflow-hidden ${dark ? 'bg-[#0a0f12]' : 'bg-white'} shadow-2xl`}>
        {/* Header */}
        <div className={`flex items-center gap-3 px-5 py-4 border-b ${dark ? 'border-white/10' : 'border-slate-100'}`}>
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex items-center gap-2 ml-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center">
              <Stethoscope className="w-3.5 h-3.5 text-white" />
            </div>
            <span className={`text-xs font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>PatientEdu Agent</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>

        {/* Messages */}
        <div className="p-5 space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.3 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-br-sm'
                    : dark
                    ? 'bg-white/8 text-slate-300 rounded-bl-sm border border-white/10'
                    : 'bg-slate-100 text-slate-700 rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex justify-start"
          >
            <div className={`px-4 py-3 rounded-2xl rounded-bl-sm ${dark ? 'bg-white/8 border border-white/10' : 'bg-slate-100'}`}>
              <div className="flex gap-1 items-center h-4">
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full typing-dot ${dark ? 'bg-teal-400' : 'bg-teal-500'}`}
                    style={{ animation: `typing-dot 1.2s ease-in-out ${i * 0.2}s infinite` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Input */}
        <div className={`px-5 py-4 border-t ${dark ? 'border-white/10' : 'border-slate-100'}`}>
          <div className={`flex items-center gap-3 px-4 py-3 rounded-xl ${dark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
            <span className={`text-sm flex-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Ask about a disease or treatment...</span>
            <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-500 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const features = [
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800',
    title: 'AI Disease Explanation',
    desc: 'Get clear, accurate explanations of diseases, conditions, and medical terms — no jargon, just plain language.',
    color: 'from-teal-500 to-cyan-600',
    glow: 'shadow-[0_0_30px_rgba(20,184,166,0.3)]',
  },
  {
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800',
    title: 'Medical Illustrations',
    desc: 'Every explanation is paired with an AI-generated anatomical diagram to help you truly visualize the condition.',
    color: 'from-cyan-500 to-blue-600',
    glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
  },
  {
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800',
    title: 'Treatment Guidance',
    desc: 'Understand treatment pathways, lifestyle changes, and what questions to ask your doctor — all in one place.',
    color: 'from-emerald-500 to-teal-600',
    glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
  },
];

const stats = [
  { value: '200+', label: 'Diseases Covered' },
  { value: '98%', label: 'Patient Satisfaction' },
  { value: '< 5s', label: 'Avg. Response Time' },
  { value: '50K+', label: 'Patients Educated' },
];

export default function Home() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/15 blur-[100px] float-anim" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] float-anim" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-[120px]" />
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(${dark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px), linear-gradient(90deg, ${dark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-teal-500/10 border border-teal-500/20"
            >
              <HeartPulse className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-xs font-semibold text-teal-400 tracking-wide uppercase">AI Patient Education</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}
            >
              Understand Your{' '}
              <span className="gradient-text">Health</span>
              {' '}with AI-Powered{' '}
              <span className={dark ? 'text-slate-200' : 'text-slate-700'}>Education</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg leading-relaxed mb-10 ${dark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              PatientEdu Agent uses advanced AI to explain diseases, symptoms, and treatments in plain language — paired with clear medical illustrations. Just ask your question, and we'll break it down for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                to="/signup"
                id="hero-cta"
                className="group flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-base hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:scale-105 transition-all duration-300"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/how-it-works"
                className={`flex items-center gap-2 px-7 py-4 rounded-2xl border font-semibold text-base hover:scale-105 transition-all duration-300 ${
                  dark ? 'border-white/20 text-white hover:bg-white/5' : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                See How It Works
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-4 gap-4"
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold gradient-text">{value}</div>
                  <div className={`text-xs mt-0.5 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Chat Preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/20 to-cyan-500/10 rounded-3xl blur-2xl" />
            <div className="relative">
              <ChatPreview dark={dark} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-4">
              <Zap className="w-3 h-3" />
              POWERFUL FEATURES
            </span>
            <h2 className={`font-display text-4xl sm:text-5xl font-bold mb-5 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Everything you need to{' '}
              <span className="gradient-text">understand your health</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Our suite of AI-powered tools makes medical education accessible, clear, and visually engaging for every patient.
            </p>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {features.map(({ image, title, desc, glow }) => (
              <StaggerItem key={title}>
                <div
                  className={`relative group p-4 pb-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:${glow} ${
                    dark ? 'bg-[#12121a] border-white/8 hover:border-violet-500/30' : 'bg-white border-slate-200 hover:border-violet-300 shadow-sm hover:shadow-lg'
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                    <img 
                      src={image} 
                      alt={title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12121a]/60 to-transparent pointer-events-none" />
                  </div>
                  <div className="px-4">
                    <h3 className={`font-display text-2xl font-bold mb-3 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                    <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* How It Works - Visual Step-by-Step */}
      <section className={`py-24 relative overflow-hidden ${dark ? 'bg-[#0d0d16]' : 'bg-slate-50'}`}>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -ml-64 -mb-64 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <h2 className={`font-display text-4xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              <span className="gradient-text">Three steps</span> to health clarity
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              We've refined our process to be as clear and supportive as a conversation with your doctor.
            </p>
          </FadeIn>

          <div className="space-y-32">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="left">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200" 
                      alt="Describe Your Dream" 
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0d0d16] via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <div className="font-display text-6xl font-black text-white/10 leading-none">01</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className={`font-display text-4xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>Ask Your Health Question</h3>
                  <p className={`text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Simply type your question about a disease, condition, or symptom. Use plain everyday language — no medical expertise required. PatientEdu Agent understands you perfectly.
                  </p>
                  <ul className={`space-y-3 text-sm ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500" />Supports 50+ languages</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500" />No medical knowledge needed</li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right" className="lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-l from-cyan-600/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200" 
                      alt="AI Refinement" 
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#0d0d16] via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <div className="font-display text-6xl font-black text-white/10 leading-none">02</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="left" className="lg:order-1">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className={`font-display text-4xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>AI Explains & Clarifies</h3>
                  <p className={`text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                    PatientEdu Agent breaks down complex medical concepts into clear, simple language. It covers symptoms, causes, risk factors, and treatment options tailored to your question.
                  </p>
                  <ul className={`space-y-3 text-sm ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />Plain-language explanations</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />Evidence-based information</li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="left">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1200" 
                      alt="Visual Magic" 
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0d0d16] via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <div className="font-display text-6xl font-black text-white/10 leading-none">03</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className={`font-display text-4xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>See It Visually</h3>
                  <p className={`text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Every explanation is paired with an AI-generated anatomical or medical diagram, making the condition easier to understand at a glance — perfect for patients and caregivers alike.
                  </p>
                  <ul className={`space-y-3 text-sm ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Medical-grade illustrations</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Saved to consultation history</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.4} className="mt-24 text-center">
            <Link
              to="/signup"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-105 transition-all duration-300"
            >
              Start Your First Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Preview */}
      <TestimonialMarquee />

      {/* Unique Dream Portal CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(124,58,237,0.2)]">
              {/* Background Portal Image */}
              <div className={`absolute inset-0 ${dark ? 'bg-[#0a0a0f]' : 'bg-slate-900'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=1600" 
                  alt="Medical Portal" 
                  className="w-full h-full object-cover opacity-40 mix-blend-luminosity transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dark ? 'from-[#0a0a0f] via-transparent' : 'from-slate-900 via-transparent'} to-transparent`} />
              </div>

              {/* Glowing Accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 blur-[100px] -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 blur-[100px] -ml-32 -mb-32" />

              {/* Content */}
              <div className="relative px-8 py-20 sm:p-20 text-center flex flex-col items-center">
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="mb-8"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center p-2">
                    <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>

                <h2 className="font-display text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                  Ready to take control{' '}<br className="hidden sm:block" /> 
                  of your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">health knowledge?</span>
                </h2>
                
                <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                  Empower yourself with clear medical knowledge. Ask PatientEdu Agent anything about your health, and get an instant, easy-to-understand explanation with a visual diagram.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <Link
                    to="/signup"
                    className="group relative px-10 py-5 rounded-2xl bg-white text-violet-800 font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Learning <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  
                  <span className="text-white/40 text-sm font-medium">Trusted by 10,000+ patients today</span>
                </div>

                {/* Glassmorphic border */}
                <div className="absolute inset-px rounded-[2.5rem] border border-white/10 pointer-events-none" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PublicLayout>
  );
}

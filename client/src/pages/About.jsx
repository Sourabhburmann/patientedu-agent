import { motion } from 'framer-motion';
import { Heart, Target, Users, Lightbulb, Award, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';

const values = [
  { icon: Heart, title: 'Patient-Centered', col: 'md:col-span-3 lg:col-span-8', desc: 'Every feature is designed with empathy and the patient experience at its core — clear, compassionate, and accessible.', image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800' },
  { icon: Lightbulb, title: 'Health Innovation', col: 'md:col-span-3 lg:col-span-4', desc: 'Pushing the boundaries of AI-powered medical education.', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=600' },
  { icon: Users, title: 'Community', col: 'md:col-span-3 lg:col-span-4', desc: 'Our patients and caregivers shape the product\'s future.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600' },
  { icon: Target, title: 'Privacy Focused', col: 'md:col-span-3 lg:col-span-8', desc: 'Your health data is sacred. We never share or sell your personal consultation data.', image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=800' },
  { icon: Award, title: 'Medical Excellence', col: 'md:col-span-3 lg:col-span-6', desc: 'Highest standards in AI medical accuracy and clarity.', image: 'https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=600' },
  { icon: Globe, title: 'Accessible', col: 'md:col-span-3 lg:col-span-6', desc: 'Patient education for everyone, in every language.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600' },
];

export default function About() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-6">
              Our Story
            </span>
            <h1 className={`font-display text-5xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              We believe every patient{' '}
              <span className="gradient-text">deserves to be heard</span>
            </h1>
            <p className={`text-xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              PatientEdu Agent was born from a simple question: what if patients could truly understand their diagnosis? We\'re a team of students on a mission to bridge the gap between complex medical knowledge and everyday patients.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Student Visionary Mission Section */}
      <section className={`py-32 relative ${dark ? 'bg-[#0d0d16]' : 'bg-slate-50'}`}>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <div className={`relative group rounded-[3.5rem] overflow-hidden border p-1 ${dark ? 'bg-white/5 border-white/10 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'}`}>
                <div className="relative h-[550px] rounded-[3rem] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200" 
                      alt="The Spark" 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />
                    
                    <div className="absolute inset-x-12 bottom-12 text-left">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-6 uppercase tracking-[0.2em] backdrop-blur-xl"
                        >
                            The Origin Story
                        </motion.div>
                        <h3 className="font-display text-4xl font-black text-white mb-6 leading-[1.1]">Born from <span className="gradient-text">Curiosity.</span></h3>
                        <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg">
                            PatientEdu Agent isn't just a project; it's a mission to make medical knowledge accessible to all. We started with a simple belief: every patient has the right to understand their condition.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl">
                                <div className="text-xl font-black text-white">Student</div>
                                <div className="text-[10px] uppercase text-slate-500 font-black tracking-widest mt-1">Research Lead</div>
                            </div>
                            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl">
                                <div className="text-xl font-black text-white">Project</div>
                                <div className="text-[10px] uppercase text-slate-500 font-black tracking-widest mt-1">Creative Driven</div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="text-left relative">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-violet-500/10 blur-2xl rounded-full" />
                <h2 className={`font-display text-6xl font-black mb-10 leading-[1.1] ${dark ? 'text-white' : 'text-slate-900'}`}>
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <div className="space-y-8">
                    <p className={`text-xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                    We exist to make healthcare knowledge accessible to everyone. Patients deserve more than a diagnosis — they deserve a thorough, clear understanding of their condition and treatment path.
                    </p>
                    <p className={`text-xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                    As students of medicine and technology, we're building a bridge between the complexity of medical science and the everyday patient sitting in the doctor's office.
                    </p>
                    <Link to="/how-it-works" className="group/btn inline-flex items-center gap-4 text-teal-400 font-black text-sm uppercase tracking-widest pb-2 border-b-2 border-teal-500/20 hover:border-teal-500 transition-all">
                        Explore How It Works <Target className="w-5 h-5 group-hover/btn:scale-125 transition-transform" />
                    </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Extraordinary Bento Values */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-8 uppercase tracking-widest">
                  Foundations
              </div>
            <h2 className={`font-display text-6xl sm:text-7xl font-black mb-10 ${dark ? 'text-white' : 'text-slate-900'}`}>
              What we <span className="gradient-text">stand for</span>
            </h2>
            <p className={`text-2xl max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>The principles that guide our mission in patient education and healthcare accessibility.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 auto-rows-[350px]">
            {values.map(({ icon: Icon, title, desc, image, col }, idx) => (
              <FadeIn key={title} delay={idx * 0.1} className={col}>
                <div className={`group relative h-full rounded-[3.5rem] border overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.6)] ${
                  dark ? 'bg-[#12121a]/80 border-white/5 shadow-2x shadow-black/50' : 'bg-white border-slate-200'
                }`}>
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-1000">
                    <img src={image} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt="" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${dark ? 'from-[#0a0a0f]' : 'from-white'} via-transparent to-transparent`} />
                  </div>

                  <div className="relative z-10 p-12 h-full flex flex-col justify-between text-left">
                    <div className="flex justify-between items-start">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-transparent border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-violet-500/40 transition-all duration-500 backdrop-blur-md`}>
                            <Icon className="w-8 h-8 text-violet-400 group-hover:text-white transition-colors" />
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 group-hover:text-violet-400 transition-colors">
                            Value {idx + 1}
                        </div>
                    </div>
                    
                    <div>
                        <h3 className={`font-display text-4xl font-black mb-6 ${dark ? 'text-white' : 'text-slate-900'} group-hover:gradient-text transition-all duration-500`}>{title}</h3>
                        <p className={`text-lg leading-relaxed max-w-sm ${dark ? 'text-slate-400' : 'text-slate-600'} group-hover:text-white/80 transition-colors`}>{desc}</p>
                    </div>

                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-8">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.5, delay: idx * 0.1 }}
                            className="h-full bg-gradient-to-r from-violet-500 to-cyan-400" 
                        />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

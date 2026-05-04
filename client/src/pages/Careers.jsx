import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight, Heart, Zap, Globe } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';

const openings = [
  {
    title: 'Senior AI/ML Engineer',
    team: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Product Designer (UI/UX)',
    team: 'Design',
    location: 'Remote (Global)',
    type: 'Full-time',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Full Stack Engineer (React + Node)',
    team: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Content & Community Manager',
    team: 'Marketing',
    location: 'Remote (Global)',
    type: 'Part-time',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Dream Research Consultant',
    team: 'Research',
    location: 'Remote (Global)',
    type: 'Contract',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

const perks = [
  { icon: Heart, title: 'Health & Wellbeing', desc: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
  { icon: Zap, title: 'Flexible Work', desc: 'Fully remote-first culture with async-friendly hours and flexible schedules.' },
  { icon: Globe, title: 'Learning Budget', desc: '$2,000/year for courses, books, conferences, and personal development.' },
];

export default function Careers() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-6">
              We're Hiring
            </span>
            <h1 className={`font-display text-5xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Build the future of <span className="gradient-text">dreaming</span>
            </h1>
            <p className={`text-xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Join a passionate, remote-first team on a mission to turn the world's dreams into breathtaking visual reality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Perks */}
      <section className={`py-16 ${dark ? 'bg-[#0d0d16]' : 'bg-slate-50'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid sm:grid-cols-3 gap-6" staggerDelay={0.12}>
            {perks.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className={`p-6 rounded-2xl border text-center ${dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`font-semibold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</div>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className={`font-display text-4xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
              Open <span className="gradient-text">positions</span>
            </h2>
          </FadeIn>
          <StaggerChildren className="space-y-4" staggerDelay={0.1}>
            {openings.map(({ title, team, location, type, gradient }) => (
              <StaggerItem key={title}>
                <div className={`group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:border-violet-500/40 hover:-translate-y-0.5 hover:shadow-lg ${dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-lg">{title[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-lg mb-1 group-hover:text-violet-400 transition-colors ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{team}</span>
                      <span className={`text-xs flex items-center gap-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                        <MapPin className="w-3 h-3" />{location}
                      </span>
                      <span className={`text-xs flex items-center gap-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                        <Clock className="w-3 h-3" />{type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-violet-400 text-sm font-medium flex-shrink-0">
                    Apply <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn delay={0.5} className="mt-12 text-center">
            <p className={`text-sm mb-4 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
              Don't see a role that fits? We love meeting passionate people.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-105 transition-all duration-300"
            >
              Say Hello <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </PublicLayout>
  );
}

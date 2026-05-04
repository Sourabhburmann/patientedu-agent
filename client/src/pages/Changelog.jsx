import { Sparkles, Zap, Shield, Bug } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';

const releases = [
  {
    version: 'v2.4.0',
    date: 'April 19, 2026',
    label: 'Latest',
    labelColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    changes: [
      { type: 'feature', icon: Sparkles, text: 'Multi-scene dream visualization — chain multiple dream moments into a visual narrative.' },
      { type: 'feature', icon: Sparkles, text: 'New "Emotion Map" view — see the emotional arc of your dream at a glance.' },
      { type: 'improvement', icon: Zap, text: 'Reduced average generation time from 2.1s to 1.4s with updated inference pipeline.' },
      { type: 'fix', icon: Bug, text: 'Fixed an issue where the chat history would not persist after page refresh.' },
    ],
  },
  {
    version: 'v2.3.0',
    date: 'March 28, 2026',
    label: null,
    changes: [
      { type: 'feature', icon: Sparkles, text: 'Introduced 4K image export for Luminary plan users.' },
      { type: 'feature', icon: Sparkles, text: 'Added dark-mode-aware chat bubble styling for better readability at night.' },
      { type: 'improvement', icon: Zap, text: 'Improved AI follow-up question logic — now asks fewer, more targeted questions.' },
      { type: 'security', icon: Shield, text: 'Upgraded all dream data encryption to AES-256-GCM.' },
    ],
  },
  {
    version: 'v2.2.0',
    date: 'March 12, 2026',
    label: null,
    changes: [
      { type: 'feature', icon: Sparkles, text: 'Launched QuickRaina API (beta) for Luminary subscribers.' },
      { type: 'feature', icon: Sparkles, text: 'Testimonials page — real stories from our community of dreamers.' },
      { type: 'improvement', icon: Zap, text: 'Complete redesign of the onboarding flow for new users.' },
      { type: 'fix', icon: Bug, text: 'Resolved theme toggle persistence bug across browser sessions.' },
    ],
  },
  {
    version: 'v2.0.0',
    date: 'February 1, 2026',
    label: 'Major',
    labelColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    changes: [
      { type: 'feature', icon: Sparkles, text: 'Complete platform rebuild — new React frontend with Framer Motion animations.' },
      { type: 'feature', icon: Sparkles, text: 'Introduced Visionary and Luminary subscription tiers.' },
      { type: 'feature', icon: Sparkles, text: 'Brand new conversational AI engine with 40% richer dream interpretation.' },
      { type: 'improvement', icon: Zap, text: 'Mobile-first responsive design across all pages.' },
    ],
  },
];

const typeStyles = {
  feature: 'text-violet-400 bg-violet-500/10',
  improvement: 'text-cyan-400 bg-cyan-500/10',
  fix: 'text-red-400 bg-red-500/10',
  security: 'text-emerald-400 bg-emerald-500/10',
};

export default function Changelog() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-6">
              Changelog
            </span>
            <h1 className={`font-display text-5xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              What's <span className="gradient-text">new</span>
            </h1>
            <p className={`text-xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Every update, improvement, and fix — documented with care. We ship fast and ship quality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="space-y-10" staggerDelay={0.12}>
            {releases.map(({ version, date, label, labelColor, changes }) => (
              <StaggerItem key={version}>
                <div className={`relative rounded-3xl border p-8 ${dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className={`font-display text-2xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{version}</span>
                    {label && (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${labelColor}`}>{label}</span>
                    )}
                    <span className={`ml-auto text-sm ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{date}</span>
                  </div>
                  <ul className="space-y-4">
                    {changes.map(({ type, icon: Icon, text }) => (
                      <li key={text} className="flex items-start gap-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold flex-shrink-0 mt-0.5 ${typeStyles[type]}`}>
                          <Icon className="w-3 h-3" />
                          {type}
                        </span>
                        <span className={`text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </PublicLayout>
  );
}

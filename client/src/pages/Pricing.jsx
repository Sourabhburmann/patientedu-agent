import { Link } from 'react-router-dom';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';

const plans = [
  {
    name: 'Dreamer',
    icon: Sparkles,
    price: 'Free',
    period: '',
    desc: 'Perfect for curious minds exploring the world of dream visualization.',
    color: 'from-slate-500 to-slate-600',
    features: [
      '5 dream visualizations / month',
      'Basic AI conversation',
      'Standard image quality',
      'Community support',
      '7-day history',
    ],
    cta: 'Get Started Free',
    href: '/signup',
    highlighted: false,
  },
  {
    name: 'Visionary',
    icon: Zap,
    price: '$12',
    period: '/month',
    desc: 'For dreamers who want unlimited creativity and premium quality.',
    color: 'from-violet-500 to-cyan-500',
    features: [
      'Unlimited dream visualizations',
      'Advanced AI conversation',
      'HD & 4K image quality',
      'Priority support',
      'Unlimited history',
      'Multiple style variations',
      'Export & share tools',
    ],
    cta: 'Start Free Trial',
    href: '/signup',
    highlighted: true,
  },
  {
    name: 'Luminary',
    icon: Crown,
    price: '$29',
    period: '/month',
    desc: 'For professionals, studios, and power users who demand the best.',
    color: 'from-amber-500 to-orange-500',
    features: [
      'Everything in Visionary',
      'API access',
      'Team collaboration (up to 5)',
      'Dedicated account manager',
      'Custom style training',
      'Commercial usage license',
      'Early feature access',
    ],
    cta: 'Contact Sales',
    href: '/contact',
    highlighted: false,
  },
];

export default function Pricing() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-6">
              Simple Pricing
            </span>
            <h1 className={`font-display text-5xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Choose your <span className="gradient-text">dream plan</span>
            </h1>
            <p className={`text-xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Start free and upgrade as your imagination grows. No hidden fees, no creative limits.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid md:grid-cols-3 gap-8 items-stretch" staggerDelay={0.12}>
            {plans.map(({ name, icon: Icon, price, period, desc, color, features, cta, href, highlighted }) => (
              <StaggerItem key={name}>
                <div className={`relative h-full flex flex-col rounded-3xl border p-8 transition-all duration-500 ${
                  highlighted
                    ? dark
                      ? 'bg-gradient-to-b from-violet-900/40 to-[#12121a] border-violet-500/50 shadow-[0_0_60px_rgba(124,58,237,0.25)]'
                      : 'bg-gradient-to-b from-violet-50 to-white border-violet-300 shadow-xl'
                    : dark
                    ? 'bg-[#12121a] border-white/8'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  {highlighted && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-lg font-bold mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>{name}</div>
                  <div className="flex items-end gap-1 mb-3">
                    <span className={`font-display text-4xl font-black ${highlighted ? 'gradient-text' : dark ? 'text-white' : 'text-slate-900'}`}>{price}</span>
                    <span className={`text-sm mb-1.5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{period}</span>
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {features.map(f => (
                      <li key={f} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${highlighted ? 'from-violet-500 to-cyan-400' : color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={href}
                    className={`w-full text-center py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                      highlighted
                        ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-105'
                        : dark
                        ? 'border border-white/20 text-white hover:bg-white/5 hover:border-white/30'
                        : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {cta}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn delay={0.5} className="mt-12 text-center">
            <p className={`text-sm ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
              All plans include a 14-day free trial. No credit card required.
            </p>
          </FadeIn>
        </div>
      </section>
    </PublicLayout>
  );
}

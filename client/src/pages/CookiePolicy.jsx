import { Cookie } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';

const cookieTypes = [
  {
    name: 'Essential Cookies',
    required: true,
    desc: 'These cookies are necessary for the website to function and cannot be switched off. They are set in response to actions you take, such as logging in or filling in forms.',
    examples: ['Session authentication token', 'CSRF protection token', 'User preferences (theme, language)'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Analytics Cookies',
    required: false,
    desc: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. All information is aggregated and anonymous.',
    examples: ['Page view counts', 'Session duration', 'Feature usage statistics'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Functional Cookies',
    required: false,
    desc: 'These cookies enable enhanced functionality and personalisation. They may be set by us or third-party providers whose services we have added to our pages.',
    examples: ['Chat history persistence', 'Dream visualization preferences', 'Onboarding completion state'],
    color: 'from-pink-500 to-rose-600',
  },
];

const sections = [
  {
    title: '1. What Are Cookies?',
    content: 'Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, keep you logged in, and understand how you use the site. QuickRaina uses cookies and similar technologies (such as local storage) to deliver and improve our services.',
  },
  {
    title: '2. How to Control Cookies',
    content: `You can control cookies through your browser settings. Most browsers allow you to:

• View and delete cookies stored on your device.
• Block cookies from specific websites or all websites.
• Be notified when a cookie is being placed.

Please note that disabling essential cookies will affect your ability to use QuickRaina. To manage analytics and functional cookies, please contact us at privacy@quickraina.ai.`,
  },
  {
    title: '3. Third-Party Cookies',
    content: 'We use a limited number of trusted third-party services that may set their own cookies. This includes our payment processor (Stripe) and analytics provider (Plausible, a privacy-focused analytics tool). We do not use advertising cookies or sell your data to ad networks.',
  },
  {
    title: '4. Updates to This Policy',
    content: 'We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date. If you have questions, contact us at privacy@quickraina.ai.',
  },
];

export default function CookiePolicy() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <FadeIn>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-7 h-7 text-white" />
            </div>
            <h1 className={`font-display text-5xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Cookie <span className="gradient-text">Policy</span>
            </h1>
            <p className={`text-base ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
              Last updated: April 19, 2026
            </p>
            <p className={`text-xl leading-relaxed mt-4 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              We believe in transparency. Here's exactly what cookies we use and why.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {cookieTypes.map(({ name, required, desc, examples, color }, i) => (
              <FadeIn key={name} delay={i * 0.1}>
                <div className={`p-8 rounded-2xl border ${dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                      <Cookie className="w-5 h-5 text-white" />
                    </div>
                    <h2 className={`font-display text-xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{name}</h2>
                    <span className={`ml-auto text-xs font-semibold px-3 py-1 rounded-full border ${required ? 'text-violet-400 bg-violet-500/10 border-violet-500/20' : dark ? 'text-slate-400 bg-white/5 border-white/10' : 'text-slate-500 bg-slate-100 border-slate-200'}`}>
                      {required ? 'Required' : 'Optional'}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed mb-4 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wide mb-2 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Examples</div>
                    <ul className="space-y-1">
                      {examples.map(ex => (
                        <li key={ex} className={`flex items-center gap-2 text-sm ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map(({ title, content }, i) => (
              <FadeIn key={title} delay={i * 0.05}>
                <div className={`p-8 rounded-2xl border ${dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <h2 className={`font-display text-xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
                  <div className={`text-sm leading-relaxed whitespace-pre-line ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {content}
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

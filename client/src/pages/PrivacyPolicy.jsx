import { Shield } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, submit a dream description, or contact us. This includes:
    
• **Account information**: Name, email address, and password when you register.
• **Dream content**: The text descriptions and conversations you share with QuickRaina's AI system.
• **Usage data**: Information about how you interact with our services, including log data, device information, and IP addresses.
• **Payment information**: Processed securely through third-party payment processors; we do not store full card details.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

• Provide, maintain, and improve our AI dream visualization services.
• Personalize your experience and remember your preferences.
• Process transactions and send related information.
• Send technical notices, updates, and support messages.
• Monitor and analyze usage patterns to improve our platform.
• Detect, investigate, and prevent fraudulent or unauthorized activity.`,
  },
  {
    title: '3. Dream Data & Privacy',
    content: `Your dream content is deeply personal. We treat it accordingly:

• Dream descriptions and generated images are encrypted at rest using AES-256-GCM.
• Your dream data is **never sold** to third parties for advertising or profiling.
• We do not use your dream content to train third-party AI models without explicit consent.
• You can delete your dream history at any time from your account settings.
• Free-tier users' data is retained for 30 days; paid users retain unlimited history.`,
  },
  {
    title: '4. Data Sharing',
    content: `We do not sell, trade, or rent your personal information. We may share data with:

• **Service providers**: Trusted third parties who assist us in operating our platform (e.g., cloud hosting, analytics, payment processing), bound by confidentiality agreements.
• **Legal requirements**: If required by law or in response to valid legal process.
• **Business transfers**: In connection with a merger, acquisition, or sale of assets, with appropriate notice.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your account and associated data at any time by contacting us at privacy@quickraina.ai or through your account settings.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your location, you may have the following rights:

• **Access**: Request a copy of the personal data we hold about you.
• **Correction**: Ask us to correct inaccurate or incomplete data.
• **Deletion**: Request that we delete your personal information.
• **Portability**: Receive your data in a structured, machine-readable format.
• **Objection**: Object to certain types of data processing.

To exercise these rights, contact us at privacy@quickraina.ai.`,
  },
  {
    title: '7. Security',
    content: `We implement industry-standard security measures including encryption in transit (TLS 1.3) and at rest (AES-256), regular security audits, and access controls. However, no method of transmission over the Internet is 100% secure.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice on our website. Your continued use of QuickRaina after changes take effect constitutes your acceptance of the revised policy.`,
  },
  {
    title: '9. Contact Us',
    content: `If you have questions about this Privacy Policy or our data practices, please contact us at:\n\nprivacy@quickraina.ai\n\nQuickRaina Inc., 123 Dream Lane, San Francisco, CA 94105`,
  },
];

export default function PrivacyPolicy() {
  const { dark } = useTheme();

  return (
    <PublicLayout>
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <FadeIn>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h1 className={`font-display text-5xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className={`text-base ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
              Last updated: April 19, 2026
            </p>
            <p className={`text-xl leading-relaxed mt-4 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Your privacy matters to us. This policy explains how QuickRaina collects, uses, and protects your information.
            </p>
          </FadeIn>
        </div>
      </section>

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

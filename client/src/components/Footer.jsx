import { Link } from 'react-router-dom';
import { Sparkles, Mail, Heart } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const footerLinks = {
  Product: [
    { label: 'Features', to: '/#features' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Changelog', to: '/changelog' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact', to: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms-of-service' },
    { label: 'Cookie Policy', to: '/cookie-policy' },
  ],
};

const SocialXIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.632 5.907-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const SocialGithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const SocialLinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socials = [
  { Icon: SocialXIcon, href: '#', label: 'Twitter' },
  { Icon: SocialGithubIcon, href: '#', label: 'GitHub' },
  { Icon: SocialLinkedinIcon, href: '#', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:hello@healthedu.ai', label: 'Email' },
];

export default function Footer() {
  const { dark } = useTheme();

  return (
    <footer className={`border-t ${dark ? 'border-white/10 bg-[#06060d]' : 'border-slate-200 bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl gradient-text">PatientEdu Agent</span>
            </Link>
            <p className={`text-sm leading-relaxed mb-6 max-w-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              Empowering patients with clear, AI-powered medical education and visual explanations of diseases and treatments.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    dark
                      ? 'bg-white/5 text-slate-400 hover:bg-violet-500/20 hover:text-violet-400'
                      : 'bg-slate-100 text-slate-500 hover:bg-violet-50 hover:text-violet-600'
                  }`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className={`text-sm font-semibold mb-6 uppercase tracking-wider ${dark ? 'text-white' : 'text-slate-900'}`}>{category}</h4>
              <ul className="space-y-4">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className={`text-sm transition-colors duration-200 ${
                        dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
          <p className={`text-sm flex items-center gap-1.5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
            © 2026 PatientEdu Agent. Made with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> for patients.
          </p>
          <div className="flex items-center gap-6">
            <p className={`text-xs ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
              AI-powered. Patient-first. Always educational.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

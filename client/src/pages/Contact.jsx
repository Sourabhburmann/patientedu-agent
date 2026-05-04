import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';
import { API_BASE_URL } from '../config';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@quickraina.ai', href: 'mailto:hello@quickraina.ai' },
  { icon: MapPin, label: 'Office', value: '123 Dream Street, San Francisco, CA 94102' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 987-6543', href: 'tel:+15559876543' },
];

export default function Contact() {
  const { dark } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email address';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    
    setStatus('loading');
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
      } else {
        setErrors({ submit: data.message || 'Something went wrong' });
        setStatus('error');
      }
    } catch (error) {
      setErrors({ submit: 'Failed to connect to the server' });
      setStatus('error');
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 ${
      dark
        ? `bg-white/5 border text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 ${errors[field] ? 'border-red-500' : 'border-white/10 focus:border-violet-500'}`
        : `bg-slate-50 border text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-violet-200 ${errors[field] ? 'border-red-400' : 'border-slate-200 focus:border-violet-400'}`
    }`;

  return (
    <PublicLayout>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-6">
              Get In Touch
            </span>
            <h1 className={`font-display text-5xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Let's start a <span className="gradient-text">conversation</span>
            </h1>
            <p className={`text-xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Have a dream, question, or just want to say hello? We'd love to hear from you. Our team typically responds within a few hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info Panel */}
            <div className="lg:col-span-2 space-y-6">
              <FadeIn direction="right">
                <div className={`rounded-2xl border p-8 ${dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <h2 className={`font-display text-2xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>Contact Info</h2>
                  <div className="space-y-5">
                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className={`text-xs font-semibold uppercase tracking-wide mb-0.5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{label}</div>
                          {href ? (
                            <a href={href} className="text-sm text-violet-400 hover:text-violet-300 transition-colors">{value}</a>
                          ) : (
                            <div className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-700'}`}>{value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.15}>
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-500" />
                  <div className="relative p-8 text-white">
                    <h3 className="font-display text-xl font-bold mb-3">Response Time</h3>
                    <p className="text-sm text-white/80 mb-4">Our team is available Monday to Friday, 9 AM – 6 PM PST.</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="font-display text-3xl font-bold">2h</div>
                        <div className="text-xs text-white/70">Average response</div>
                      </div>
                      <div>
                        <div className="font-display text-3xl font-bold">24h</div>
                        <div className="text-xs text-white/70">Max wait time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn direction="left">
                <div className={`rounded-2xl border p-8 ${dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-16 text-center"
                      >
                        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                          <CheckCircle className="w-10 h-10 text-green-400" />
                        </div>
                        <h3 className={`font-display text-2xl font-bold mb-3 ${dark ? 'text-white' : 'text-slate-900'}`}>Message Sent!</h3>
                        <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                          Thanks for reaching out. We'll be in touch within a few hours.
                        </p>
                        <button
                          onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                          className="mt-6 px-6 py-2.5 rounded-xl bg-violet-500/10 text-violet-400 text-sm font-semibold hover:bg-violet-500/20 transition-colors"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        <h2 className={`font-display text-2xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>Send us a message</h2>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className={`block text-xs font-semibold mb-2 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Your Name *</label>
                            <input
                              type="text"
                              name="name"
                              id="contact-name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className={inputClass('name')}
                            />
                            {errors.name && (
                              <div className="flex items-center gap-1 mt-1.5 text-red-400 text-xs">
                                <AlertCircle className="w-3 h-3" />{errors.name}
                              </div>
                            )}
                          </div>
                          <div>
                            <label className={`block text-xs font-semibold mb-2 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              id="contact-email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              className={inputClass('email')}
                            />
                            {errors.email && (
                              <div className="flex items-center gap-1 mt-1.5 text-red-400 text-xs">
                                <AlertCircle className="w-3 h-3" />{errors.email}
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className={`block text-xs font-semibold mb-2 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Subject</label>
                          <input
                            type="text"
                            name="subject"
                            id="contact-subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="How can we help?"
                            className={inputClass('subject')}
                          />
                        </div>

                        <div>
                          <label className={`block text-xs font-semibold mb-2 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Message *</label>
                          <textarea
                            name="message"
                            id="contact-message"
                            rows={6}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us what's on your mind..."
                            className={`${inputClass('message')} resize-none`}
                          />
                          {errors.message && (
                            <div className="flex items-center gap-1 mt-1.5 text-red-400 text-xs">
                              <AlertCircle className="w-3 h-3" />{errors.message}
                            </div>
                          )}
                        </div>

                        <motion.button
                          type="submit"
                          id="contact-submit"
                          disabled={status === 'loading'}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-base hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300 disabled:opacity-60"
                        >
                          {status === 'loading' ? (
                            <><Loader className="w-4 h-4 animate-spin" />Sending...</>
                          ) : (
                            <><Send className="w-4 h-4" />Send Message</>
                          )}
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

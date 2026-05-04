import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Sparkles, AlertCircle, Loader, Check } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';

export default function Signup() {
  const { dark } = useTheme();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const passwordStrength = (pw) => {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  };

  const strength = passwordStrength(form.password);
  const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'][strength];
  const strengthColor = ['', 'bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-green-500'][strength];

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'At least 6 characters required';
    if (form.password !== form.confirm) errs.confirm = 'Passwords do not match';
    if (!agreed) errs.agreed = 'You must agree to the terms';
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
    setLoading(true);
    const result = await signup(form.name, form.email, form.password);
    setLoading(false);
    if (result.ok) {
      // After signup, we might want to navigate to login or home
      navigate('/login');
    } else {
      setErrors({ api: result.error });
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 ${
      dark
        ? `bg-white/5 border text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 ${errors[field] ? 'border-red-500' : 'border-white/10 focus:border-violet-500'}`
        : `bg-slate-50 border text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-violet-200 ${errors[field] ? 'border-red-400' : 'border-slate-200 focus:border-violet-400'}`
    }`;

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 py-12 relative overflow-hidden ${dark ? 'bg-[#0a0a0f]' : 'bg-slate-50'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-violet-600/15 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`relative w-full max-w-md rounded-3xl border p-8 sm:p-10 ${dark ? 'bg-[#12121a] border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}
      >
        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)]">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl gradient-text">PatientEdu Agent</span>
        </div>

        <h1 className={`font-display text-3xl font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>Create your account</h1>
        <p className={`text-sm mb-8 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
          Join thousands of patients taking charge of their health education.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className={`block text-xs font-semibold mb-2 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Full Name</label>
            <input type="text" name="name" id="signup-name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass('name')} />
            {errors.name && <div className="flex items-center gap-1 mt-1.5 text-red-400 text-xs"><AlertCircle className="w-3 h-3" />{errors.name}</div>}
          </div>

          {/* Email */}
          <div>
            <label className={`block text-xs font-semibold mb-2 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Email Address</label>
            <input type="email" name="email" id="signup-email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass('email')} />
            {errors.email && <div className="flex items-center gap-1 mt-1.5 text-red-400 text-xs"><AlertCircle className="w-3 h-3" />{errors.email}</div>}
          </div>

          {/* Password */}
          <div>
            <label className={`block text-xs font-semibold mb-2 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Password</label>
            <div className="relative">
              <input type={showPass ? 'text' : 'password'} name="password" id="signup-password" value={form.password} onChange={handleChange} placeholder="Min. 6 characters" className={`${inputClass('password')} pr-12`} />
              <button type="button" onClick={() => setShowPass(!showPass)} className={`absolute right-3.5 top-1/2 -translate-y-1/2 ${dark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`}>
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {form.password && (
              <div className="mt-2">
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-300 ${i <= strength ? strengthColor : dark ? 'bg-white/10' : 'bg-slate-200'}`} />
                  ))}
                </div>
                <span className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-500'}`}>Strength: {strengthLabel}</span>
              </div>
            )}
            {errors.password && <div className="flex items-center gap-1 mt-1.5 text-red-400 text-xs"><AlertCircle className="w-3 h-3" />{errors.password}</div>}
          </div>

          {/* Confirm */}
          <div>
            <label className={`block text-xs font-semibold mb-2 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Confirm Password</label>
            <input type="password" name="confirm" id="signup-confirm" value={form.confirm} onChange={handleChange} placeholder="Repeat password" className={inputClass('confirm')} />
            {form.confirm && form.password === form.confirm && (
              <div className="flex items-center gap-1 mt-1.5 text-green-400 text-xs"><Check className="w-3 h-3" />Passwords match</div>
            )}
            {errors.confirm && <div className="flex items-center gap-1 mt-1.5 text-red-400 text-xs"><AlertCircle className="w-3 h-3" />{errors.confirm}</div>}
          </div>

          {/* Terms */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <button
                type="button"
                id="terms-checkbox"
                onClick={() => { setAgreed(!agreed); if (errors.agreed) setErrors(prev => ({ ...prev, agreed: '' })); }}
                className={`w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all mt-0.5 ${agreed ? 'bg-violet-600 border-violet-600' : dark ? 'border-white/20 bg-transparent' : 'border-slate-300 bg-transparent'}`}
              >
                {agreed && <Check className="w-3 h-3 text-white" />}
              </button>
              <span className={`text-xs ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                I agree to the{' '}
                <Link to="#" className="text-violet-400 hover:text-violet-300">Terms of Service</Link>
                {' '}and{' '}
                <Link to="#" className="text-violet-400 hover:text-violet-300">Privacy Policy</Link>
              </span>
            </label>
            {errors.agreed && <div className="flex items-center gap-1 mt-1.5 text-red-400 text-xs"><AlertCircle className="w-3 h-3" />{errors.agreed}</div>}
          </div>

          <motion.button
            type="submit"
            id="signup-submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300 disabled:opacity-60"
          >
            {loading ? <><Loader className="w-4 h-4 animate-spin" />Creating Account...</> : 'Create Account — Free'}
          </motion.button>
        </form>

        <p className={`text-center text-sm mt-6 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
          Already have an account?{' '}
          <Link to="/login" className="text-violet-400 font-semibold hover:text-violet-300 transition-colors">Sign in</Link>
        </p>

        <Link to="/" className={`block text-center text-xs mt-4 ${dark ? 'text-slate-600 hover:text-slate-400' : 'text-slate-400 hover:text-slate-600'} transition-colors`}>
          ← Back to home
        </Link>
      </motion.div>
    </div>
  );
}

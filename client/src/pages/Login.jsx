import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Sparkles, AlertCircle, Loader } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const { dark } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = 'Email is required';
    if (!form.password) errs.password = 'Password is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    setApiError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    const result = await login(form.email, form.password);
    setLoading(false);
    if (result.ok) {
      navigate('/chat');
    } else {
      setApiError(result.error || 'Login failed. Try demo@healthedu.ai / demo123');
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 ${
      dark
        ? `bg-white/5 border text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 ${errors[field] ? 'border-red-500' : 'border-white/10 focus:border-violet-500'}`
        : `bg-slate-50 border text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-violet-200 ${errors[field] ? 'border-red-400' : 'border-slate-200 focus:border-violet-400'}`
    }`;

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden ${dark ? 'bg-[#0a0a0f]' : 'bg-slate-50'}`}>
      {/* Background */}
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
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)]">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl gradient-text">PatientEdu Agent</span>
        </div>

        <h1 className={`font-display text-3xl font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>Welcome back</h1>
        <p className={`text-sm mb-8 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
          Sign in to continue your health education journey.
        </p>

        {/* Demo hint */}
        <div className={`flex items-start gap-2 p-3 rounded-xl mb-6 text-xs ${dark ? 'bg-violet-500/10 border border-violet-500/20 text-violet-300' : 'bg-violet-50 border border-violet-200 text-violet-700'}`}>
          <Sparkles className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
          <span><strong>Demo:</strong> Use email <code>demo@healthedu.ai</code> and password <code>demo123</code>, or just sign up with any credentials.</span>
        </div>

        {apiError && (
          <div className="flex items-center gap-2 p-3 rounded-xl mb-5 text-sm bg-red-500/10 border border-red-500/20 text-red-400">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />{apiError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className={`block text-xs font-semibold mb-2 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Email Address</label>
            <input
              type="email"
              name="email"
              id="login-email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass('email')}
            />
            {errors.email && (
              <div className="flex items-center gap-1 mt-1.5 text-red-400 text-xs"><AlertCircle className="w-3 h-3" />{errors.email}</div>
            )}
          </div>

          <div>
            <label className={`block text-xs font-semibold mb-2 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>Password</label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                id="login-password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`${inputClass('password')} pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className={`absolute right-3.5 top-1/2 -translate-y-1/2 ${dark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <div className="flex items-center gap-1 mt-1.5 text-red-400 text-xs"><AlertCircle className="w-3 h-3" />{errors.password}</div>
            )}
          </div>

          <motion.button
            type="submit"
            id="login-submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300 disabled:opacity-60"
          >
            {loading ? <><Loader className="w-4 h-4 animate-spin" />Signing In...</> : 'Sign In'}
          </motion.button>
        </form>

        <p className={`text-center text-sm mt-6 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
          Don't have an account?{' '}
          <Link to="/signup" className="text-violet-400 font-semibold hover:text-violet-300 transition-colors">Create one free</Link>
        </p>

        <Link to="/" className={`block text-center text-xs mt-4 ${dark ? 'text-slate-600 hover:text-slate-400' : 'text-slate-400 hover:text-slate-600'} transition-colors`}>
          ← Back to home
        </Link>
      </motion.div>
    </div>
  );
}

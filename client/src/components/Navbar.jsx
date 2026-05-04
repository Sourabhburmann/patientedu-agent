import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Sparkles, LogOut, User } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
    setProfileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? dark
            ? 'glass shadow-[0_4px_32px_rgba(124,58,237,0.15)]'
            : 'glass-light shadow-[0_4px_32px_rgba(0,0,0,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative group shrink-0">
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/30 to-cyan-500/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-12 h-12 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-2xl overflow-hidden">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="14" fill="url(#logo-grad)" />
                  <line x1="15" y1="10" x2="15" y2="17" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="25" y1="10" x2="25" y2="17" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  <circle cx="15" cy="10" r="2" fill="white"/>
                  <circle cx="25" cy="10" r="2" fill="white"/>
                  <path d="M15 17 Q15 23 20 23 Q25 23 25 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M20 23 L20 30 Q20 36 27 36 Q34 36 34 29" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <circle cx="34" cy="29" r="4.5" stroke="white" strokeWidth="2.2" fill="none"/>
                  <circle cx="34" cy="29" r="1.8" fill="white"/>
                  <defs>
                    <linearGradient id="logo-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8B5CF6" />
                      <stop offset="1" stopColor="#22D3EE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <span className="font-display font-black text-2xl lg:text-3xl gradient-text tracking-tight">PatientEdu Agent</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'text-violet-400 bg-violet-500/10'
                    : dark
                    ? 'text-slate-300 hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-black/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              id="theme-toggle"
              className={`p-2 rounded-lg transition-all duration-300 ${
                dark ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-slate-900 hover:bg-black/5'
              }`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {user ? (
              <div className="relative hidden lg:block">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-violet-500/10 border border-violet-500/20 hover:border-violet-500/40 transition-all"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-slate-900'}`}>
                    {user.name}
                  </span>
                </button>
                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      className={`absolute right-0 mt-2 w-48 rounded-xl shadow-xl border p-2 ${
                        dark ? 'bg-[#1a1a2e] border-white/10' : 'bg-white border-slate-200'
                      }`}
                    >
                      <Link
                        to="/chat"
                        onClick={() => setProfileOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                          dark ? 'text-slate-300 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />Open Chat
                      </Link>
                      <button
                        onClick={handleLogout}
                        className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                          dark ? 'text-red-400 hover:bg-red-500/10' : 'text-red-500 hover:bg-red-50'
                        }`}
                      >
                        <LogOut className="w-4 h-4" />Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-2">
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    dark ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  id="get-started-btn"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-semibold hover:shadow-[0_0_24px_rgba(124,58,237,0.5)] hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg ${dark ? 'text-slate-300 hover:text-white' : 'text-slate-600'}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t ${
              dark ? 'bg-[#0a0a0f]/95 border-white/10' : 'bg-white/95 border-slate-200'
            } backdrop-blur-xl`}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === link.to
                      ? 'text-violet-400 bg-violet-500/10'
                      : dark ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                {user ? (
                  <>
                    <Link to="/chat" className="block px-4 py-3 rounded-xl text-sm text-violet-400 bg-violet-500/10">
                      Open Chat
                    </Link>
                    <button onClick={handleLogout} className="text-left px-4 py-3 rounded-xl text-sm text-red-400">
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className={`block px-4 py-3 rounded-xl text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                      Sign In
                    </Link>
                    <Link to="/signup" className="block px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-semibold text-center">
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

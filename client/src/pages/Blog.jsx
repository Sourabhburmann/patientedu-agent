import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';

const posts = [
  {
    slug: '#',
    category: 'Research',
    categoryColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    title: 'The Science of Dream Interpretation: How AI Reads Your Subconscious',
    excerpt: 'Explore the neuroscience behind dreaming and how modern language models are being trained to decode the symbolic language of the sleeping mind.',
    author: 'Dr. Maya Lin',
    date: 'April 15, 2026',
    readTime: '8 min read',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    slug: '#',
    category: 'Art & Creativity',
    categoryColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    title: 'How Digital Artists Are Using QuickRaina to Break Creative Blocks',
    excerpt: 'A deep dive into the workflows of professional creators who have integrated AI dream visualization into their daily practice.',
    author: 'Carlos Menem',
    date: 'April 10, 2026',
    readTime: '5 min read',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    slug: '#',
    category: 'Wellness',
    categoryColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    title: 'Dream Journaling in the Age of AI: A New Approach to Self-Discovery',
    excerpt: 'How combining traditional dream journaling with AI visualization is helping people gain deeper insight into their emotions and thought patterns.',
    author: 'Sarah Bloom',
    date: 'April 4, 2026',
    readTime: '6 min read',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    slug: '#',
    category: 'Product',
    categoryColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    title: 'Introducing Multi-Scene Dreams: Visualize Full Dream Narratives',
    excerpt: 'We\'ve just shipped one of our most requested features — the ability to visualize multiple scenes from a single dream as a cohesive visual sequence.',
    author: 'QuickRaina Team',
    date: 'March 28, 2026',
    readTime: '3 min read',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    slug: '#',
    category: 'Psychology',
    categoryColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    title: 'Recurring Dreams and What They Mean: A Therapist\'s Perspective',
    excerpt: 'Clinical psychologist Dr. Marcus Rivera discusses how recurring dreams signal unresolved emotional experiences and how visualization can aid in processing them.',
    author: 'Dr. Marcus Rivera',
    date: 'March 20, 2026',
    readTime: '7 min read',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    slug: '#',
    category: 'Technology',
    categoryColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    title: 'Behind the Model: How QuickRaina\'s AI Understands Dream Symbolism',
    excerpt: 'A technical deep dive into the architecture and training methodology that powers our dream interpretation engine.',
    author: 'QuickRaina AI Team',
    date: 'March 12, 2026',
    readTime: '10 min read',
    gradient: 'from-indigo-500 to-blue-600',
  },
];

export default function Blog() {
  const { dark } = useTheme();
  const [featured, ...rest] = posts;

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-6">
              Blog & Insights
            </span>
            <h1 className={`font-display text-5xl sm:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
              Stories from the <span className="gradient-text">dream world</span>
            </h1>
            <p className={`text-xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Insights on AI, creativity, psychology, and the art of understanding your inner world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link to={featured.slug} className={`group relative flex flex-col lg:flex-row gap-0 rounded-3xl border overflow-hidden transition-all duration-500 hover:border-violet-500/40 hover:shadow-[0_0_60px_rgba(124,58,237,0.15)] ${dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className={`lg:w-2/5 h-56 lg:h-auto bg-gradient-to-br ${featured.gradient} flex items-center justify-center`}>
                <span className="text-8xl font-display font-black text-white/20 select-none">✦</span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center lg:w-3/5">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4 w-fit ${featured.categoryColor}`}>
                  {featured.category}
                </span>
                <h2 className={`font-display text-2xl lg:text-3xl font-bold mb-4 group-hover:text-violet-400 transition-colors ${dark ? 'text-white' : 'text-slate-900'}`}>
                  {featured.title}
                </h2>
                <p className={`text-base leading-relaxed mb-6 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{featured.excerpt}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
                      <User className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{featured.author}</span>
                  </div>
                  <span className={`text-sm flex items-center gap-1.5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                    <Clock className="w-3.5 h-3.5" />{featured.readTime}
                  </span>
                  <span className={`text-sm ml-auto flex items-center gap-1 text-violet-400 font-medium`}>
                    Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {rest.map(({ slug, category, categoryColor, title, excerpt, author, readTime, gradient }) => (
              <StaggerItem key={title}>
                <Link to={slug} className={`group flex flex-col h-full rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-lg ${dark ? 'bg-[#12121a] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className={`h-36 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                    <span className="text-5xl font-display font-black text-white/20 select-none">✦</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-3 w-fit ${categoryColor}`}>
                      {category}
                    </span>
                    <h3 className={`font-display text-lg font-bold mb-3 group-hover:text-violet-400 transition-colors flex-1 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                    <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-slate-400' : 'text-slate-600'} line-clamp-2`}>{excerpt}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <span className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{author}</span>
                      <span className={`text-xs ml-auto flex items-center gap-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                        <Clock className="w-3 h-3" />{readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </PublicLayout>
  );
}

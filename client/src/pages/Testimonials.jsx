import { Star } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { FadeIn } from '../components/AnimationWrappers';
import PublicLayout from '../layouts/PublicLayout';

const testimonials = [
    { id: 1, description: "QuickRaina helped me visualize dreams I've had for years. The AI accurately captured the emotional atmosphere of my subconscious world.", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", name: "Alex Turner", role: "Digital Artist" },
    { id: 2, description: "The conversational refinement is a game-changer. I was able to tweak the visual elements until it looked exactly as I remembered.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", name: "Harry Peter", role: "Neuroscientist" },
    { id: 3, description: "As a student of psychology, this tool is invaluable for externalizing dream symbolism. It's like having a camera for your sleep.", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60", name: "Jason Kim", role: "Psychologist" },
    { id: 4, description: "The immersion is incredible. Every visualization feels like a personal journey back into my own imagination.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200", name: "Sofia Martinez", role: "UX Designer" },
    { id: 5, description: "I love the privacy focus. Knowing my dream data is sacred allows me to be completely honest with the AI refinement process.", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60", name: "Alex Johnson", role: "Privacy Advocate" },
    { id: 6, description: "If you want to understand your dreams better, QuickRaina is a must-have. It dramatically speeds up self-reflection through visuals.", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", name: "Emily Karter", role: "Writer" },
    { id: 7, description: "Strikes the perfect balance between artistic license and accurate interpretation. It feels built by people who truly understand dreaming.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200", name: "Levin Smith", role: "Researcher" },
    { id: 8, description: "Building a dream journal has never been more visual or satisfying. I can now look back at my dream history in full color.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200", name: "Sarah Connor", role: "Journalist" },
    { id: 9, description: "Every scene generated feels premium. It replaces repetitive dry journaling with a rich, cinematic experience.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200", name: "Marcus Roe", role: "Filmmaker" }
];

const columns = [
    { start: 0, end: 3, className: "animate-scroll-up-1" },
    { start: 3, end: 6, className: "hidden md:flex flex-col animate-scroll-up-2" },
    { start: 6, end: 9, className: "hidden lg:flex flex-col animate-scroll-up-3" }
];

export default function Testimonials() {
  const { dark } = useTheme();

  const renderCard = (testimonial, index) => (
    <div key={`${testimonial.id}-${index}`} className={`border rounded-[2rem] p-8 mb-6 transition-all duration-500 hover:scale-[1.02] ${
        dark ? 'bg-[#12121a] border-white/5 shadow-2xl shadow-black/50' : 'bg-white border-slate-200 shadow-xl'
    }`}>
        <div className="mb-6">
            <svg width="24" height="18" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13.056c.464 0 .91-.131 1.237-.364.329-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88C7.91 6.97 7.464 6.838 7 6.838c-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.513-.879.328-.233.773-.364 1.237-.364.232 0 .455-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.619-.181c-1.392 0-2.728.393-3.712 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.513.88.328.233.773.364 1.237.364zm9.83 0c.465 0 .91-.131 1.238-.364.328-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88-.328-.233-.773-.364-1.237-.364-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.512-.879.329-.233.774-.364 1.238-.364.232 0 .454-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.62-.181c-1.391 0-2.727.393-3.711 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.512.88.329.233.774.364 1.238.364z"/>
                </g>
            </svg>
        </div>
        <p className={`text-lg leading-relaxed mb-8 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            "{testimonial.description}"
        </p>
        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-2xl object-cover border-2 border-violet-500/20 shadow-lg" />
            <div>
                <p className={`font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{testimonial.name}</p>
                <p className="text-sm font-semibold gradient-text uppercase tracking-widest">{testimonial.role}</p>
            </div>
        </div>
    </div>
  );

  return (
    <PublicLayout>
        <style>
            {`
                @keyframes scroll-up {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .animate-scroll-up-1 {
                    animation: scroll-up 40s linear infinite;
                }
                .animate-scroll-up-2 {
                    animation: scroll-up 50s linear infinite;
                }
                .animate-scroll-up-3 {
                    animation: scroll-up 35s linear infinite; 
                }
                .animate-scroll-up-1:hover, .animate-scroll-up-2:hover, .animate-scroll-up-3:hover {
                    animation-play-state: paused;
                }
            `}
        </style>

        <section className="pt-32 pb-20 relative overflow-hidden min-h-screen bg-black">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-20">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-8 uppercase tracking-widest">
                        <Star className="w-4 h-4 text-violet-500 fill-violet-500" /> Community Wall
                    </div>
                    <h1 className="font-display text-6xl sm:text-7xl font-black text-white mb-8">
                        People love <span className="gradient-text">QuickRaina</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Real stories from designers, researchers, and dreamers using our AI to bridge the gap between imagination and reality.
                    </p>
                </FadeIn>
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 overflow-hidden h-[800px]">
                {/* Edge Fades */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden h-full">
                    {columns.map((col, colIndex) => (
                        <div key={colIndex} className={col.className}>
                            {[...testimonials.slice(col.start, col.end), ...testimonials.slice(col.start, col.end)].map((testimonial, index) =>
                                renderCard(testimonial, index)
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto px-4 text-center mt-32 relative z-10">
                <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-white/10 backdrop-blur-3xl shadow-2xl">
                    <h2 className="text-4xl font-black text-white mb-6">Ready to see your dreams?</h2>
                    <p className="text-slate-400 mb-8 text-lg">Join thousands of dreamers who are already visualizing their subconscious worlds.</p>
                    <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-black text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-5px_rgba(139,92,246,0.5)]">
                        Get Started for Free
                    </button>
                </div>
            </div>
        </section>
    </PublicLayout>
  );
}

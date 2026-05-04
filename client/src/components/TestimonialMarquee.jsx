import { useTheme } from '../hooks/useTheme';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';

export default function TestimonialMarquee() {
    const { dark } = useTheme();

    const cardsData = [
        {
            image: avatar1,
            name: 'Priya Sharma',
            handle: '@priyasharma',
            date: 'April 20, 2025',
            text: "PatientEdu Agent explained my Type 2 Diabetes diagnosis in a way I could finally understand. The diagram was incredibly helpful!"
        },
        {
            image: avatar2,
            name: 'James Wilson',
            handle: '@jwilson_health',
            date: 'May 10, 2025',
            text: "I was terrified after my hypertension diagnosis. This tool broke it all down clearly and helped me have a better conversation with my doctor."
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Sarah Chen',
            handle: '@sarahcares',
            date: 'June 5, 2025',
            text: "As a caregiver for my elderly mother, PatientEdu Agent has been invaluable. I can look up any condition and explain it to her simply."
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'David Kumar',
            handle: '@davidk_med',
            date: 'May 10, 2025',
            text: "The medical illustrations are stunning and actually accurate. A fantastic tool for patient education. Highly recommended."
        },
    ];

    const CreateCard = ({ card }) => (
        <div className={`p-4 rounded-2xl mx-4 transition-all duration-300 w-72 shrink-0 border ${
            dark 
            ? 'bg-white/5 border-white/10 hover:border-violet-500/50 hover:bg-white/10 shadow-2xl shadow-black/20' 
            : 'bg-white border-slate-200 hover:border-violet-400 hover:shadow-xl'
        }`}>
            <div className="flex gap-3">
                <img className="size-11 rounded-full object-cover ring-2 ring-violet-500/20" src={card.image} alt="User Image" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                        <p className={`font-semibold text-sm ${dark ? 'text-white' : 'text-slate-900'}`}>{card.name}</p>
                        <svg className="shrink-0" width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#7C3AED" />
                        </svg>
                    </div>
                    <span className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{card.handle}</span>
                </div>
            </div>
            <p className={`text-sm py-4 leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>"{card.text}"</p>
            <div className={`flex items-center justify-between text-xs ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
                <div className="flex items-center gap-1.5">
                    <span>Posted on</span>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
                <p>{card.date}</p>
            </div>
        </div>
    );

    return (
        <section className={`py-20 relative overflow-hidden ${dark ? 'bg-[#0a0a0f]' : 'bg-slate-50'}`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-violet-600/5 blur-[120px] pointer-events-none rounded-full" />
            
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center relative z-20">
                <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
                    Trusted by <span className="gradient-text">patients</span> worldwide
                </h2>
                <p className={`max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Join thousands of patients who are learning about their health with PatientEdu Agent.
                </p>
            </div>

            <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 35s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
                animation-duration: 40s;
            }
            
            .marquee-inner:hover {
                animation-play-state: paused;
            }
        `}</style>

            <div className="space-y-6">
                <div className="marquee-row w-full overflow-hidden relative group">
                    <div className={`absolute left-0 top-0 h-full w-24 md:w-64 z-10 pointer-events-none bg-gradient-to-r ${dark ? 'from-[#0a0a0f]' : 'from-slate-50'} to-transparent`} />
                    <div className="marquee-inner flex transform-gpu min-w-max pt-10 pb-5">
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard key={`row1-${index}`} card={card} />
                        ))}
                    </div>
                    <div className={`absolute right-0 top-0 h-full w-24 md:w-64 z-10 pointer-events-none bg-gradient-to-l ${dark ? 'from-[#0a0a0f]' : 'from-slate-50'} to-transparent`} />
                </div>

                <div className="marquee-row w-full overflow-hidden relative group">
                    <div className={`absolute left-0 top-0 h-full w-24 md:w-64 z-10 pointer-events-none bg-gradient-to-r ${dark ? 'from-[#0a0a0f]' : 'from-slate-50'} to-transparent`} />
                    <div className="marquee-inner marquee-reverse flex transform-gpu min-w-max pt-10 pb-5">
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard key={`row2-${index}`} card={card} />
                        ))}
                    </div>
                    <div className={`absolute right-0 top-0 h-full w-24 md:w-64 z-10 pointer-events-none bg-gradient-to-l ${dark ? 'from-[#0a0a0f]' : 'from-slate-50'} to-transparent`} />
                </div>
            </div>
        </section>
    );
}

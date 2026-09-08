import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Stars from '../../components/common/Stars';
import SabluyonRoute from '../../../../public/images/trail/SabluyonTrail.jpg'

export default function TrailHero() {
    return (
        <section className="relative flex h-150 w-full items-start justify-start overflow-hidden bg-secondary rounded-2xl">
            <img
                src={SabluyonRoute}
                alt="Sabluyon - Mt. Masaraga"
                className="w-full h-150 object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/15"></div>
            <div className="absolute inset-0 p-4 sm:p-6 md:p-10 flex flex-col justify-end md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 overflow-y-auto">
                <div className="max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md mb-2 sm:mb-3 font-sans">
                        Standard Summit Trail
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 drop-shadow text-primary">
                        <div className="flex items-center text-sm md:text-base">
                            <Stars />
                        </div>
                        <span className="text-white/90 text-sm md:text-base font-semibold ml-1">4.8</span>
                        <span className="text-white/70 text-xs md:text-sm font-normal">(124 reviews)</span>
                    </div>
                </div>
                <div className="flex items-center shrink-0">
                    <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl shadow-lg hover:shadow-primary/30 active:scale-[0.98] transition-all duration-200 border border-white/20 backdrop-blur-sm group/btn">
                        <Calendar className='w-5 h-5' />
                        <span>Check Availability</span>
                    </button>
                </div>
            </div>
        </section>

    );
}

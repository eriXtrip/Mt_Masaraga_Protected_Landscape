import { Clock, Mountain, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export default function TrailCard({ trail }) {
    const navigate = useNavigate();

    return (
        <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-3 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">

            {/* Image Box */}
            <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-surface-container-high lg:h-48">
                <img
                    src={trail.image}
                    alt={`${trail.name} Trail`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Minimal Difficulty Pill */}
                <div className="absolute top-3 left-3 z-10">
                    <span className={`inline-flex items-center rounded-xl px-3 py-1 text-xs font-bold tracking-wider uppercase shadow-xs backdrop-blur-md ${trail.difficultyClass}`}>
                        {trail.difficulty}
                    </span>
                </div>

                {/* Corner Quick-Action Icon */}
                <div className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-lowest/80 text-on-surface backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-surface-container-lowest">
                    <ArrowUpRight size={18} />
                </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-1 flex-col px-2 pt-4 pb-2">

                {/* Title */}
                <h3 className="mb-1.5 text-xl font-extrabold tracking-tight text-on-surface transition-colors group-hover:text-primary md:text-2xl">
                    {trail.name}
                </h3>

                {/* Description */}
                <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-on-surface-variant">
                    {trail.description}
                </p>

                {/* Stats Grid */}
                <div className="mb-4 mt-auto grid grid-cols-2 gap-2 rounded-2xl bg-surface-container-low/60 p-2.5 border border-outline-variant/20 text-xs font-bold text-on-surface">
                    <div className="flex items-center gap-2 px-2 py-1">
                        <Clock size={15} className="text-primary shrink-0" aria-hidden="true" />
                        <span className="truncate">{trail.stats[0]}</span>
                    </div>

                    <div className="flex items-center gap-2 border-l border-outline-variant/30 px-2 py-1">
                        <Mountain size={15} className="text-primary shrink-0" aria-hidden="true" />
                        <span className="truncate">{trail.stats[1]}</span>
                    </div>
                </div>

                {/* Full Card CTA Button */}
                <Button
                    type="button"
                    variant="default"
                    size="lg"
                    onClick={() => navigate('/trail')}
                    className="w-full rounded-xl font-bold transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98]"
                >
                    Explore Trail
                </Button>
            </div>
        </article>
    );
}
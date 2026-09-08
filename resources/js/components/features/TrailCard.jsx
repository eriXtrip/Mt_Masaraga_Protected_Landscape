import { Clock5, Mountain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export default function TrailCard({ trail }) {
    const navigate = useNavigate();
    return (
        <div className="mx-auto flex h-full w-full flex-col overflow-hidden rounded-2xl border border-outline-variant bg-surface-container shadow-sm transition duration-200 hover:shadow-md">
            <div className="relative h-52 w-full overflow-hidden bg-surface-container-high lg:h-48">
                <img
                    src={trail.image}
                    alt={`${trail.name} Trail`}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-on-surface md:text-2xl">
                        {trail.name}
                    </h3>
                    <span
                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${trail.difficultyClass}`}
                    >
                        {trail.difficulty}
                    </span>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-on-surface-variant md:text-base">
                    {trail.description}
                </p>

                <div className="mb-6 mt-auto flex items-center justify-between border-t border-outline-variant pt-4 text-xs font-medium text-on-surface md:text-sm">
                    <div className="flex items-center gap-1.5">
                        <Clock5 size={18} className="text-primary" />
                        <span>{trail.stats[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Mountain size={18} className="text-primary" />
                        <span>{trail.stats[1]}</span>
                    </div>
                </div>

                <Button
                    type="button"
                    variant='outline'
                    size="lg"
                    onClick={() => navigate('/trail')}
                >
                    View Details
                </Button>
            </div>
        </div>
    );
}

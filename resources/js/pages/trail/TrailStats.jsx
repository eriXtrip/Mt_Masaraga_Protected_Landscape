import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { MapPin, TrendingUp, Clock, Map, BarChart, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function TrailStats({ trail }) {
    const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
    return (
        <section ref={sectionRef} className={`space-y-4 overflow-hidden transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {trail.stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg bg-white shadow-sm ${stat.className || ''}`}
                    >
                        <div className="flex items-center gap-2">
                            <stat.icon className="h-5 w-5 text-primary" />
                            <div className="text-sm font-medium text-on-surface-variant">{stat.label}</div>
                        </div>
                        <div className="text-2xl font-bold text-on-surface mt-2">{stat.value}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, Clock, Map, BarChart, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const defaultTrail = {
    stats: [
        { icon: MapPin, value: "1,328m", label: "Elevation" },
        { icon: TrendingUp, value: "Major", label: "Difficulty" },
        { icon: Clock, value: "8-10h", label: "Duration" },
        { icon: Map, value: "8.5km", label: "Distance" }
    ]
};

export default function TrailStats({ trail = defaultTrail }) {
    return (
        <section className="space-y-4">
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
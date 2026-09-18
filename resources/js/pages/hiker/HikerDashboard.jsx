import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import {
    Mountain,
    Ticket,
    MessageSquare,
    UserRound,
    Calendar,
    MapPin,
    Users,
    ChevronRight,
    TriangleAlert,
    Compass,
    Clock3,
    Wallet,
} from 'lucide-react';
import { NEWS } from '../../mockData';
import { useHikerStore } from '../../state/hikerStore';

const STATUS_CONFIG = {
    Confirmed: { label: 'Confirmed', dot: 'bg-emerald-500', text: 'text-emerald-700' },
    Completed: { label: 'Completed', dot: 'bg-on-surface-variant/40', text: 'text-on-surface-variant' },
    Cancelled: { label: 'Cancelled', dot: 'bg-red-600', text: 'text-red-700' },
};

const QUICK_ACTIONS = [
    { label: 'Book a New Hike', desc: 'Reserve a slot on a trail', to: '/booking', icon: Mountain },
    { label: 'My Digital Passes', desc: 'View and download your e-passes', to: '/hiker/passes', icon: Ticket },
    { label: 'Messages & Chat', desc: 'Join your hike group chat', to: '/hiker/messages', icon: MessageSquare },
    { label: 'My Profile', desc: 'Keep your account details current', to: '/hiker/profile', icon: UserRound },
];

const toDateKey = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return null;
    return date.toDateString();
};

const daysUntilHike = (dateString) => {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return null;
    return Math.ceil((date.getTime() - Date.now()) / (24 * 60 * 60 * 1000));
};

const countdownLabel = (days) => {
    if (days === null) return null;
    if (days <= 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    return `${days} days away`;
};

function StatusPill({ status }) {
    const config = STATUS_CONFIG[status] || { label: status, dot: 'bg-on-surface-variant/40', text: 'text-on-surface-variant' };
    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full bg-surface-container-high px-2.5 py-1 text-xs font-semibold ${config.text}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
            {config.label}
        </span>
    );
}

export default function HikerDashboard() {
    const navigate = useNavigate();
    const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
    const { profile, transactions } = useHikerStore();

    const todayKey = toDateKey(new Date());
    const upcoming = transactions
        .filter((txn) => {
            const hikeKey = toDateKey(txn.hikeDate);
            return txn.status === 'Confirmed' && hikeKey && hikeKey >= todayKey;
        })
        .sort((a, b) => new Date(a.hikeDate) - new Date(b.hikeDate));

    const nextClimb = upcoming[0] || null;
    const nextClimbDays = nextClimb ? daysUntilHike(nextClimb.hikeDate) : null;
    const countdown = countdownLabel(nextClimbDays);

    const advisories = NEWS.filter((item) => ['Advisory', 'Weather'].includes(item.category)).slice(0, 2);
    const recent = transactions.slice(0, 3);

    return (
        <div ref={sectionRef} className="min-h-screen bg-surface font-sans">
            <div className={`max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8 md:space-y-10 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                            Hiker Dashboard
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mt-2">
                            Welcome back, {profile.name.split(' ')[0]}
                        </h1>
                        <p className="text-sm md:text-base text-on-surface-variant mt-2 max-w-2xl">
                            Your next climb and the protected area updates that matter to it.
                        </p>
                    </div>
                    {nextClimb && (
                        <Button
                            variant="outline"
                            size="lg"
                            className="gap-2 cursor-pointer shrink-0"
                            onClick={() => navigate('/hiker/transactions')}
                        >
                            <Wallet className="h-4 w-4" />
                            Manage Bookings
                        </Button>
                    )}
                </header>

                {nextClimb ? (
                    <section className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl overflow-hidden shadow-sm">
                        <div className="bg-secondary text-on-secondary px-5 md:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-on-secondary/70" />
                                Upcoming Climb
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-on-secondary">
                                    <Clock3 className="h-3.5 w-3.5" />
                                    {countdown}
                                </span>
                                <StatusPill status={nextClimb.status} />
                            </div>
                        </div>

                        <div className="p-5 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            <div className="space-y-5">
                                <div>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-on-surface-variant">
                                        <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase">
                                            {nextClimb.transactionId}
                                        </span>
                                        <span>{nextClimb.referenceNo}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-on-surface mt-3 flex items-center gap-2.5">
                                        <MapPin className="h-6 w-6 text-primary shrink-0" />
                                        {nextClimb.trail}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
                                    <div className="flex items-center gap-3 rounded-xl bg-surface-container-low px-3.5 py-2.5">
                                        <span className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <Calendar className="h-4 w-4" />
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant">Climb date</p>
                                            <p className="text-sm font-bold text-on-surface truncate">{nextClimb.hikeDate}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 rounded-xl bg-surface-container-low px-3.5 py-2.5">
                                        <span className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <Users className="h-4 w-4" />
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant">Participants</p>
                                            <p className="text-sm font-bold text-on-surface truncate">{nextClimb.participantCount} {nextClimb.participantCount > 1 ? 'hikers' : 'hiker'}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 rounded-xl bg-surface-container-low px-3.5 py-2.5">
                                        <span className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <Wallet className="h-4 w-4" />
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant">Amount paid</p>
                                            <p className="text-sm font-bold text-on-surface truncate">{nextClimb.totalPaid}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end gap-3 shrink-0">
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="gap-2 cursor-pointer"
                                    onClick={() => navigate('/hiker/passes')}
                                >
                                    <Ticket className="h-4 w-4" />
                                    View e-Passes
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="gap-2 cursor-pointer"
                                    onClick={() => navigate('/hiker/transactions')}
                                >
                                    Manage Booking
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-8 md:p-12 text-center shadow-sm">
                        <span className="h-14 w-14 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                            <Compass className="h-7 w-7" />
                        </span>
                        <h2 className="text-xl md:text-2xl font-bold text-on-surface mt-5">No upcoming climbs</h2>
                        <p className="text-sm text-on-surface-variant mt-2 max-w-md mx-auto">
                            You have no confirmed booking ahead. Reserve a slot on your chosen trail to receive your digital passes.
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            className="mt-6 gap-2 cursor-pointer"
                            onClick={() => navigate('/#trails')}
                        >
                            <Mountain className="h-4 w-4" />
                            Book a Hike
                        </Button>
                    </section>
                )}

                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Quick Actions</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {QUICK_ACTIONS.map((action) => {
                            const Icon = action.icon;
                            return (
                                <button
                                    key={action.label}
                                    type="button"
                                    onClick={() => navigate(action.to)}
                                    className="group bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-5 text-left shadow-xs transition-all hover:border-primary/50 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none cursor-pointer"
                                >
                                    <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-on-primary">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <span className="block mt-4 text-sm font-bold text-on-surface transition-colors group-hover:text-primary">
                                        {action.label}
                                    </span>
                                    <span className="block mt-1 text-xs text-on-surface-variant leading-relaxed">
                                        {action.desc}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Park Advisories</p>
                        </div>
                        <div className="space-y-4">
                            {advisories.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => navigate(`/news/${item.id}`)}
                                    className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-5 text-left shadow-xs hover:border-primary/50 transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none cursor-pointer"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded border ${item.badgeClass}`}>
                                            {item.category}
                                        </span>
                                        <span className="text-xs text-on-surface-variant">{item.date}</span>
                                    </div>
                                    <h3 className="text-sm font-bold text-on-surface mt-3 flex items-center gap-2">
                                        {item.category === 'Advisory' && <TriangleAlert className="h-4 w-4 text-red-600 shrink-0" />}
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-on-surface-variant mt-1 line-clamp-2 leading-relaxed">
                                        {item.leadParagraph}
                                    </p>
                                </button>
                            ))}
                            {advisories.length === 0 && (
                                <p className="text-sm text-on-surface-variant text-center py-8">
                                    No advisories right now.
                                </p>
                            )}
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Recent Bookings</p>
                            <button
                                type="button"
                                onClick={() => navigate('/hiker/transactions')}
                                className="text-xs font-semibold text-primary hover:underline focus-visible:outline-primary cursor-pointer transition-colors"
                            >
                                View all
                            </button>
                        </div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl divide-y divide-outline-variant/20 shadow-xs overflow-hidden">
                            {recent.length > 0 ? (
                                recent.map((txn) => (
                                    <button
                                        key={txn.transactionId}
                                        type="button"
                                        onClick={() => navigate('/hiker/transactions')}
                                        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left transition-colors hover:bg-surface-container focus-visible:outline-primary cursor-pointer"
                                    >
                                        <div className="min-w-0">
                                            <p className="text-sm font-bold text-on-surface truncate">{txn.trail}</p>
                                            <p className="text-xs text-on-surface-variant mt-0.5">
                                                {txn.hikeDate} &middot; {txn.referenceNo}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3 shrink-0">
                                            <StatusPill status={txn.status} />
                                            <ChevronRight className="h-4 w-4 text-outline" />
                                        </div>
                                    </button>
                                ))
                            ) : (
                                <div className="px-5 py-8 text-center">
                                    <p className="text-sm font-semibold text-on-surface">No bookings yet</p>
                                    <p className="text-xs text-on-surface-variant mt-1">
                                        Complete a booking and it will appear here.
                                    </p>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
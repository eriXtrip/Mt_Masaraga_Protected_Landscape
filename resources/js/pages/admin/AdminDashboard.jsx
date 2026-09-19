import { useNavigate } from 'react-router-dom';
import { CalendarCheck, Wallet, Users, Mountain } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { NEWS } from '../../mockData';
import { useAdminStore } from '../../state/adminStore';
import KeyFigures from '../../components/admin/dashboard/KeyFigures';
import PendingApprovals from '../../components/admin/dashboard/PendingApprovals';
import DailySlotQuota from '../../components/admin/dashboard/DailySlotQuota';
import ParkAdvisories from '../../components/admin/dashboard/ParkAdvisories';

const formatter = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export default function AdminDashboard() {
    const navigate = useNavigate();
    const { profile, bookings, quota, users } = useAdminStore();
    const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });

    const firstName = (profile.name || 'Admin').split(' ')[0];

    const scheduledDates = [...new Set(bookings.filter((b) => b.status !== 'Completed').map((b) => b.date))];
    const hikeDay = scheduledDates[0] || null;
    const hikeDayBookings = hikeDay ? bookings.filter((b) => b.date === hikeDay && b.status !== 'Completed') : [];

    const pending = bookings.filter((b) => b.status === 'Pending');
    const collected = bookings.filter((b) => b.status === 'Confirmed' || b.status === 'Completed');
    const revenueCollected = collected.reduce((sum, b) => sum + b.totalPaid, 0);

    const paymentSplit = collected.reduce((groups, b) => {
        const key = b.paymentMethod;
        groups[key] = (groups[key] || 0) + b.totalPaid;
        return groups;
    }, {});
    const paymentSub = Object.entries(paymentSplit)
        .map(([method, amount]) => `${method} ${formatter.format(amount)}`)
        .join(' · ') || 'No payments received';

    const totalSlots = quota.reduce((sum, q) => sum + q.capacity, 0);
    const bookedSlots = quota.reduce((sum, q) => sum + q.booked, 0);
    const usagePct = totalSlots ? Math.round((bookedSlots / totalSlots) * 100) : 0;

    const hikerCount = users.filter((u) => u.role === 3).length;
    const staffCount = users.filter((u) => u.role === 2).length;
    const adminCount = users.filter((u) => u.role === 1).length;

    const kpis = [
        {
            icon: CalendarCheck,
            value: String(hikeDayBookings.length),
            label: 'Hike-day bookings',
            sub: hikeDay ? `${hikeDay} · ${pending.length} pending` : 'No bookings yet',
        },
        {
            icon: Wallet,
            value: formatter.format(revenueCollected),
            label: 'Revenue collected',
            sub: paymentSub,
        },
        {
            icon: Mountain,
            value: totalSlots ? `${usagePct}%` : '0%',
            label: 'Daily quota usage',
            sub: totalSlots ? `${bookedSlots} of ${totalSlots} slots booked` : 'No quota set',
        },
        {
            icon: Users,
            value: String(users.length),
            label: 'Registered users',
            sub: `${hikerCount} hikers · ${staffCount} staff · ${adminCount} admin`,
        },
    ];

    const advisories = NEWS.filter((item) => ['Advisory', 'Weather'].includes(item.category)).slice(0, 2);

    return (
        <div ref={sectionRef} className="space-y-6 md:space-y-8">
            <header
                style={{ transitionDelay: '0ms' }}
                className={`flex flex-col gap-3 md:flex-row md:items-end md:justify-between transition-all duration-700 ease-out ${isInView
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
            >
                <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                        Admin Console · Dashboard
                    </p>
                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
                        Welcome back, {firstName}
                    </h1>
                    <p className="mt-2 max-w-2xl text-sm text-on-surface-variant md:text-base">
                        Approve pending permits and keep an eye on daily slot capacity before the next hike day.
                    </p>
                </div>
                <Button
                    variant="default"
                    size="lg"
                    className="h-11! shrink-0 gap-2 cursor-pointer"
                    onClick={() => navigate('/admin/bookings')}
                >
                    <CalendarCheck className="h-4 w-4" />
                    Review bookings
                </Button>
            </header>

            <div
                style={{ transitionDelay: '150ms' }}
                className={`transition-all duration-700 ease-out ${isInView
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
            >
                <KeyFigures kpis={kpis} />
            </div>

            <div
                style={{ transitionDelay: '300ms' }}
                className={`transition-all duration-700 ease-out ${isInView
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
            >
                <PendingApprovals pending={pending} />
            </div>

            <div
                style={{ transitionDelay: '450ms' }}
                className={`grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 transition-all duration-700 ease-out ${isInView
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
            >
                <DailySlotQuota quota={quota} hikeDay={hikeDay} />
                <ParkAdvisories advisories={advisories} />
            </div>
        </div>
    );
}
import { Wallet, ChevronRight, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatter, getInitials } from '../booking/bookingUtils';

const STATUS_CONFIG = {
    Confirmed: { label: 'Confirmed', text: 'text-emerald-700', bg: 'bg-emerald-50', dot: 'bg-emerald-500' },
    Completed: { label: 'Completed', text: 'text-on-surface-variant', bg: 'bg-surface-container-high', dot: 'bg-on-surface-variant/40' },
    Refunded: { label: 'Refunded', text: 'text-red-700', bg: 'bg-red-50', dot: 'bg-red-500' },
    Upcoming: { label: 'Upcoming', text: 'text-amber-700', bg: 'bg-amber-50', dot: 'bg-amber-500' },
};

function StatusPill({ status }) {
    const config = STATUS_CONFIG[status] || { label: status, text: 'text-on-surface-variant', bg: 'bg-surface-container-high', dot: 'bg-on-surface-variant/40' };
    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${config.bg} ${config.text}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
            {config.label}
        </span>
    );
}

export default function PaymentList({ bookings, onSelect }) {
    if (bookings.length === 0) {
        return (
            <div className="text-center py-12 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl">
                <span className="h-12 w-12 rounded-xl bg-surface-container-high text-on-surface-variant flex items-center justify-center mx-auto mb-3">
                    <Wallet className="h-6 w-6" />
                </span>
                <h3 className="text-base font-bold text-on-surface">No payments found</h3>
                <p className="text-xs text-on-surface-variant">
                    Try adjusting your search term or filters.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {bookings.map((booking) => (
                <div
                    key={booking.id}
                    className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-5 shadow-xs hover:border-primary/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                    <div className="flex items-center gap-4 min-w-0">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-high text-xs font-bold text-on-surface">
                            {getInitials(booking.leadHiker)}
                        </span>
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <p className="truncate text-sm font-bold text-on-surface">{booking.leadHiker}</p>
                                <StatusPill status={booking.status} />
                            </div>
                            <p className="truncate text-xs text-on-surface-variant mt-0.5">
                                {booking.trail} · {booking.date} · {booking.participants} pax
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-4 border-t border-outline-variant/20 pt-3 md:border-0 md:pt-0">
                        <div className="flex items-center gap-3">
                            <div className="text-left md:text-right">
                                <p className="text-xs text-on-surface-variant flex items-center gap-1">
                                    <Hash className="h-3 w-3" />
                                    {booking.reference}
                                </p>
                                <p className="text-lg font-extrabold text-primary">{formatter.format(booking.totalPaid)}</p>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onSelect?.(booking)}
                            className="gap-2 cursor-pointer"
                        >
                            <span>Details</span>
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

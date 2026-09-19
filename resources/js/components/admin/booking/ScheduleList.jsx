import { Wallet, CalendarClock, Users, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatusPill from './StatusPill';
import { getInitials, formatter } from './bookingUtils';

const MAX_VISIBLE_ROWS = 9;

function BookingRow({ booking, onSelect }) {
    return (
        <button
            type="button"
            onClick={() => onSelect(booking)}
            className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary md:px-6 cursor-pointer"
        >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {getInitials(booking.leadHiker)}
            </span>

            <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <p className="truncate text-sm font-bold text-on-surface">{booking.leadHiker}</p>
                    <span className="hidden text-xs font-medium text-on-surface-variant sm:inline">
                        · {booking.reference}
                    </span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-on-surface-variant">
                    <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{booking.trail}</span>
                    </span>
                    <span className="flex items-center gap-1">
                        <CalendarClock className="h-3.5 w-3.5 shrink-0" />
                        {booking.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5 shrink-0" />
                        {booking.participants} pax
                    </span>
                </div>
            </div>

            <div className="flex shrink-0 items-center gap-3">
                <div className="hidden text-right sm:block">
                    <p className="text-xs text-on-surface-variant">{booking.paymentMethod}</p>
                    <p className="text-sm font-bold text-on-surface">{formatter.format(booking.totalPaid)}</p>
                </div>
                <StatusPill status={booking.status} />
                <ChevronRight className="h-4 w-4 text-outline" />
            </div>
        </button>
    );
}

function EmptyState({ hasAnyBookings, onClearFilters }) {
    return (
        <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest px-5 py-14 text-center shadow-xs">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-container-high text-on-surface-variant">
                <Wallet className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-sm font-bold text-on-surface">
                {hasAnyBookings ? 'No bookings match your filters' : 'No bookings yet'}
            </h3>
            <p className="mx-auto mt-1 max-w-sm text-xs leading-relaxed text-on-surface-variant">
                {hasAnyBookings
                    ? 'Try a different search term or status filter to find what you are looking for.'
                    : 'New permit applications appear here as soon as a hiker submits one.'}
            </p>
            {hasAnyBookings && (
                <Button variant="outline" size="lg" className="mt-5 h-11! cursor-pointer" onClick={onClearFilters}>
                    Clear filters
                </Button>
            )}
        </div>
    );
}

export default function BookingList({ bookings, onSelect, hasAnyBookings, onClearFilters }) {
    if (bookings.length === 0) {
        return <EmptyState hasAnyBookings={hasAnyBookings} onClearFilters={onClearFilters} />;
    }

    const isScrollable = bookings.length > MAX_VISIBLE_ROWS;

    return (
        <div className="overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest shadow-xs">
            <div className={`divide-y divide-outline-variant/20 ${isScrollable ? 'max-h-170 overflow-y-auto' : ''}`}>
                {bookings.map((booking) => (
                    <BookingRow key={booking.id} booking={booking} onSelect={onSelect} />
                ))}
            </div>
            {isScrollable && (
                <div className="border-t border-outline-variant/20 px-5 py-2 text-right text-xs text-on-surface-variant bg-surface-container-low/30">
                    Showing {bookings.length} total bookings (scroll to view all)
                </div>
            )}
        </div>
    );
}
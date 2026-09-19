import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { STATUS_OPTIONS } from './bookingUtils';

export default function BookingFilters({ searchTerm, statusFilter, resultCount, totalCount, onSearch, onStatus, scheduleLabel, onClearSchedule }) {
    return (
        <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-4 shadow-xs">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative w-full lg:max-w-xs">
                    <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-outline" />
                    <Input
                        aria-label="Search bookings"
                        placeholder="Search by name, reference, trail..."
                        value={searchTerm}
                        onChange={(e) => onSearch(e.target.value)}
                        className="pl-9"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    {scheduleLabel && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 py-1 pl-3 pr-1.5 text-xs font-semibold text-primary">
                            {scheduleLabel}
                            <button
                                type="button"
                                onClick={onClearSchedule}
                                aria-label="Show bookings for all schedules"
                                className="rounded-full p-1 transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                            >
                                <X className="h-3.5 w-3.5" />
                            </button>
                        </span>
                    )}
                    <p className="text-xs text-on-surface-variant">
                        Showing {resultCount} of {totalCount} bookings
                    </p>
                </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
                <Filter className="h-4 w-4 text-outline" />
                {STATUS_OPTIONS.map((status) => (
                    <button
                        key={status}
                        type="button"
                        onClick={() => onStatus(status)}
                        aria-pressed={statusFilter === status}
                        className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${
                            statusFilter === status
                                ? 'bg-primary text-white'
                                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                        }`}
                    >
                        {status}
                    </button>
                ))}
            </div>
        </div>
    );
}
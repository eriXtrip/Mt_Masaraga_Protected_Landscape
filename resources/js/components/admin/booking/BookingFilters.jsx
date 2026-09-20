import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { STATUS_OPTIONS } from './bookingUtils';

export default function BookingFilters({
    searchTerm,
    statusFilter,
    onSearch,
    onStatus,
    scheduleLabel,
    onClearSchedule,
}) {
    return (
        <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-4 shadow-xs flex flex-col sm:flex-row gap-3">
            {/* Top Row: Search Input & Active Tags */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:w-1/3">
                {/* Search Bar */}
                <div className="relative w-full sm:max-w-sm">
                    <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-outline pointer-events-none" />
                    <Input
                        aria-label="Search bookings"
                        placeholder="Search by name, reference, trail..."
                        value={searchTerm}
                        onChange={(e) => onSearch(e.target.value)}
                        className="pl-9 w-full bg-background text-xs sm:text-sm"
                    />
                </div>

                {/* Right Meta Info: Active Filter Tag */}
                {scheduleLabel && (
                    <div className="flex items-center justify-start sm:justify-end gap-1 text-xs">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 py-1 pl-3 pr-1.5 text-xs font-semibold text-primary">
                            <span className="truncate max-w-30 sm:max-w-xs">{scheduleLabel}</span>
                            <button
                                type="button"
                                onClick={onClearSchedule}
                                aria-label="Show bookings for all schedules"
                                className="rounded-full p-1 transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                            >
                                <X className="h-3.5 w-3.5" />
                            </button>
                        </span>
                    </div>
                )}
            </div>

            {/* Bottom Row: Status Filter Controls */}
            <div className="pt-1 border-t border-outline-variant/20 sm:border-0 sm:pt-0">
                {/* Mobile Dropdown (< sm breakpoint) */}
                <div className="sm:hidden flex items-center gap-2">
                    <Filter className="h-4 w-4 text-outline shrink-0" />
                    <div className="relative w-full">
                        <select
                            value={statusFilter}
                            onChange={(e) => onStatus(e.target.value)}
                            aria-label="Filter by status"
                            className="w-full appearance-none rounded-xl bg-primary px-3.5 py-2 pr-9 text-xs font-semibold text-white transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                        >
                            {STATUS_OPTIONS.map((status) => (
                                <option
                                    key={status}
                                    value={status}
                                    className="bg-surface-container-high text-on-surface-variant py-1 text-xs font-semibold"
                                >
                                    {status}
                                </option>
                            ))}
                        </select>
                        <SlidersHorizontal className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white" />
                    </div>
                </div>

                {/* Tablet / Desktop Chip Bar (>= sm breakpoint) */}
                <div className="hidden sm:flex sm:flex-wrap sm:items-center sm:gap-1 px-2 py-1.5">
                    <Filter className="h-4 w-4 text-outline shrink-0 mr-1" />
                    {STATUS_OPTIONS.map((status) => (
                        <button
                            key={status}
                            type="button"
                            onClick={() => onStatus(status)}
                            aria-pressed={statusFilter === status}
                            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer whitespace-nowrap ${statusFilter === status
                                ? 'bg-primary text-white shadow-xs'
                                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
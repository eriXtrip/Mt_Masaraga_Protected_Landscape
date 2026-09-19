import { useState } from 'react';
import { CalendarClock, CalendarPlus, ChevronRight, Layers, ChevronDown, ChevronUp, History, RotateCcw, UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SCHEDULE_STATUS_BADGE } from './bookingUtils';

const INITIAL_LIMIT = 5;

function IconButton({ icon: Icon, label, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            title={label}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
        >
            <Icon className="h-4 w-4" />
        </button>
    );
}

function ScheduleRow({ schedule, label, detail, bookingCount, active, onClick, onReschedule }) {
    const fillPct = schedule ? Math.min(100, Math.round((schedule.booked / schedule.capacity) * 100)) : 0;
    const badge = schedule ? SCHEDULE_STATUS_BADGE[schedule.status] || SCHEDULE_STATUS_BADGE.Available : null;

    return (
        <div className={`relative flex items-center pr-2 transition-colors ${active ? 'bg-primary/5' : 'hover:bg-surface-container-low'}`}>
            <button
                type="button"
                onClick={onClick}
                aria-pressed={active}
                className="flex w-full min-w-0 flex-1 items-center gap-4 px-5 py-4 text-left md:px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary cursor-pointer"
            >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${schedule?.isPast ? 'bg-surface-container-high text-on-surface-variant' : 'bg-primary/10 text-primary'
                    }`}>
                    {schedule ? <CalendarClock className="h-5 w-5" /> : <Layers className="h-5 w-5" />}
                </span>

                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p className={`truncate text-sm font-bold ${active ? 'text-primary' : 'text-on-surface'}`}>
                            {schedule ? schedule.trail : label}
                        </p>
                        {schedule && (
                            <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${badge}`}>
                                {schedule.status}
                            </span>
                        )}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-on-surface-variant">
                        <span>{schedule ? schedule.date : detail}</span>
                        {schedule && <span className="flex items-center gap-1"><UserCog className="h-3.5 w-3.5 shrink-0" />{schedule.guide}</span>}
                        <span>
                            {bookingCount} {bookingCount === 1 ? 'booking' : 'bookings'}
                        </span>
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                    {schedule && (
                        <div className="hidden w-24 text-right sm:block">
                            <div className="h-1.5 overflow-hidden rounded-full bg-surface-container-high">
                                <div className="h-full rounded-full bg-primary" style={{ width: `${fillPct}%` }} />
                            </div>
                            <p className="mt-1 text-right text-[11px] text-on-surface-variant">
                                {schedule.booked}/{schedule.capacity} slots
                            </p>
                        </div>
                    )}
                    <ChevronRight className="h-4 w-4 text-outline" />
                </div>
            </button>

            {schedule && onReschedule && (
                <div className="flex shrink-0 items-center gap-1 md:pr-3">
                    <IconButton
                        icon={RotateCcw}
                        label="Reschedule date / change guide"
                        onClick={() => onReschedule(schedule)}
                    />
                </div>
            )}
        </div>
    );
}

export default function ScheduleList({ schedules, bookings, activeScheduleId, onSelect, onCreate, onReschedule }) {
    const [showAll, setShowAll] = useState(false);
    const [filterTab, setFilterTab] = useState('upcoming'); // 'upcoming' | 'past' | 'all'
    const todayStr = new Date().toISOString().split('T')[0];

    const bookingCountFor = (scheduleId) => bookings.filter((b) => b.scheduleId === scheduleId).length;

    const processedSchedules = schedules
        .map((s) => ({
            ...s,
            isPast: s.dateKey < todayStr || s.status === 'Completed' || s.status === 'Expired',
        }))
        .sort((a, b) => (a.dateKey < b.dateKey ? 1 : -1));

    const filteredSchedules = processedSchedules.filter((s) => {
        if (filterTab === 'upcoming') return !s.isPast;
        if (filterTab === 'past') return s.isPast;
        return true;
    });

    const upcomingCount = processedSchedules.filter((s) => !s.isPast).length;
    const pastCount = processedSchedules.filter((s) => s.isPast).length;

    const visibleSchedules = showAll ? filteredSchedules : filteredSchedules.slice(0, INITIAL_LIMIT);
    const hasMore = filteredSchedules.length > INITIAL_LIMIT;

    return (
        <section
            aria-labelledby="schedules-heading"
            className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest shadow-xs flex flex-col"
        >
            {/* Header */}
            <div className="flex flex-col gap-3 border-b border-outline-variant/20 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
                <div>
                    <h2 id="schedules-heading" className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                        Trail schedules
                    </h2>
                    <p className="mt-1 text-xs text-on-surface-variant">
                        Published climb dates hikers can book.
                    </p>
                </div>
                <Button onClick={onCreate} className="shrink-0 cursor-pointer">
                    <CalendarPlus className="mr-2 h-4 w-4" />
                    New schedule
                </Button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 border-b border-outline-variant/20 px-5 py-2 bg-surface-container-low/40 text-xs">
                <button
                    type="button"
                    onClick={() => { setFilterTab('upcoming'); setShowAll(false); }}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${filterTab === 'upcoming'
                        ? 'bg-primary text-inverse-on-surface shadow-xs'
                        : 'text-on-surface-variant hover:bg-surface-container-high'
                        }`}
                >
                    Upcoming ({upcomingCount})
                </button>
                <button
                    type="button"
                    onClick={() => { setFilterTab('past'); setShowAll(false); }}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${filterTab === 'past'
                        ? 'bg-primary text-inverse-on-surface shadow-xs'
                        : 'text-on-surface-variant hover:bg-surface-container-high'
                        }`}
                >
                    <History className="h-3.5 w-3.5" />
                    Past ({pastCount})
                </button>
                <button
                    type="button"
                    onClick={() => { setFilterTab('all'); setShowAll(false); }}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${filterTab === 'all'
                        ? 'bg-primary text-inverse-on-surface shadow-xs'
                        : 'text-on-surface-variant hover:bg-surface-container-high'
                        }`}
                >
                    All ({schedules.length})
                </button>
            </div>

            {/* List View */}
            {filteredSchedules.length === 0 ? (
                <div className="px-5 py-10 text-center">
                    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-high text-on-surface-variant">
                        <CalendarClock className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 text-sm font-bold text-on-surface">No {filterTab} schedules</h3>
                    <p className="mx-auto mt-1 max-w-xs text-xs text-on-surface-variant">
                        {filterTab === 'upcoming'
                            ? 'There are no active or upcoming climb dates scheduled.'
                            : 'No past climb records found.'}
                    </p>
                </div>
            ) : (
                <div>
                    {/* Scrollable container when expanded */}
                    <div className={`divide-y divide-outline-variant/20 ${showAll ? 'max-h-120 overflow-y-auto' : ''}`}>
                        {filterTab === 'all' && (
                            <ScheduleRow
                                label="All schedules"
                                detail="Every trail and date"
                                bookingCount={bookings.length}
                                active={activeScheduleId === null}
                                onClick={() => onSelect(null)}
                            />
                        )}

                        {visibleSchedules.map((schedule) => (
                            <ScheduleRow
                                key={schedule.id}
                                schedule={schedule}
                                bookingCount={bookingCountFor(schedule.id)}
                                active={activeScheduleId === schedule.id}
                                onClick={() => onSelect(schedule.id)}
                                onReschedule={onReschedule}
                            />
                        ))}
                    </div>

                    {/* Expand/Collapse Trigger */}
                    {hasMore && (
                        <div className="border-t border-outline-variant/20 p-2.5 text-center bg-surface-container-lowest">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowAll(!showAll)}
                                className="w-full text-xs font-semibold text-primary hover:bg-primary/5 cursor-pointer"
                            >
                                {showAll ? (
                                    <>
                                        <span>Collapse view</span>
                                        <ChevronUp className="ml-1.5 h-3.5 w-3.5" />
                                    </>
                                ) : (
                                    <>
                                        <span>Show all ({filteredSchedules.length} schedules)</span>
                                        <ChevronDown className="ml-1.5 h-3.5 w-3.5" />
                                    </>
                                )}
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}
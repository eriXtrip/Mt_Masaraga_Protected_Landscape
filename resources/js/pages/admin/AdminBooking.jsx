import { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import {
    useAdminStore,
    cancelBooking,
    refundBooking,
    createSchedule,
    rescheduleSchedule,
    changeScheduleGuide,
} from '../../state/adminStore';
import BookingSummary from '../../components/admin/booking/BookingSummary';
import ScheduleList from '../../components/admin/booking/ScheduleList';
import CreateSchedule from '../../components/admin/booking/CreateSchedule';
import BookingFilters from '../../components/admin/booking/BookingFilters';
import BookingList from '../../components/admin/booking/BookingList';
import BookingDetail from '../../components/admin/booking/BookingDetail';
import RescheduleScheduleModal from '../../components/admin/booking/RescheduleScheduleModal';
import CancelBookingModal from '../../components/admin/booking/CancelBookingModal';
import RefundBookingModal from '../../components/admin/booking/RefundBookingModal';

export default function AdminBooking() {
    const { bookings, schedules, quota, users } = useAdminStore();
    const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });

    const [activeScheduleId, setActiveScheduleId] = useState(null);
    const [showCreateSchedule, setshowCreateSchedule] = useState(false);
    const [scheduleReschedule, setScheduleReschedule] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [selectedId, setSelectedId] = useState(null);
    const [action, setAction] = useState(null);
    const [notice, setNotice] = useState(null);

    const guideOptions = [
        ...new Set([
            ...users.filter((u) => u.role === 2).map((u) => u.name),
            ...schedules.map((s) => s.guide).filter(Boolean),
            ...bookings.map((b) => b.guide).filter(Boolean),
        ]),
    ];

    const activeSchedule = activeScheduleId
        ? schedules.find((s) => s.id === activeScheduleId) ?? null
        : null;

    const scheduleBookings = activeSchedule
        ? bookings.filter((b) => b.scheduleId === activeSchedule.id)
        : bookings;

    const filteredBookings = scheduleBookings.filter((booking) => {
        const term = searchTerm.toLowerCase();
        const matchesSearch =
            !term ||
            booking.leadHiker.toLowerCase().includes(term) ||
            booking.hikers?.some((hiker) => hiker.fullName.toLowerCase().includes(term)) ||
            booking.reference.toLowerCase().includes(term) ||
            booking.trail.toLowerCase().includes(term);
        const matchesStatus = statusFilter === 'All' || booking.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const scheduleLabel = activeSchedule ? `${activeSchedule.trail} · ${activeSchedule.date}` : null;

    const selectedBooking = selectedId ? bookings.find((b) => b.id === selectedId) ?? null : null;
    const selectedSchedule = selectedBooking
        ? schedules.find((s) => s.id === selectedBooking.scheduleId) ?? null
        : null;

    const resetAll = () => {
        setActiveScheduleId(null);
        setSearchTerm('');
        setStatusFilter('All');
    };

    const runAction = (kind) => {
        if (!selectedBooking) return;
        setAction(kind);
    };

    const closeActionModal = () => setAction(null);

    const handleCancel = () => {
        cancelBooking(selectedBooking.id);
        setNotice({ message: `${selectedBooking.reference} cancelled. Refunds follow the Refund and Return Policy.` });
        closeActionModal();
        setSelectedId(null);
    };

    const handleRefund = () => {
        refundBooking(selectedBooking.id);
        setNotice({ message: `Refund processed for ${selectedBooking.reference}.` });
        closeActionModal();
        setSelectedId(null);
    };

    const handleCreateSchedule = (schedule) => {
        createSchedule(schedule);
        setshowCreateSchedule(false);
        setActiveScheduleId(schedule.id);
        setSearchTerm('');
        setStatusFilter('All');
        setNotice({
            message: `${schedule.trail} opened for ${schedule.date} with ${schedule.capacity} slots, guide ${schedule.guide}.`,
        });
    };

    const handleRescheduleSchedule = (schedule, { dateKey, date, guide }) => {
        rescheduleSchedule(schedule.id, dateKey, date);
        if (guide !== schedule.guide) {
            changeScheduleGuide(schedule.id, guide);
        }
        setNotice({ message: `${schedule.trail} rescheduled to ${date} · guide ${guide}.` });
    };

    return (
        <>
            <div ref={sectionRef} className="space-y-6 md:space-y-8">
                <header
                    style={{ transitionDelay: '0ms' }}
                    className={`max-w-2xl space-y-1.5 transition-all duration-700 ease-out ${isInView
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                        }`}
                >
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                        Admin Console · Bookings
                    </p>
                    <h1 className="text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
                        Bookings
                    </h1>
                    <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
                        Open climb dates by schedule, then manage the bookings that land on each one.
                    </p>
                </header>

                {notice && (
                    <div
                        style={{ transitionDelay: '100ms' }}
                        className={`flex items-center gap-2 rounded-2xl bg-emerald-500/10 px-5 py-4 text-sm text-emerald-700 transition-all duration-700 ease-out ${isInView
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-8 scale-95'
                            }`}
                    >
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        <p className="min-w-0 flex-1">{notice.message}</p>
                        <button
                            type="button"
                            onClick={() => setNotice(null)}
                            aria-label="Dismiss notification"
                            className="rounded-lg p-1 text-emerald-700 transition-colors hover:bg-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 cursor-pointer"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                )}

                <div
                    style={{ transitionDelay: '150ms' }}
                    className={`transition-all duration-700 ease-out ${isInView
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                        }`}
                >
                    <BookingSummary bookings={bookings} quota={quota} />
                </div>

                <div
                    style={{ transitionDelay: '250ms' }}
                    className={`flex flex-col lg:flex-row gap-6 w-full transition-all duration-700 ease-out ${isInView
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                        }`}
                >
                    {/* Schedule List: Full width on mobile/tablet, 1/3 width on large screens */}
                    <div className="w-full lg:w-1/3 shrink-0">
                        <ScheduleList
                            schedules={schedules}
                            bookings={bookings}
                            activeScheduleId={activeScheduleId}
                            onSelect={setActiveScheduleId}
                            onCreate={() => setshowCreateSchedule(true)}
                            onReschedule={setScheduleReschedule}
                        />
                    </div>

                    {/* Bookings Area: Full width on mobile/tablet, 2/3 width on large screens */}
                    <div className="w-full lg:w-2/3 space-y-6 min-w-0">
                        <BookingFilters
                            searchTerm={searchTerm}
                            statusFilter={statusFilter}
                            resultCount={filteredBookings.length}
                            totalCount={scheduleBookings.length}
                            onSearch={setSearchTerm}
                            onStatus={setStatusFilter}
                            scheduleLabel={scheduleLabel}
                            onClearSchedule={() => setActiveScheduleId(null)}
                        />

                        <BookingList
                            bookings={filteredBookings}
                            onSelect={(booking) => setSelectedId(booking.id)}
                            hasAnyBookings={scheduleBookings.length > 0}
                            onClearFilters={resetAll}
                        />
                    </div>
                </div>
            </div>

            {selectedBooking && (
                <BookingDetail
                    booking={selectedBooking}
                    guideOptions={guideOptions}
                    scheduleGuide={selectedSchedule?.guide}
                    onAction={runAction}
                    onClose={() => setSelectedId(null)}
                />
            )}

            {action === 'cancel' && selectedBooking && (
                <CancelBookingModal
                    booking={selectedBooking}
                    onConfirm={handleCancel}
                    onClose={closeActionModal}
                />
            )}

            {action === 'refund' && selectedBooking && (
                <RefundBookingModal
                    booking={selectedBooking}
                    onConfirm={handleRefund}
                    onClose={closeActionModal}
                />
            )}

            {showCreateSchedule && (
                <CreateSchedule
                    schedules={schedules}
                    guides={guideOptions}
                    onConfirm={handleCreateSchedule}
                    onClose={() => setshowCreateSchedule(false)}
                />
            )}

            {scheduleReschedule && (
                <RescheduleScheduleModal
                    schedule={scheduleReschedule}
                    schedules={schedules}
                    guides={guideOptions}
                    onConfirm={handleRescheduleSchedule}
                    onClose={() => setScheduleReschedule(null)}
                />
            )}
        </>
    );
}
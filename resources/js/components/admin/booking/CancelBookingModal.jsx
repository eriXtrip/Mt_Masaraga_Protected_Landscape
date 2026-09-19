import { CalendarClock, Users, Receipt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingModal from './BookingModal';
import { formatter, getRefundNotice, getRefundAmount } from './bookingUtils';

export default function CancelBookingModal({ booking, onConfirm, onClose }) {
    const refundAmount = getRefundAmount(booking);

    return (
        <BookingModal
            title="Cancel booking"
            subtitle={`${booking.reference} · ${booking.trail}`}
            onClose={onClose}
        >
            {({ requestClose }) => (
                <div className="space-y-4">
                    <div className="space-y-1.5 rounded-2xl bg-surface-container-low p-4 text-sm">
                        <p className="flex items-center gap-2 text-on-surface-variant">
                            <CalendarClock className="h-4 w-4 text-primary" />
                            Climb date: <strong className="text-on-surface">{booking.date}</strong>
                        </p>
                        <p className="flex items-center gap-2 text-on-surface-variant">
                            <Users className="h-4 w-4 text-primary" />
                            {booking.participants} participant(s)
                        </p>
                        <p className="flex items-center gap-2 text-on-surface-variant">
                            <Receipt className="h-4 w-4 text-primary" />
                            Amount paid: <strong className="text-on-surface">{formatter.format(booking.totalPaid)}</strong>
                        </p>
                    </div>

                    <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                        <p className="font-semibold">Refund estimate</p>
                        <p className="mt-1">{getRefundNotice(booking.date)}</p>
                        {refundAmount > 0 && (
                            <p className="mt-2 font-bold">{formatter.format(refundAmount)}</p>
                        )}
                    </div>

                    <p className="text-xs leading-relaxed text-on-surface-variant">
                        Refunds are processed within 7 to 14 banking days after the cancellation is confirmed, per the Refund and Return Policy.
                    </p>

                    <div className="flex items-center justify-end gap-3 border-t border-outline-variant/20 pt-4">
                        <Button variant="ghost" onClick={requestClose} className="cursor-pointer">
                            Keep booking
                        </Button>
                        <Button variant="destructive" onClick={onConfirm} className="cursor-pointer">
                            Cancel booking
                        </Button>
                    </div>
                </div>
            )}
        </BookingModal>
    );
}
import { useEffect, useRef } from 'react';
import { X, Mail, CalendarClock, Users, MapPin, Receipt, ShieldCheck, RotateCcw, Undo2, CircleOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDrawerTransition } from '@/hooks/useDrawerTransition';
import StatusPill from './StatusPill';
import { getInitials, formatter } from './bookingUtils';

function DetailSection({ title, children }) {
    return (
        <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{title}</p>
            <div className="mt-3">{children}</div>
        </div>
    );
}

function DetailRow({ icon: Icon, label, value }) {
    return (
        <div className="flex items-center gap-2.5 text-sm">
            <Icon className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-on-surface-variant">{label}</span>
            <span className="ml-auto text-right font-semibold text-on-surface">{value}</span>
        </div>
    );
}

function ActionButton({ icon: Icon, label, variant = 'outline', onClick }) {
    return (
        <Button variant={variant} onClick={onClick} className="w-full gap-2 cursor-pointer">
            <Icon className="h-4 w-4" />
            {label}
        </Button>
    );
}

export default function BookingDetail({ booking, guideOptions, onAction, onClose }) {
    const closeButtonRef = useRef(null);
    const { closing, requestClose, handleAnimationEnd } = useDrawerTransition(onClose);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') requestClose();
        };
        window.addEventListener('keydown', onKeyDown);
        closeButtonRef.current?.focus();
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [requestClose]);

    const actions = [];
    if (booking.status === 'Pending' || booking.status === 'Confirmed') {
        actions.push(
            { key: 'reschedule', label: 'Reschedule', variant: 'outline', icon: RotateCcw, action: () => onAction('reschedule') },
            { key: 'refund', label: 'Process refund', variant: 'outline', icon: Undo2, action: () => onAction('refund') },
            { key: 'cancel', label: 'Cancel booking', variant: 'outline', icon: CircleOff, action: () => onAction('cancel') },
        );
    }

    return (
        <div className="fixed inset-0 z-40">
            <div
                className={`absolute inset-0 bg-inverse-surface/60 ${closing ? 'animate-out fade-out animation-duration-300' : 'animate-in fade-in animation-duration-300'} motion-reduce:animate-none`}
                onClick={requestClose}
                aria-hidden="true"
            />

            <aside
                role="dialog"
                aria-modal="true"
                aria-label={`Booking ${booking.reference}`}
                onAnimationEnd={closing ? handleAnimationEnd : undefined}
                className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-surface-container-lowest shadow-xl ${closing ? 'animate-out slide-out-to-right animation-duration-300' : 'animate-in slide-in-from-right animation-duration-300'} motion-reduce:animate-none`}
            >
                <div className="flex items-start justify-between gap-4 border-b border-outline-variant/20 px-5 py-4">
                    <div className="flex min-w-0 items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                            {getInitials(booking.leadHiker)}
                        </span>
                        <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-on-surface">{booking.leadHiker}</p>
                            <p className="truncate text-xs text-on-surface-variant">{booking.reference}</p>
                        </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                        <StatusPill status={booking.status} />
                        <button
                            ref={closeButtonRef}
                            type="button"
                            onClick={requestClose}
                            aria-label="Close booking details"
                            className="rounded-lg p-1.5 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5">
                    <DetailSection title="Lead hiker">
                        <div className="space-y-2">
                            <DetailRow icon={Mail} label="Contact" value={booking.contact} />
                            <DetailRow icon={ShieldCheck} label="Guide" value={booking.guide || 'Not assigned'} />
                        </div>
                    </DetailSection>

                    <DetailSection title="Climb">
                        <div className="space-y-2">
                            <DetailRow icon={MapPin} label="Trail" value={booking.trail} />
                            <DetailRow icon={CalendarClock} label="Date" value={booking.date} />
                            <DetailRow icon={Users} label="Group" value={`${booking.participants} pax`} />
                        </div>
                    </DetailSection>

                    <DetailSection title="Payment">
                        <div className="rounded-2xl border border-outline-variant/40 p-4">
                            <div className="space-y-2">
                                {booking.feeBreakdown.map((fee) => (
                                    <div key={fee.label} className="flex items-center justify-between gap-3 text-sm">
                                        <span className="text-on-surface-variant">{fee.label}</span>
                                        <span className="font-semibold text-on-surface">{formatter.format(fee.amount)}</span>
                                    </div>
                                ))}
                                <div className="flex items-center justify-between gap-3 border-t border-outline-variant/20 pt-2 text-sm">
                                    <span className="flex items-center gap-1.5 font-semibold text-on-surface">
                                        <Receipt className="h-4 w-4 text-primary" />
                                        {booking.paymentMethod}
                                    </span>
                                    <span className="font-bold text-on-surface">{formatter.format(booking.totalPaid)}</span>
                                </div>
                            </div>
                            <p className="mt-3 text-[11px] text-on-surface-variant">
                                Ref {booking.reference} · {booking.paymentMethod}. Processing fee is non-refundable.
                            </p>
                        </div>
                    </DetailSection>

                    <DetailSection title="On the day">
                        <div className="rounded-2xl border border-outline-variant/40 p-4 text-sm leading-relaxed text-on-surface-variant">
                            <p>
                                Booking {booking.reference} will be verified at the jump-off point on {booking.date}.
                            </p>
                            <p className="mt-2">
                                Physical documents (valid IDs and signed waivers for all members) are presented on the day, not uploaded in advance.
                            </p>
                        </div>
                    </DetailSection>
                </div>

                <div className="border-t border-outline-variant/20 px-5 py-4">
                    {actions.length > 0 ? (
                        <div className="grid grid-cols-2 gap-3">
                            {actions.map((action) => (
                                <ActionButton key={action.key} icon={action.icon} label={action.label} variant={action.variant} onClick={action.action} />
                            ))}
                        </div>
                    ) : booking.status === 'Completed' ? (
                        <p className="text-center text-xs text-on-surface-variant">
                            This booking has completed its climb.
                        </p>
                    ) : (
                        <p className="text-center text-xs text-on-surface-variant">
                            This booking is closed and can no longer be changed.
                        </p>
                    )}
                </div>
            </aside>
        </div>
    );
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import BookingConfirmation from '../booking/BookingConfirmation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    ScrollText,
    Calendar as CalendarIcon,
    MapPin,
    Users,
    ChevronRight,
    Search,
    Filter,
    ArrowLeft,
    CalendarClock,
    XCircle,
    CheckCircle2,
    LayoutDashboard,
    Wallet,
} from 'lucide-react';
import { useHikerStore, cancelBooking, rescheduleBooking } from '../../state/hikerStore';
import CancelBookingModal from '../../components/admin/booking/CancelBookingModal';
import { toast } from '../../components/ui/toast';

const STATUS_OPTIONS = ['All', 'Confirmed', 'Completed', 'Cancelled'];

const STATUS_CONFIG = {
    Confirmed: { label: 'Confirmed', dot: 'bg-emerald-500', text: 'text-emerald-700' },
    Completed: { label: 'Completed', dot: 'bg-on-surface-variant/40', text: 'text-on-surface-variant' },
    Cancelled: { label: 'Cancelled', dot: 'bg-red-600', text: 'text-red-700' },
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

export default function Transaction() {
    const navigate = useNavigate();
    const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
    const { transactions } = useHikerStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const [cancelOpen, setCancelOpen] = useState(false);

    const filteredTransactions = transactions.filter((txn) => {
        const matchesSearch =
            txn.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            txn.trail.toLowerCase().includes(searchTerm.toLowerCase()) ||
            txn.referenceNo.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            statusFilter === 'All' || txn.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const confirmCancel = (reason) => {
        if (!selectedTransaction) return;
        cancelBooking(selectedTransaction.transactionId, reason);
        setSelectedTransaction((current) => (current ? { ...current, status: 'Cancelled' } : current));
        toast.add({ type: 'success', title: 'Booking cancelled', description: 'Refunds follow the Refund and Return Policy.' });
        setCancelOpen(false);
    };

    const parseCurrency = (val) => {
        const num = parseFloat(String(val).replace(/[₱,\s]/g, ''));
        return Number.isNaN(num) ? 0 : num;
    };

    const downloadAllQrs = (txn) => {
        toast.add({ type: 'info', title: 'Download started', description: 'Downloading QR passes...' });
        txn.passesData.forEach((pass) => {
            const link = document.createElement('a');
            link.href = pass.qrCodeUrl;
            link.download = `${pass.id}.webp`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    if (selectedTransaction) {
        return (
            <div className="min-h-screen bg-surface p-4 md:p-8 font-sans">
                <div className="max-w-7xl mx-auto space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setSelectedTransaction(null);
                            }}
                            className="gap-2 cursor-pointer text-on-surface-variant hover:text-on-surface"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Transactions
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => navigate('/hiker/dashboard')}
                            className="gap-2 cursor-pointer text-on-surface-variant hover:text-on-surface"
                        >
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Button>
                    </div>

                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl px-5 py-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <ScrollText className="h-5 w-5" />
                            </span>
                            <div>
                                <p className="text-sm font-bold text-on-surface">{selectedTransaction.transactionId}</p>
                                <p className="text-xs text-on-surface-variant">
                                    {selectedTransaction.trail} &middot; Climb on {selectedTransaction.hikeDate}
                                </p>
                            </div>
                        </div>
                        <StatusPill status={selectedTransaction.status} />
                    </div>

                    <BookingConfirmation
                        selectedDate={selectedTransaction.hikeDate}
                        passesData={selectedTransaction.passesData}
                        receiptData={selectedTransaction.receiptData}
                        onDownloadPdf={() => downloadAllQrs(selectedTransaction)}
                        onSendEmail={(email) => {
                            toast.add({ type: 'info', title: 'Email sent', description: `Passes sent to ${email}.` });
                        }}
                        onJoinGroupChat={() => navigate('/hiker/messages')}
                        onGoToChecklist={() => navigate('/')}
                    />

                    {selectedTransaction.status === 'Confirmed' && (
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-5 md:p-6 shadow-xs">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <CalendarClock className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h3 className="text-base font-bold text-on-surface">Manage Booking</h3>
                                        <p className="text-xs text-on-surface-variant mt-1">
                                            Reschedule your climb date or cancel your booking. Both follow the Refund and Return Policy.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                    <Button
                                        variant="destructive"
                                        className="gap-2 cursor-pointer"
                                        onClick={() => setCancelOpen(true)}
                                    >
                                        <XCircle className="h-4 w-4" />
                                        Cancel Booking
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {cancelOpen && selectedTransaction && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
                        <div className="w-full max-w-lg">
                            <CancelBookingModal
                                booking={{
                                    reference: selectedTransaction.transactionId,
                                    trail: selectedTransaction.trail,
                                    date: selectedTransaction.hikeDate,
                                    participants: selectedTransaction.participantCount,
                                    totalPaid: parseCurrency(selectedTransaction.totalPaid),
                                    feeBreakdown: selectedTransaction.receiptData?.breakdown,
                                }}
                                onConfirm={confirmCancel}
                                onClose={() => setCancelOpen(false)}
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div ref={sectionRef} className="min-h-screen bg-surface p-4 md:p-8 font-sans overflow-hidden">
            <div className={`max-w-5xl mx-auto space-y-6 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-primary">Bookings</p>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mt-2">
                            Transaction History
                        </h1>
                        <p className="text-sm md:text-base text-on-surface-variant mt-2">
                            View and manage your booking permits, receipts, and e-passes.
                        </p>
                    </div>
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/hiker/dashboard')}
                        className="gap-2 cursor-pointer text-on-surface-variant hover:text-on-surface shrink-0 self-start md:self-auto"
                    >
                        <LayoutDashboard className="h-4 w-4" />
                        Back to Dashboard
                    </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-4 shadow-xs">
                    <div className="relative w-full sm:max-w-xs">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
                        <Input
                            placeholder="Search by ID, Trail, Ref..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-9 w-full"
                        />
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        <Filter className="h-4 w-4 text-outline" />
                        {STATUS_OPTIONS.map((status) => (
                            <button
                                key={status}
                                type="button"
                                onClick={() => setStatusFilter(status)}
                                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none cursor-pointer ${statusFilter === status
                                    ? 'bg-primary text-white'
                                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    {filteredTransactions.length > 0 ? (
                        filteredTransactions.map((txn) => (
                            <div
                                key={txn.transactionId}
                                className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-5 shadow-xs hover:border-primary/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                            >
                                <div className="space-y-2 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase">
                                            {txn.transactionId}
                                        </span>
                                        <StatusPill status={txn.status} />
                                    </div>

                                    <h3 className="text-lg font-bold text-on-surface flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-primary shrink-0" />
                                        <span className="truncate">{txn.trail}</span>
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-on-surface-variant">
                                        <span className="flex items-center gap-1">
                                            <CalendarIcon className="h-3.5 w-3.5" />
                                            Climb: <strong className="text-on-surface">{txn.hikeDate}</strong>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="h-3.5 w-3.5" />
                                            {txn.participantCount} participant(s)
                                        </span>
                                        <span>Booked: {txn.dateBooked}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between md:justify-end gap-4 border-t border-outline-variant/20 pt-3 md:border-0 md:pt-0">
                                    <div className="text-left md:text-right">
                                        <p className="text-xs text-on-surface-variant">{txn.paymentMethod}</p>
                                        <p className="text-lg font-extrabold text-primary">{txn.totalPaid}</p>
                                    </div>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setSelectedTransaction(txn)}
                                        className="gap-2 cursor-pointer"
                                    >
                                        <span>View Ticket</span>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl">
                            <span className="h-12 w-12 rounded-xl bg-surface-container-high text-on-surface-variant flex items-center justify-center mx-auto mb-3">
                                <Wallet className="h-6 w-6" />
                            </span>
                            <h3 className="text-base font-bold text-on-surface">No transactions found</h3>
                            <p className="text-xs text-on-surface-variant">
                                Try adjusting your search term or filter status.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
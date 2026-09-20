import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollText, ArrowLeft, LayoutDashboard } from 'lucide-react';
import BookingConfirmation from '@/pages/booking/BookingConfirmation';
import StatusPill from './StatusPill';
import ManageBookingCard from './ManageBookingCard';
import { toast } from '@/components/ui/toast';

export default function TransactionDetailView({ transaction, onBack, onCancelClick }) {
    const navigate = useNavigate();

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

    return (
        <div className="min-h-screen bg-surface p-4 md:p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <Button
                        variant="ghost"
                        onClick={onBack}
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
                            <p className="text-sm font-bold text-on-surface">{transaction.transactionId}</p>
                            <p className="text-xs text-on-surface-variant">
                                {transaction.trail} &middot; Climb on {transaction.hikeDate}
                            </p>
                        </div>
                    </div>
                    <StatusPill status={transaction.status} />
                </div>

                <BookingConfirmation
                    selectedDate={transaction.hikeDate}
                    passesData={transaction.passesData}
                    receiptData={transaction.receiptData}
                    onDownloadPdf={() => downloadAllQrs(transaction)}
                    onSendEmail={(email) => {
                        toast.add({ type: 'info', title: 'Email sent', description: `Passes sent to ${email}.` });
                    }}
                    onJoinGroupChat={() => navigate('/hiker/messages')}
                    onGoToChecklist={() => navigate('/')}
                />

                {transaction.status === 'Confirmed' && (
                    <ManageBookingCard onCancelClick={onCancelClick} />
                )}
            </div>
        </div>
    );
}

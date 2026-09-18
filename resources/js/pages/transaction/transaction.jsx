import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import BookingConfirmation from '../booking/BookingConfirmation';
import { Button } from '@/components/ui/button';
import {
    ScrollText,
    Calendar,
    MapPin,
    Users,
    ChevronRight,
    Search,
    Filter,
    ArrowLeft
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { MOCK_TRANSACTIONS } from '../../mockData';

export default function Transaction() {
    const navigate = useNavigate();
    const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    // Filter transactions by Search Term and Status Filter
    const filteredTransactions = MOCK_TRANSACTIONS.filter((txn) => {
        const matchesSearch =
            txn.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            txn.trail.toLowerCase().includes(searchTerm.toLowerCase()) ||
            txn.referenceNo.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            statusFilter === 'All' || txn.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    // Handle view detail modal or screen
    if (selectedTransaction) {
        return (
            <div className="min-h-screen bg-surface p-4 md:p-8 font-sans">
                <div className="max-w-7xl mx-auto space-y-4">
                    <Button
                        variant="ghost"
                        onClick={() => setSelectedTransaction(null)}
                        className="gap-2 cursor-pointer text-on-surface-variant hover:text-on-surface"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Transactions List
                    </Button>

                    <BookingConfirmation
                        selectedDate={selectedTransaction.hikeDate}
                        passesData={selectedTransaction.passesData}
                        receiptData={selectedTransaction.receiptData}
                        onDownloadPdf={() => console.log('Downloading PDF...')}
                        onSendEmail={(email) => console.log(`Sending to ${email}`)}
                        onJoinGroupChat={() => navigate('/hiker/messages')}
                        onGoToChecklist={() => navigate('/')}
                    />
                </div>
            </div>
        );
    }

    return (
        <div ref={sectionRef} className="min-h-screen bg-surface p-4 md:p-8 font-sans overflow-hidden">
            <div className={`max-w-5xl mx-auto space-y-6 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                {/* Page Title & Summary Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-on-surface flex items-center gap-3">
                            <ScrollText className="h-8 w-8 text-primary" />
                            Transaction History
                        </h1>
                        <p className="text-sm text-on-surface-variant mt-1">
                            View and manage your booking permits, receipts, and e-passes.
                        </p>
                    </div>
                </div>

                {/* Search and Filters Bar */}
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
                        {['All', 'Confirmed', 'Completed'].map((status) => (
                            <button
                                key={status}
                                type="button"
                                onClick={() => setStatusFilter(status)}
                                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors cursor-pointer ${statusFilter === status
                                    ? 'bg-primary text-white'
                                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Transaction List Cards */}
                <div className="space-y-4">
                    {filteredTransactions.length > 0 ? (
                        filteredTransactions.map((txn) => (
                            <div
                                key={txn.transactionId}
                                className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-5 shadow-xs hover:border-primary/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase">
                                            {txn.transactionId}
                                        </span>
                                        <span
                                            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${txn.status === 'Confirmed'
                                                ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                                                : 'bg-surface-variant text-on-surface-variant'
                                                }`}
                                        >
                                            {txn.status}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-on-surface flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-primary shrink-0" />
                                        {txn.trail}
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-4 text-xs text-on-surface-variant">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-3.5 w-3.5" />
                                            Climb: <strong>{txn.hikeDate}</strong>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="h-3.5 w-3.5" />
                                            {txn.participantCount} Participant(s)
                                        </span>
                                        <span>Booked: {txn.dateBooked}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between md:justify-end gap-4 border-t border-outline-variant/20 pt-3 md:border-0 md:pt-0">
                                    <div className="text-left md:text-right">
                                        <p className="text-xs text-outline">{txn.paymentMethod}</p>
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
                            <Receipt className="h-12 w-12 text-outline mx-auto mb-3" />
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
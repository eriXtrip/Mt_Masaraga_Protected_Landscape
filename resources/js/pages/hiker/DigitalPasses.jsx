import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import {
    Ticket,
    Download,
    ChevronRight,
    CalendarCheck,
    BadgeCheck,
    ShieldCheck,
    Eye,
} from 'lucide-react';
import HikerTicketPass from '../../components/features/HikerTicketPass';
import { useHikerStore } from '../../state/hikerStore';

const PASS_STATUS = {
    Valid: { label: 'Valid', dot: 'bg-emerald-500', text: 'text-emerald-700' },
    Used: { label: 'Used', dot: 'bg-on-surface-variant/40', text: 'text-on-surface-variant' },
    Cancelled: { label: 'Cancelled', dot: 'bg-red-600', text: 'text-red-700' },
};

function StatusPill({ status }) {
    const config = PASS_STATUS[status] || { label: status, dot: 'bg-on-surface-variant/40', text: 'text-on-surface-variant' };
    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full bg-surface-container-high px-2.5 py-1 text-xs font-semibold ${config.text}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
            {config.label}
        </span>
    );
}

export default function DigitalPasses() {
    const navigate = useNavigate();
    const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
    const { transactions } = useHikerStore();

    const passes = transactions.flatMap((txn) =>
        txn.passesData.map((pass) => ({
            ...pass,
            transactionId: txn.transactionId,
            hikeDate: txn.hikeDate,
        }))
    );

    const activePasses = passes.filter((pass) => pass.status === 'Valid');
    const otherPasses = passes.filter((pass) => pass.status !== 'Valid');

    const downloadQr = (pass) => {
        const link = document.createElement('a');
        link.href = pass.qrCodeUrl;
        link.download = `${pass.id}.webp`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div ref={sectionRef} className="min-h-screen bg-surface font-sans">
            <div className={`max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                <header>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary">Digital Passes</p>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mt-2">My Digital Passes</h1>
                    <p className="text-sm md:text-base text-on-surface-variant mt-2 max-w-2xl">
                        Present these passes at the jump-off point for verification on your climb date.
                    </p>
                </header>

                {passes.length === 0 ? (
                    <section className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-8 md:p-12 text-center shadow-sm">
                        <span className="h-14 w-14 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                            <CalendarCheck className="h-7 w-7" />
                        </span>
                        <h2 className="text-xl md:text-2xl font-bold text-on-surface mt-5">No passes yet</h2>
                        <p className="text-sm text-on-surface-variant mt-2 max-w-md mx-auto">
                            Digital passes are issued after you complete a booking and payment.
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            className="mt-6 cursor-pointer"
                            onClick={() => navigate('/booking')}
                        >
                            Book a Hike
                        </Button>
                    </section>
                ) : (
                    <>
                        <section className="grid grid-cols-2 gap-3 max-w-md">
                            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4 shadow-xs">
                                <p className="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant">Active passes</p>
                                <p className="text-2xl font-bold text-emerald-700 mt-1">{activePasses.length}</p>
                            </div>
                            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4 shadow-xs">
                                <p className="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant">Used & cancelled</p>
                                <p className="text-2xl font-bold text-on-surface-variant mt-1">{otherPasses.length}</p>
                            </div>
                        </section>

                        {activePasses.length > 0 && (
                            <section className="space-y-6">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                                        <BadgeCheck className="h-4 w-4 text-primary" />
                                        Active Passes
                                    </span>
                                </div>

                                {activePasses.map((pass) => (
                                    <div
                                        key={pass.id}
                                        className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-5 md:p-6 shadow-sm"
                                    >
                                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase">
                                                    {pass.transactionId}
                                                </span>
                                                <StatusPill status={pass.status} />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="gap-1.5 cursor-pointer"
                                                    onClick={() => downloadQr(pass)}
                                                >
                                                    <Download className="h-3.5 w-3.5" />
                                                    Download QR
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="gap-1.5 cursor-pointer text-primary hover:text-primary"
                                                    onClick={() => navigate('/hiker/transactions')}
                                                >
                                                    <Eye className="h-3.5 w-3.5" />
                                                    View Booking
                                                    <ChevronRight className="h-3.5 w-3.5" />
                                                </Button>
                                            </div>
                                        </div>

                                        <HikerTicketPass currentPass={pass} />
                                    </div>
                                ))}
                            </section>
                        )}

                        {otherPasses.length > 0 && (
                            <section>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                                        <ShieldCheck className="h-4 w-4 text-primary" />
                                        Used & Cancelled Passes
                                    </span>
                                </div>
                                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl divide-y divide-outline-variant/20 shadow-xs overflow-hidden">
                                    {otherPasses.map((pass) => (
                                        <div
                                            key={pass.id}
                                            className="px-5 py-4 flex flex-wrap items-center justify-between gap-3"
                                        >
                                            <div className="min-w-0 flex items-center gap-4">
                                                <span className="h-9 w-9 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
                                                    <Ticket className="h-4 w-4" />
                                                </span>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-bold text-on-surface truncate">{pass.hikerName}</p>
                                                    <p className="text-xs text-on-surface-variant mt-0.5">
                                                        {pass.trail} &middot; {pass.hikeDate}
                                                    </p>
                                                </div>
                                            </div>
                                            <StatusPill status={pass.status} />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
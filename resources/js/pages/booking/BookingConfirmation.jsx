import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import QR from '../../../../public/images/QR_Code_Example.svg.webp';
import HikerTicketPass from '../../components/features/HikerTicketPass';
import DigitalPassDownloadModal from '../../components/hiker/digitalpass/DigitalPassDownloadModal';
import { Input } from '@/components/ui/input';
import {
    CheckCircle2,
    Info,
    Download,
    Mail,
    MessageSquare,
    ArrowRight,
    Receipt,
    ListChecks,
    ChevronLeft,
    ChevronRight,
    FileText,
    ShieldAlert,
    Map,
    X,
    Loader2,
    Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '../../components/ui/toast';

const DEFAULT_BOOKING_PASSES = [
    {
        id: 'MMPL-2023-0892-1',
        qrCodeUrl: QR,
        status: 'Valid',
        date: 'Oct 24, 2023',
        trail: 'Ambot Trail',
        guideHiker: 'Rodel Villanueva',
        hikerName: 'Jane Doe',
    },
    {
        id: 'MMPL-2023-0892-2',
        qrCodeUrl: QR,
        status: 'Valid',
        date: 'Oct 24, 2023',
        trail: 'Ambot Trail',
        guideHiker: 'Rodel Villanueva',
        hikerName: 'John Smith',
    },
];

const DEFAULT_PAYMENT_RECEIPT = {
    breakdown: [
        { label: 'Environmental Fee (4 x ₱150)', amount: '₱600.00' },
        { label: 'Guide Fee (1 Guide)', amount: '₱1,200.00' },
        { label: 'Processing Fee', amount: '₱50.00' },
    ],
    totalPaid: '₱1,850.00',
    paymentMethod: 'Paid via GCash',
    referenceNo: 'Ref: ABC123XYZ89',
};

const HIKER_RESOURCES = [
    {
        id: 'safety_guide',
        title: 'Pre-Climb Safety Guidelines',
        description: 'Trail rules, weather prep, and limatik precautions.',
        fileName: 'Mt-Masaraga-Safety-Guidelines.pdf',
        downloadUrl: '/downloads/Mt-Masaraga-Safety-Guidelines.pdf',
        icon: ShieldAlert,
    },
    {
        id: 'gear_checklist',
        title: 'Mandatory Gear Checklist',
        description: 'Required clothing, hydration, and emergency gear.',
        fileName: 'Mt-Masaraga-Gear-Checklist.pdf',
        downloadUrl: '/downloads/Mt-Masaraga-Gear-Checklist.pdf',
        icon: FileText,
    },
    {
        id: 'trail_map',
        title: 'Mt. Masaraga Trail Map',
        description: 'Know the trails and the mountain terrain.',
        fileName: 'Mt-Masaraga-Trail-Map.pdf',
        downloadUrl: '/downloads/Mt-Masaraga-Trail-Map.pdf',
        icon: Map,
    },
];

export default function BookingConfirmation({
    selectedDate,
    passesData = DEFAULT_BOOKING_PASSES,
    receiptData = DEFAULT_PAYMENT_RECEIPT,
    onSendEmail,
    onJoinGroupChat,
    onGoToChecklist,
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
    const [isPassDownloadOpen, setIsPassDownloadOpen] = useState(false);

    // Modal State
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSentSuccess, setIsSentSuccess] = useState(false);

    // Apply the selected date to the passes if provided
    const displayPasses = (selectedDate
        ? passesData.map(pass => ({ ...pass, date: selectedDate }))
        : passesData
    ).map(pass => ({
        ...pass,
        guideHiker: pass.guideHiker,
    }));

    const handlePrevPass = () => {
        setActiveIndex((prev) => (prev === 0 ? displayPasses.length - 1 : prev - 1));
    };

    const handleNextPass = () => {
        setActiveIndex((prev) => (prev === displayPasses.length - 1 ? 0 : prev + 1));
    };

    const handleDownload = (e, url, fileName) => {
        e.preventDefault();
        toast.add({ type: 'info', title: 'Download started', description: `Downloading ${fileName}` });
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Open Modal
    const handleOpenEmailModal = () => {
        setIsSentSuccess(false);
        setEmailInput('');
        setIsEmailModalOpen(true);
    };

    // Handle Email Submit Simulation
    const handleSendEmailSubmit = (e) => {
        e.preventDefault();
        if (!emailInput) return;

        setIsSending(true);

        setTimeout(() => {
            setIsSending(false);
            setIsSentSuccess(true);
            toast.add({ type: 'success', title: 'Email sent', description: `E-passes delivered to ${emailInput}.` });
            if (onSendEmail) onSendEmail(emailInput);
        }, 1500);
    };

    return (
        <main ref={sectionRef}>
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                {/* Left Column: Confirmation & Interactive Pass Carousel */}
                <div className="lg:col-span-7 flex flex-col gap-6">

                    {/* Success Header */}
                    <section className="flex flex-col items-center md:flex-row md:items-center gap-4 text-center md:text-left">
                        <div className="h-12 w-12 rounded-2xl bg-secondary-container text-primary flex items-center justify-center shrink-0">
                            <CheckCircle2 className="h-7 w-7" />
                        </div>
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                                Booking Confirmed
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mt-1">
                                You're all set, hiker!
                            </h2>
                            <p className="text-sm md:text-base text-on-surface-variant mt-1">
                                Your e-passes and payment receipt are ready below.
                            </p>
                        </div>
                    </section>

                    {/* Single Active Pass Card */}
                    <section className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm relative overflow-hidden transition-all duration-300">

                        {/* Pass Counter Badge & Navigation Header */}
                        {displayPasses.length > 1 && (
                            <div className="flex justify-between items-center mb-4 pb-3 border-b border-outline-variant/15 relative z-10">
                                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                                    Pass {activeIndex + 1} of {displayPasses.length}
                                </span>
                                <div className="flex items-center gap-1">
                                    <button
                                        type="button"
                                        onClick={handlePrevPass}
                                        className="p-1.5 rounded-full hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer"
                                        title="Previous Pass"
                                    >
                                        <ChevronLeft className="h-5 w-5" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNextPass}
                                        className="p-1.5 rounded-full hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer"
                                        title="Next Pass"
                                    >
                                        <ChevronRight className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Active Pass Render Area */}
                        <div className="relative z-10 w-full flex justify-center items-center overflow-hidden py-1">
                            {displayPasses.map((pass, idx) => (
                                <div
                                    key={pass.id}
                                    className={`w-full flex justify-center transition-opacity duration-300 ${idx === activeIndex ? 'block opacity-100' : 'hidden opacity-0'
                                        }`}
                                >
                                    <div className="transform origin-top scale-[0.68] min-[380px]:scale-[0.72] min-[480px]:scale-[0.80] sm:scale-[0.90] lg:scale-100 transition-transform duration-200 -mb-27.5 min-[380px]:-mb-20 min-[480px]:-mb-12.5 sm:-mb-6.25 lg:mb-0">
                                        <HikerTicketPass currentPass={pass} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Interactive Dot Indicators for Multiple Passes */}
                        {displayPasses.length > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-4 relative z-10">
                                {displayPasses.map((_, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => setActiveIndex(idx)}
                                        className={`h-2 rounded-full transition-all cursor-pointer ${activeIndex === idx
                                            ? 'w-6 bg-primary'
                                            : 'w-2 bg-outline-variant/40 hover:bg-outline-variant'
                                            }`}
                                        title={`Go to Pass ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Instructions Alert */}
                        <div className="mt-6 bg-surface-container-high rounded-xl p-4 flex items-start gap-4 border border-outline-variant/20 relative z-10">
                            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <p className="text-xs text-on-surface-variant leading-relaxed">
                                <strong>Important:</strong> Present this Ticket/ID at the jump-off point along with your physical documents (valid IDs and signed waivers for all members).
                            </p>
                        </div>
                    </section>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row w-full gap-4 mt-2">
                        <Button
                            variant="default"
                            size="lg"
                            onClick={() => setIsPassDownloadOpen(true)}
                            className="flex-none sm:flex-1 gap-2 h-10"
                        >
                            <Download className="h-4 w-4" />
                            <span className="text-sm">Download Pass Images</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={handleOpenEmailModal}
                            className="flex-none sm:flex-1 gap-2 h-10"
                        >
                            <Mail className="h-4 w-4" />
                            <span className="text-sm">Send to Email</span>
                        </Button>
                    </div>
                </div>

                {/* Right Column: Summary & CTA */}
                <div className="lg:col-span-5 flex flex-col gap-6 mt-8 lg:mt-0">

                    {/* Hiker Chat CTA Card */}
                    <button
                        type="button"
                        onClick={onJoinGroupChat}
                        className="bg-secondary text-on-secondary rounded-2xl p-6 shadow-md relative overflow-hidden cursor-pointer hover:-translate-y-0.5 transition-all w-full text-left group"
                    >
                        <div className="flex items-center justify-between relative">
                            <div className="flex items-center gap-4">
                                <div className="bg-on-secondary/20 p-3 rounded-full shrink-0">
                                    <MessageSquare className="h-6 w-6 text-on-secondary fill-on-secondary/20" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-0.5">
                                        Join Group Announcement
                                    </h3>
                                    <p className="text-xs text-on-secondary/80">
                                        Announcement from the Park Staff.
                                    </p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform shrink-0" />
                        </div>
                    </button>

                    {/* Receipt Summary Card */}
                    <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
                            <Receipt className="h-5 w-5 text-outline" />
                            Payment Summary
                        </h3>
                        <div className="space-y-4 text-sm">
                            {receiptData.breakdown.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center pb-4 border-b border-outline-variant/20"
                                >
                                    <span className="text-on-surface-variant">{item.label}</span>
                                    <span className="text-on-surface font-semibold">
                                        {item.amount}
                                    </span>
                                </div>
                            ))}

                            <div className="flex justify-between items-center pt-2">
                                <span className="text-base font-bold text-on-surface">
                                    Total Paid
                                </span>
                                <span className="text-xl font-extrabold text-primary">
                                    {receiptData.totalPaid}
                                </span>
                            </div>

                            <div className="flex justify-between items-center pt-2 text-outline text-xs">
                                <span>{receiptData.paymentMethod}</span>
                                <span>{receiptData.referenceNo}</span>
                            </div>
                        </div>
                    </div>

                    {/* Hiker Resources */}
                    <div className="bg-surface-container border border-outline-variant/40 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                            <ListChecks className="h-4 w-4" />
                            Hiker Resources
                        </h3>

                        <div className="space-y-3 mb-5">
                            {HIKER_RESOURCES.map((resource) => {
                                const IconComponent = resource.icon;
                                return (
                                    <div
                                        key={resource.id}
                                        className="flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                                                <IconComponent className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-on-surface leading-snug">
                                                    {resource.title}
                                                </h4>
                                                <p className="text-[11px] text-on-surface-variant">
                                                    {resource.description}
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={(e) =>
                                                handleDownload(e, resource.downloadUrl, resource.fileName)
                                            }
                                            className="p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors shrink-0 cursor-pointer"
                                            title={`Download ${resource.fileName}`}
                                        >
                                            <Download className="h-4 w-4" />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                if (onGoToChecklist) onGoToChecklist();
                            }}
                            className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:underline underline-offset-4 cursor-pointer"
                        >
                            <ChevronLeft className="h-4 w-4" />
                            <span>Back to Checklist</span>
                        </a>
                    </div>

                </div>
            </div>

            <DigitalPassDownloadModal
                isOpen={isPassDownloadOpen}
                passes={displayPasses}
                onClose={() => setIsPassDownloadOpen(false)}
                title="Download pass images"
            />

            {/* Email Input Modal Overlay */}
            {isEmailModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative w-full max-w-md bg-surface-container-lowest border border-outline-variant/40 rounded-2xl shadow-2xl p-6 overflow-hidden">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsEmailModalOpen(false)}
                            className="absolute top-4 right-4 p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 rounded-full transition-colors cursor-pointer"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {!isSentSuccess ? (
                            <form onSubmit={handleSendEmailSubmit} className="space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-on-surface">Email E-Passes</h3>
                                        <p className="text-xs text-on-surface-variant">
                                            Send physical ticket copies directly to your inbox.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-on-surface uppercase tracking-wider block">
                                        Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        required
                                        placeholder="name@example.com"
                                        value={emailInput}
                                        onChange={(e) => setEmailInput(e.target.value)}
                                        className="w-full"
                                    />
                                </div>

                                <div className="flex gap-3 justify-end pt-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setIsEmailModalOpen(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="default"
                                        disabled={isSending || !emailInput}
                                        className="gap-2"
                                    >
                                        {isSending ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-4 w-4" />
                                                <span>Send Ticket Pass</span>
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <div className="flex flex-col items-center text-center py-4 space-y-4 animate-in zoom-in-95 duration-200">
                                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                                    <CheckCircle2 className="h-10 w-10" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-on-surface">Email Sent!</h3>
                                    <p className="text-xs text-on-surface-variant max-w-xs">
                                        Your booking passes have been successfully delivered to <strong className="text-on-surface">{emailInput}</strong>.
                                    </p>
                                </div>
                                <Button
                                    variant="default"
                                    className="w-full mt-2"
                                    onClick={() => setIsEmailModalOpen(false)}
                                >
                                    Done
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}
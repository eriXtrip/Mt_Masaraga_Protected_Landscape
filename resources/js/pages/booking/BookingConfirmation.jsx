import React, { useState } from 'react';
import QR from '../../../../public/images/QR_Code_Example.svg.webp'
import HikerTicketPass from '../../components/features/HikerTicketPass';
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
    ShieldAlert
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const DEFAULT_BOOKING_PASSES = [
    {
        id: 'MMPL-2023-0892-1',
        qrCodeUrl: QR,
        status: 'Valid',
        date: 'Oct 24, 2023',
        trail: 'Ambot Trail',
        leadHiker: 'Jane Doe',
        hikerName: 'Jane Doe',
    },
    {
        id: 'MMPL-2023-0892-2',
        qrCodeUrl: QR,
        status: 'Valid',
        date: 'Oct 24, 2023',
        trail: 'Ambot Trail',
        leadHiker: 'Jane Doe',
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
];

export default function BookingConfirmation({
    selectedDate,
    passesData = DEFAULT_BOOKING_PASSES,
    receiptData = DEFAULT_PAYMENT_RECEIPT,
    onDownloadPdf,
    onSendEmail,
    onJoinGroupChat,
    onGoToChecklist,
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    // Apply the selected date to the passes if provided
    const displayPasses = selectedDate
        ? passesData.map(pass => ({ ...pass, date: selectedDate }))
        : passesData;

    const handlePrevPass = () => {
        setActiveIndex((prev) => (prev === 0 ? displayPasses.length - 1 : prev - 1));
    };

    const handleNextPass = () => {
        setActiveIndex((prev) => (prev === displayPasses.length - 1 ? 0 : prev + 1));
    };

    const currentPass = displayPasses[activeIndex] || displayPasses[0];

    const handleDownload = (e, url, fileName) => {
        e.preventDefault();
        // Programmatic trigger for downloading local assets
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className="grow pb-32 px-1 sm:px-8 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left Column: Confirmation & Interactive Pass Carousel */}
                <div className="lg:col-span-7 flex flex-col gap-6">

                    {/* Success Header */}
                    <section className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
                        <div className="bg-secondary-container text-on-secondary-container rounded-full p-4 inline-flex shadow-sm">
                            <CheckCircle2 className="h-12 w-12 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">
                            Booking Confirmed!
                        </h2>
                    </section>

                    {/* Single Active Pass Card */}
                    <section className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm relative overflow-hidden transition-all duration-300">
                        <div className="absolute inset-0 bg-linear-to-br from-primary-container/5 to-transparent pointer-events-none" />

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
                                    {/* Scaled wrapper with reduced zoom levels and negative margin compensation */}
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
                    <div className="flex flex-col h-25 md:flex-row w-full gap-4 mt-2">
                        <Button
                            variant="default"
                            size="lg"
                            onClick={onDownloadPdf}
                            className="flex-1"
                        >
                            <Download />
                            <span className='text-sm'>Download PDF Passes</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={onSendEmail}
                            className="flex-1"
                        >
                            <Mail />
                            <span className='text-sm'>Send to Email</span>
                        </Button>
                    </div>
                </div>

                {/* Right Column: Summary & CTA */}
                <div className="lg:col-span-5 flex flex-col gap-6 mt-8 lg:mt-0">

                    {/* Hiker Chat CTA Card */}
                    <div
                        onClick={onJoinGroupChat}
                        className="bg-secondary text-on-secondary rounded-2xl p-6 shadow-lg relative overflow-hidden cursor-pointer hover:shadow-xl transition-all group transform hover:-translate-y-1 duration-300"
                    >
                        <div className="absolute -right-10 -top-10 bg-white/10 w-32 h-32 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                        <div className="flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="bg-on-secondary/20 p-3 rounded-full shrink-0">
                                    <MessageSquare className="h-6 w-6 text-on-secondary fill-on-secondary/20" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-0.5">
                                        Join Hiker Group Chat
                                    </h3>
                                    <p className="text-xs text-on-secondary/80">
                                        Connect with your guide and group.
                                    </p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform shrink-0" />
                        </div>
                    </div>

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
                    <div className="bg-surface-container border border-outline-variant/10 rounded-2xl p-6 shadow-sm">
                        {/* Header */}
                        <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                            <ListChecks className="h-4 w-4" />
                            Hiker Resources & Next Steps
                        </h3>

                        {/* Downloadable Resource List */}
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

                                        {/* Download Action Button */}
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

                        {/* Footer Home Link */}
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                if (onGoToChecklist) onGoToChecklist();
                            }}
                            className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:underline underline-offset-4 cursor-pointer"
                        >
                            <span>Back to Home</span>
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>

                </div>
            </div>
        </main>
    );
}
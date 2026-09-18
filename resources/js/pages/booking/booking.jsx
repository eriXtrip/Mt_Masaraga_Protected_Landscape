import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProgressNode from '@/components/features/ProgressNode';
import { Calendar } from '@/components/ui/calendar';
import BookingSummaryCard from '@/components/features/BookingSummaryCard';
import HikerDetailsForm from '@/components/forms/HikerDetailsForm';
import DocumentChecklistForm from '@/components/forms/DocumentChecklistForm';
import PaymentForm from '@/components/forms/PaymentForm';
import BookingConfirmation from './BookingConfirmation';
import PaymentOverlay from '@/components/features/PaymentOverlay';

import QR from '../../../../public/images/QR_Code_Example.svg.webp';
import { BOOKING_DETAILS, TRAILS } from '../../mockData';

const STEPS = ['Select Date', 'Hikers Details', 'Checklist', 'Payment'];

// Mock data for available slots per date (YYYY-MM-DD format)
export const SLOTS = {
    "2026-10-05": 12,
    "2026-10-06": 8,
    "2026-10-07": 0, // Fully booked
    "2026-10-08": 2, // Limited space
    "2026-10-09": 15,
    "2026-10-10": 0,
};

export default function Booking() {
    const navigate = useNavigate();
    const { id } = useParams();

    // 1. Resolve trail key safely (defaults to 'amtic' if undefined or invalid)
    const trailId = id && TRAILS[id] ? id : 'amtic';
    const trail = TRAILS[trailId];
    const trailBookingDetails = BOOKING_DETAILS[trailId] || BOOKING_DETAILS.amtic;

    const [currentStep, setCurrentStep] = useState(1);
    const [date, setDate] = useState(undefined);
    const [showPaymentOverlay, setShowPaymentOverlay] = useState(false);
    const [participantCount, setParticipantCount] = useState(1);

    // Application Data State
    const [hikerData, setHikerData] = useState(null);
    const [paymentData, setPaymentData] = useState(null);

    // Reset all state when trail id changes
    useEffect(() => {
        setCurrentStep(1);
        setDate(undefined);
        setShowPaymentOverlay(false);
        setParticipantCount(1);
        setHikerData(null);
        setPaymentData(null);
    }, [trailId]);

    const goToStep = (step) => {
        setCurrentStep(step);
    };

    const handleNextStep = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const formattedSelectedDate = date
        ? date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        })
        : 'Please select a date';

    // Dynamic Passes Data generated for Confirmation view
    const passesData = hikerData
        ? hikerData.map((hiker, index) => ({
            id: `MMPL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}-${index + 1}`,
            qrCodeUrl: QR,
            status: 'Valid',
            date: formattedSelectedDate,
            trail: trailBookingDetails.selectedTrail,
            leadHiker: 'Assigned by Admin',
            hikerName: hiker.fullName,
        }))
        : undefined;

    const baseFee = trailBookingDetails.baseFeePerPax;
    const totalBaseFee = baseFee * participantCount;
    const processingFee = 50;
    const totalAmount = totalBaseFee + processingFee;

    // Dynamic Receipt Data generated for Confirmation view
    const receiptData = {
        breakdown: [
            { label: `Base Fee (${participantCount} x ₱${baseFee})`, amount: `₱${totalBaseFee.toFixed(2)}` },
            { label: 'Processing Fee', amount: `₱${processingFee.toFixed(2)}` },
        ],
        totalPaid: `₱${totalAmount.toFixed(2)}`,
        paymentMethod: `Paid via ${paymentData?.paymentMethod || 'GCash'}`,
        referenceNo: `Ref: MSG${Math.floor(10000000 + Math.random() * 90000000)}`,
    };

    const bookingSummary = {
        trail: trailBookingDetails.selectedTrail,
        date: formattedSelectedDate,
        participants: `${participantCount} Pax`,
        breakdown: [
            { label: `Base Fee (${participantCount} x ₱${baseFee})`, amount: totalBaseFee },
            { label: 'Processing Fee', amount: processingFee },
        ],
        totalAmount: totalAmount,
    };

    return (
        <div className="min-h-screen bg-surface p-4 md:p-8 font-sans">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* Header / Progress Section (Only visible during steps 1 - 4) */}
                {currentStep <= 4 && (
                    <div className="p-6 md:p-8 flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold text-on-surface mb-8">
                            Booking Application — {trail.name}
                        </h1>

                        <div className="flex items-center justify-center gap-2 sm:gap-4 w-full max-w-2xl">
                            {STEPS.map((stepName, index) => {
                                const step = index + 1;
                                const isCompleted = step < currentStep;
                                const isActive = step === currentStep;

                                return (
                                    <div
                                        key={step}
                                        className={`flex items-center ${index < STEPS.length - 1 ? 'flex-1' : ''
                                            }`}
                                    >
                                        <ProgressNode
                                            step={step}
                                            name={stepName}
                                            isActive={isActive}
                                            isCompleted={isCompleted}
                                            color="primary"
                                        />
                                        {index < STEPS.length - 1 && (
                                            <div className="mx-2 h-0.75 flex-1 rounded-full bg-surface-container-highest overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-primary transition-all duration-300"
                                                    style={{ width: currentStep > step ? '100%' : '0%' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Steps Content Area */}
                {currentStep <= 4 && (
                    <div className="flex gap-6 items-start mt-6">
                        <div className="flex-1">
                            {/* STEP 1: SELECT DATE */}
                            {currentStep === 1 && (
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-6">
                                    <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-6 md:p-8 shadow-sm">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            slots={SLOTS}
                                        />
                                    </div>
                                    <div className="lg:col-span-4 sticky top-6">
                                        <BookingSummaryCard
                                            trailName={trailBookingDetails.selectedTrail}
                                            baseFee={baseFee}
                                            selectedDate={formattedSelectedDate}
                                            participantCount={participantCount}
                                            setParticipantCount={setParticipantCount}
                                            onContinue={handleNextStep}
                                            onCancel={() => goToStep(1)}
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: HIKER DETAILS */}
                            {currentStep === 2 && (
                                <HikerDetailsForm
                                    participantCount={participantCount}
                                    onBack={() => goToStep(1)}
                                    onNext={(formDataArray) => {
                                        setHikerData(formDataArray);
                                        handleNextStep();
                                    }}
                                />
                            )}

                            {/* STEP 3: DOCUMENT CHECKLIST */}
                            {currentStep === 3 && (
                                <DocumentChecklistForm
                                    onBack={() => goToStep(2)}
                                    onNext={() => {
                                        handleNextStep();
                                    }}
                                />
                            )}

                            {/* STEP 4: PAYMENT FORM */}
                            {currentStep === 4 && (
                                <PaymentForm
                                    summary={bookingSummary}
                                    onBack={() => goToStep(3)}
                                    onPayNow={(data) => {
                                        setPaymentData(data);
                                        setShowPaymentOverlay(true);
                                    }}
                                />
                            )}
                        </div>
                    </div>
                )}

                {/* STEP 5: BOOKING CONFIRMATION */}
                {currentStep === 5 && (
                    <BookingConfirmation
                        selectedDate={formattedSelectedDate}
                        passesData={passesData}
                        receiptData={receiptData}
                        onDownloadPdf={() => {
                            console.log('Downloading PDF Pass...');
                        }}
                        onSendEmail={() => {
                            console.log('Sending pass to email...');
                        }}
                        onJoinGroupChat={() => {
                            navigate('/hiker/messages');
                        }}
                        onGoToChecklist={() => {
                            goToStep(3);
                        }}
                    />
                )}
            </div>

            <PaymentOverlay
                isOpen={showPaymentOverlay}
                paymentMethod={paymentData?.paymentMethod || 'GCash'}
                amount={bookingSummary.totalAmount}
                onClose={() => setShowPaymentOverlay(false)}
                onComplete={() => {
                    setShowPaymentOverlay(false);
                    handleNextStep();
                }}
            />
        </div>
    );
}
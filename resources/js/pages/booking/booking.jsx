import React, { useState } from 'react';
import ProgressNode from '@/components/features/ProgressNode';
import { Calendar } from '@/components/ui/calendar';
import BookingSummaryCard from '@/components/features/BookingSummaryCard';
import HikerDetailsForm from '@/components/forms/HikerDetailsForm';

const STEPS = ['Select Date', 'Hikers Details', 'Checklist', 'Payment'];

// Mock data for available slots per date (YYYY-MM-DD format)
export const SLOTS = {
    "2024-11-05": 12,
    "2024-11-06": 8,
    "2024-11-07": 0, // Fully booked
    "2024-11-08": 2, // Limited space
    "2024-11-09": 15,
    "2024-11-10": 0,
};

export default function Booking() {
    const [currentStep, setCurrentStep] = useState(1);
    const [date, setDate] = useState(undefined);

    const goToStep = (step) => {
        // Allows navigating backwards or to available steps
        setCurrentStep(step);
    };

    const handleNextStep = () => {
        if (currentStep < STEPS.length) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const formattedSelectedDate = date
        ? date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })
        : 'No Date Selected';

    return (
        <div className="min-h-screen bg-surface p-4 md:p-8 font-sans">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* Header / Progress Section */}
                <div className="p-6 md:p-8 flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold text-on-surface mb-8">
                        Booking Application
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

                <div className="flex gap-6 items-start mt-6">
                    <div className="flex-1">
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
                                        selectedDate={formattedSelectedDate}
                                        onContinue={handleNextStep}
                                        onCancel={() => goToStep(1)}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <HikerDetailsForm
                                onBack={() => goToStep(1)}
                                onNext={(data) => {
                                    console.log('Form Data:', data);
                                    handleNextStep();
                                }}
                            />
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
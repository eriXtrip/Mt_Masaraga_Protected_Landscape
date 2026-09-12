import React from 'react';
import { Mountain, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BOOKING_DETAILS = {
    selectedTrail: 'Masaraga Summit Trail',
    baseFeePerPax: 500.0,
    totalEstimated: 0.0,
    note: '*Total calculated on next step based on pax count.',
};

export default function BookingSummaryCard({
    selectedDate = 'No Date Selected',
    onContinue,
    onCancel,
    className = '',
}) {
    const formatCurrency = (amount) =>
        new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP',
        }).format(amount);

    const SUMMARY_ITEMS = [
        {
            id: 'trail',
            label: 'Selected Trail',
            value: BOOKING_DETAILS.selectedTrail,
            icon: Mountain,
        },
        {
            id: 'date',
            label: 'Selected Date',
            value: selectedDate,
            icon: Calendar,
        },
    ];

    return (
        <div
            className={`bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-xl shadow-[#172b1d]/5 border border-outline-variant/60 transition-all duration-300 hover:shadow-2xl ${className}`}
        >
            {/* Header */}
            <div className="border-b border-outline-variant/60 pb-5 mb-5">
                <h3 className="text-xl font-bold text-on-surface tracking-tight">
                    Booking Summary
                </h3>
                <p className="text-xs text-on-surface-variant font-medium mt-1">
                    Review your selection before proceeding.
                </p>
            </div>

            {/* Trail & Date Selections */}
            <div className="space-y-4 mb-6">
                {SUMMARY_ITEMS.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={item.id}
                            className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface/80 border border-outline-variant/50 transition-colors hover:bg-surface"
                        >
                            <span className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 flex items-center justify-center">
                                <IconComponent className="h-5 w-5" />
                            </span>
                            <div>
                                <span className="text-[11px] font-semibold text-outline tracking-wider uppercase block">
                                    {item.label}
                                </span>
                                <span className="text-sm font-bold text-on-surface leading-snug">
                                    {item.value}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Price Calculation & Estimated Breakdown */}
            <div className="border-t border-outline-variant/60 pt-5 space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant font-medium">
                        Base Fee per Pax
                    </span>
                    <span className="font-bold text-on-surface">
                        {formatCurrency(BOOKING_DETAILS.baseFeePerPax)}
                    </span>
                </div>

                <div className="flex justify-between items-baseline pt-2 border-t border-dashed border-outline-variant">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-outline block">
                            Total Estimated
                        </span>
                        <span className="text-[11px] text-on-surface-variant italic leading-tight">
                            {BOOKING_DETAILS.note}
                        </span>
                    </div>
                    <span className="text-2xl font-black text-primary ml-2 shrink-0">
                        {formatCurrency(BOOKING_DETAILS.totalEstimated)}
                    </span>
                </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="space-y-3 pt-2">
                <Button
                    onClick={onContinue}
                    variant="default"
                    size="lg"
                    className="w-full"
                    disabled={selectedDate === 'No Date Selected'}
                >
                    <span>Continue to Hiker Details</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                    onClick={onCancel}
                    variant="outline"
                    size="lg"
                    className="w-full"
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
}
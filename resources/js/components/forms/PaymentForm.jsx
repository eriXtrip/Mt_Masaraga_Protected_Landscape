import React, { useState } from 'react';
import { Wallet, CreditCard, QrCode, Building2, HandCoins } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PAYMENT_METHODS = [
    {
        id: 'gcash',
        label: 'GCash',
        icon: Wallet,
    },
    {
        id: 'card',
        label: 'Credit/Debit Card',
        icon: CreditCard,
    },
    {
        id: 'maya',
        label: 'Maya',
        icon: QrCode,
    },
    {
        id: 'bank',
        label: 'Bank Transfer (Landbank, BDO)',
        icon: Building2,
    },
];

const DEFAULT_BOOKING_SUMMARY = {
    trail: 'Ambot Trail',
    date: 'Oct 24, 2024',
    participants: '4 Pax',
    breakdown: [
        { label: 'Environmental Fee (4 x ₱150)', amount: 600.0 },
        { label: 'Guide Fee (1 Guide)', amount: 1200.0 },
        { label: 'Processing Fee', amount: 50.0 },
    ],
    totalAmount: 1850.0,
};

export default function PaymentStepForm({
    summary = DEFAULT_BOOKING_SUMMARY,
    onBack,
    onPayNow,
}) {
    // Initialized to null so no method is selected by default
    const [selectedMethod, setSelectedMethod] = useState(null);

    const formatCurrency = (amount) =>
        new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP',
        }).format(amount);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedMethod && onPayNow) {
            onPayNow({
                paymentMethod: selectedMethod,
                totalAmount: summary.totalAmount,
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 items-start mt-6 bg-on-secondary border border-outline-variant/60 rounded-2xl p-6 md:p-8 shadow-sm"
        >
            {/* Header */}
            <div className="text-center sm:text-left border-b border-outline-variant/30 pb-4">
                <h1 className="font-headline-xl text-2xl md:text-3xl font-bold text-on-surface mb-2">
                    Select Payment Method
                </h1>
                <p className="font-body-lg text-sm md:text-base text-on-surface-variant">
                    Choose how you want to pay for your booking.
                </p>
            </div>

            {/* Payment Methods Options */}
            <div className="flex flex-col gap-4">
                {PAYMENT_METHODS.map((method) => {
                    const IconComponent = method.icon;
                    const isSelected = selectedMethod === method.id;

                    return (
                        <label
                            key={method.id}
                            className={`bg-surface-container-lowest border rounded-xl p-6 flex items-center gap-4 cursor-pointer hover:bg-surface-container-low transition-colors duration-200 ${isSelected
                                ? 'border-primary ring-1 ring-primary bg-primary/5'
                                : 'border-outline-variant/30'
                                }`}
                        >
                            <input
                                type="radio"
                                name="payment_method"
                                value={method.id}
                                checked={isSelected}
                                onChange={() => setSelectedMethod(method.id)}
                                className="w-5 h-5 text-primary border-outline focus:ring-primary cursor-pointer"
                            />
                            <div className="flex-1 flex items-center justify-between">
                                <span className="font-headline-md text-base font-bold text-on-surface">
                                    {method.label}
                                </span>
                                <IconComponent className="h-5 w-5 text-outline shrink-0" />
                            </div>
                        </label>
                    );
                })}
            </div>

            {/* Booking Summary Card */}
            <div className="p-0 pt-6">
                <h3 className="font-headline-md text-xl font-bold mb-6 text-on-surface">
                    Booking Summary
                </h3>

                {/* Details Breakdown */}
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-on-surface-variant">
                        <span>Trail</span>
                        <span className="font-medium text-on-surface">{summary.trail}</span>
                    </div>
                    <div className="flex justify-between text-sm text-on-surface-variant">
                        <span>Date</span>
                        <span className="font-medium text-on-surface">{summary.date}</span>
                    </div>
                    <div className="flex justify-between text-sm text-on-surface-variant">
                        <span>Participants</span>
                        <span className="font-medium text-on-surface">
                            {summary.participants}
                        </span>
                    </div>
                </div>

                <div className="h-px bg-outline-variant/40 w-full mb-6" />

                {/* Fees Breakdown */}
                <div className="space-y-3 mb-6">
                    {summary.breakdown.map((fee, index) => (
                        <div
                            key={index}
                            className="flex justify-between text-sm text-on-surface-variant"
                        >
                            <span>{fee.label}</span>
                            <span>{formatCurrency(fee.amount)}</span>
                        </div>
                    ))}
                </div>

                <div className="h-px bg-outline-variant/40 w-full mb-6" />

                {/* Total Price */}
                <div className="flex justify-between items-center text-lg font-bold mb-8">
                    <span className="text-on-surface">Total Amount</span>
                    <span className="text-primary text-2xl font-black">
                        {formatCurrency(summary.totalAmount)}
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between">
                    <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={onBack}
                        className="w-full sm:w-auto"
                    >
                        Back to Checklist
                    </Button>

                    <Button
                        type="submit"
                        variant={selectedMethod ? 'default' : 'ghost'}
                        size="lg"
                        disabled={!selectedMethod}
                        className="w-full sm:w-auto gap-2 font-bold"
                    >
                        <HandCoins className="h-4 w-4" />
                        Pay Now
                    </Button>
                </div>
            </div>
        </form>
    );
}
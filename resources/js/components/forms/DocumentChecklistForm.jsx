import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { CHECKLIST_ITEMS } from '../../mockData';

export default function DocumentChecklistForm({ onBack, onNext }) {
    const [checkedItems, setCheckedItems] = useState({});
    const [finalAck, setFinalAck] = useState(false);

    const handleCheckboxChange = (id) => {
        setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Ensure all items in CHECKLIST_ITEMS are checked AND the final acknowledgment is true
    const isFormValid =
        CHECKLIST_ITEMS.every((item) => checkedItems[item.id]) && finalAck;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid && onNext) {
            onNext();
        }
    };

    return (
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-5 sm:p-8 shadow-sm">
            <header className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-on-surface mb-2">
                    Physical Document Checklist
                </h1>
                <p className="text-sm md:text-base text-on-surface-variant">
                    Ensure you have all required documents before proceeding.
                </p>
            </header>

            {/* Warning Banner */}
            <div className="bg-error-container text-on-error-container rounded-xl p-6 flex gap-4 items-start border border-error/20 mb-6">
                <AlertTriangle className="h-6 w-6 shrink-0 mt-0.5 text-error" />
                <div>
                    <h3 className="text-base font-bold mb-1">
                        Important Notice
                    </h3>
                    <p className="text-sm text-on-error-container/90">
                        No digital document upload required. Physical copies MUST be presented at the trail jump-off point.
                    </p>
                </div>
            </div>

            {/* Checklist Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    {CHECKLIST_ITEMS.map((item) => {
                        const isChecked = !!checkedItems[item.id];
                        return (
                            <label
                                key={item.id}
                                className={`bg-surface/80 border border-outline-variant/50 rounded-xl p-6 flex items-start gap-4 cursor-pointer hover:bg-surface-container-low/70 transition-colors duration-200 ${isChecked ? 'ring-1 ring-primary border-primary/40' : ''
                                    }`}
                            >
                                <div className="pt-1">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => handleCheckboxChange(item.id)}
                                        className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-base font-bold text-on-surface">
                                        {item.title}
                                    </span>
                                    <span className="text-sm text-on-surface-variant">
                                        {item.description}
                                    </span>
                                </div>
                            </label>
                        );
                    })}
                </div>

                {/* Final Acknowledgment */}
                <div className="mt-2 p-4 border border-primary/30 bg-primary-container/10 rounded-xl">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <div className="pt-0.5">
                            <input
                                type="checkbox"
                                checked={finalAck}
                                onChange={(e) => setFinalAck(e.target.checked)}
                                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
                            />
                        </div>
                        <span className="text-sm text-on-surface font-semibold">
                            I confirm that I will carry physical copies on hike day.
                        </span>
                    </label>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between mt-6">
                    <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={onBack}
                        className="w-full sm:w-auto"
                    >
                        Back to Details
                    </Button>

                    <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        disabled={!isFormValid}
                        className="w-full sm:w-auto"
                    >
                        Proceed to Online Payment
                    </Button>
                </div>
            </form>
        </div>
    );
}

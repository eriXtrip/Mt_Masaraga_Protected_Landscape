import React, { useState } from 'react';
import { User, PhoneCall, Stethoscope, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HEALTH_QUESTIONS = [
    {
        id: 'health1',
        question:
            'Do you have a history of asthma, hypertension, heart disease, or irregular heartbeats?',
    },
    {
        id: 'health2',
        question:
            'Can you comfortably walk or jog for 1 hour without experiencing severe shortness of breath or dizziness?',
    },
    {
        id: 'health3',
        question:
            'Do you have any chronic joint, knee, or back injuries that limit your balance or ability to climb steep slopes?',
    },
    {
        id: 'health4',
        question:
            'Do you have hemophilia, a bleeding disorder, or take blood thinners that might cause prolonged bleeding from limatik bites?',
    },
    {
        id: 'health5',
        question:
            'Do you carry an EpiPen, inhaler, or specific antihistamines for known severe allergic reactions (Anaphylaxis)?',
    },
    {
        id: 'health6',
        question:
            'Have you undergone any major surgical procedures or suffered a debilitating illness within the past six (6) months?',
    },
];

export default function HikerDetailsForm({ onBack, onNext }) {
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        address: '',
        emergencyName: '',
        emergencyRelationship: '',
        emergencyContact: '',
        healthAnswers: {
            health1: '',
            health2: '',
            health3: '',
            health4: '',
            health5: '',
            health6: '',
        },
        agreeWaiver: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleHealthChange = (questionId, value) => {
        setFormData((prev) => ({
            ...prev,
            healthAnswers: {
                ...prev.healthAnswers,
                [questionId]: value,
            },
        }));
    };

    // Validation check: ensures all required text fields are non-empty, all health questions answered, and waiver checked
    const isFormValid =
        formData.fullName.trim() !== '' &&
        formData.dateOfBirth.trim() !== '' &&
        formData.address.trim() !== '' &&
        formData.emergencyName.trim() !== '' &&
        formData.emergencyRelationship.trim() !== '' &&
        formData.emergencyContact.trim() !== '' &&
        HEALTH_QUESTIONS.every(
            (q) => formData.healthAnswers[q.id] && formData.healthAnswers[q.id] !== ''
        ) &&
        formData.agreeWaiver;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid && onNext) {
            onNext(formData);
        }
    };

    const maxDate = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 space-y-1 gap-3 items-start mt-6 bg-on-secondary border border-outline-variant/60 rounded-2xl p-6 md:p-8 shadow-sm">
            {/* Hiker Profile Card */}
            <div className="border-none rounded-xl p-6 md:p-8 shadow-none">
                <h2 className="font-headline-md text-on-surface mb-6 flex items-center gap-3 text-xl font-bold">
                    <User className="h-6 w-6 text-primary" />
                    Hiker Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="font-label-md text-sm font-medium text-on-surface block">
                            Full Name
                        </label>
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                            placeholder="John Doe"
                            type="text"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="font-label-md text-sm font-medium text-on-surface block">
                            Date of Birth
                        </label>
                        <input
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            max={maxDate}
                            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                            type="date"
                            required
                        />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="font-label-md text-sm font-medium text-on-surface block">
                            Address
                        </label>
                        <input
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                            placeholder="123 Trailhead St, City, Country"
                            type="text"
                            required
                        />
                    </div>
                </div>
            </div>

            {/* Emergency Contact */}
            <div className="border-none rounded-xl p-6 md:p-8 shadow-none">
                <h2 className="font-headline-md text-on-surface mb-6 flex items-center gap-3 text-xl font-bold">
                    <PhoneCall className="h-6 w-6 text-primary" />
                    Emergency Contact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="font-label-md text-sm font-medium text-on-surface block">
                            Full Name
                        </label>
                        <input
                            name="emergencyName"
                            value={formData.emergencyName}
                            onChange={handleInputChange}
                            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                            placeholder="Jane Doe"
                            type="text"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="font-label-md text-sm font-medium text-on-surface block">
                            Relationship
                        </label>
                        <input
                            name="emergencyRelationship"
                            value={formData.emergencyRelationship}
                            onChange={handleInputChange}
                            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                            placeholder="Spouse"
                            type="text"
                            required
                        />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="font-label-md text-sm font-medium text-on-surface block">
                            Contact Number
                        </label>
                        <input
                            name="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={handleInputChange}
                            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                            placeholder="+63 900 000 0000"
                            type="tel"
                            required
                        />
                    </div>
                </div>
            </div>

            {/* Health Declaration */}
            <div className="border-none rounded-xl p-6 md:p-8 shadow-none">
                <h2 className="font-headline-md text-on-surface mb-6 flex items-center gap-3 text-xl font-bold">
                    <Stethoscope className="h-6 w-6 text-primary" />
                    Health Declaration
                </h2>
                <div className="space-y-6">
                    {HEALTH_QUESTIONS.map((item) => {
                        const currentAnswer = formData.healthAnswers[item.id];
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant/20 pb-4"
                            >
                                <p className="font-body-md text-on-surface md:w-2/3">
                                    {item.question}
                                </p>
                                <div className="flex gap-4">
                                    {['yes', 'no'].map((option) => (
                                        <label key={option} className="cursor-pointer relative">
                                            <input
                                                type="radio"
                                                name={item.id}
                                                value={option}
                                                checked={currentAnswer === option}
                                                onChange={() => handleHealthChange(item.id, option)}
                                                className="sr-only"
                                            />
                                            <div
                                                className={`px-6 py-2 border rounded-full font-label-md text-sm font-medium capitalize transition-colors ${currentAnswer === option
                                                    ? 'bg-primary text-on-secondary hover:text-on-primary border-primary'
                                                    : 'border-outline-variant hover:bg-surface-container text-on-surface'
                                                    }`}
                                            >
                                                {option}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Liability Waiver */}
            <div className="border-none rounded-xl p-6 md:p-8 shadow-none">
                <h2 className="font-headline-md text-on-surface mb-6 flex items-center gap-3 text-xl font-bold">
                    <Scale className="h-6 w-6 text-primary" />
                    Liability Waiver
                </h2>
                <div className="h-48 overflow-y-auto p-4 rounded-lg border border-outline-variant/20 mb-6 font-body-sm text-sm text-on-surface-variant space-y-2">
                    <p>
                        <strong>Assumption of Risk:</strong> I understand that hiking Mount
                        Masaraga involves inherent risks, including but not limited to
                        physical exertion, unpredictable weather, and encounters with
                        wildlife.
                    </p>
                    <p>
                        <strong>Waiver of Liability:</strong> I hereby release the Mount
                        Masaraga Protected Landscape management, its employees, and
                        affiliates from any liability for injury, loss, or damage incurred
                        during the hike.
                    </p>
                    <p>
                        <strong>Compliance:</strong> I agree to follow all guidelines, stay
                        on designated trails, and adhere to the instructions of the
                        assigned guides.
                    </p>
                    <p>
                        <strong>Environmental Responsibility:</strong> I commit to the Leave
                        No Trace principles and understand that violations may result in
                        fines or bans.
                    </p>
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        name="agreeWaiver"
                        checked={formData.agreeWaiver}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
                    />
                    <span className="font-body-md text-sm text-on-surface">
                        I have read, understood, and agree to the terms and conditions
                        outlined in the Liability Waiver.
                    </span>
                </label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-4 pt-8 border-none shadow-none">
                <Button
                    type="button"
                    onClick={onBack}
                    variant="outline"
                    size="lg"
                >
                    <span>Back to Dates</span>
                </Button>
                <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    disabled={!isFormValid}
                >
                    <span>Proceed to Document Checklist</span>
                </Button>
            </div>
        </form>
    );
}
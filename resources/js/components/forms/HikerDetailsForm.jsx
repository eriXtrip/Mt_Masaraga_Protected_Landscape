import React, { useState, useEffect } from 'react';
import { User, PhoneCall, Stethoscope, Scale, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { HEALTH_QUESTIONS } from '../../mockData';

export default function HikerDetailsForm({ participantCount = 1, onBack, onNext }) {
    const getInitialState = () => Array.from({ length: participantCount }, () => ({
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
    }));

    const [formDataArray, setFormDataArray] = useState(getInitialState());
    // Single active hiker state (only 1 open at a time)
    const [openHikerIndex, setOpenHikerIndex] = useState(0);

    const toggleHiker = (index) => {
        setOpenHikerIndex((prev) => (prev === index ? null : index));
    };

    // Sync state if participantCount changes unexpectedly
    useEffect(() => {
        setFormDataArray((prev) => {
            if (prev.length === participantCount) return prev;
            const newArray = [...prev];
            if (participantCount > prev.length) {
                // Add new empty forms
                for (let i = prev.length; i < participantCount; i++) {
                    newArray.push({
                        fullName: '',
                        dateOfBirth: '',
                        address: '',
                        emergencyName: '',
                        emergencyRelationship: '',
                        emergencyContact: '',
                        healthAnswers: {
                            health1: '', health2: '', health3: '', health4: '', health5: '', health6: '',
                        },
                        agreeWaiver: false,
                    });
                }
            } else {
                // Truncate
                newArray.length = participantCount;
            }
            return newArray;
        });
    }, [participantCount]);

    const handleInputChange = (index, e) => {
        const { name, value, type, checked } = e.target;
        setFormDataArray((prev) => {
            const newArr = [...prev];
            if (type === 'checkbox') {
                newArr[index] = { ...newArr[index], [name]: checked };
            } else {
                newArr[index] = { ...newArr[index], [name]: value };
            }
            return newArr;
        });
    };

    const handleHealthChange = (index, questionId, value) => {
        setFormDataArray((prev) => {
            const newArr = [...prev];
            newArr[index] = {
                ...newArr[index],
                healthAnswers: {
                    ...newArr[index].healthAnswers,
                    [questionId]: value,
                },
            };
            return newArr;
        });
    };

    // Validation check: ensures all required text fields are non-empty, all health questions answered, and waiver checked for ALL hikers
    const isFormValid = formDataArray.every((formData) => {
        return (
            formData.fullName.trim() !== '' &&
            formData.dateOfBirth.trim() !== '' &&
            formData.address.trim() !== '' &&
            formData.emergencyName.trim() !== '' &&
            formData.emergencyRelationship.trim() !== '' &&
            formData.emergencyContact.trim() !== '' &&
            HEALTH_QUESTIONS.every(
                (q) => formData.healthAnswers[q.id] && formData.healthAnswers[q.id] !== ''
            ) &&
            formData.agreeWaiver
        );
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid && onNext) {
            onNext(formDataArray);
        }
    };

    const maxDate = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-6">
            {formDataArray.map((formData, index) => {
                const isOpen = openHikerIndex === index;

                return (
                    <div
                        key={index}
                        className="bg-on-secondary border border-outline-variant/60 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-200"
                    >
                        {/* Accordion Header */}
                        <div
                            onClick={() => toggleHiker(index)}
                            className="flex items-center justify-between cursor-pointer select-none"
                        >
                            <div className="flex items-center gap-3">
                                <h1 className="font-headline-xl text-2xl md:text-3xl font-bold text-on-surface">
                                    Hiker {index + 1} Details
                                </h1>
                                {formData.fullName.trim() !== '' && (
                                    <span className="text-sm font-medium text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">
                                        {formData.fullName}
                                    </span>
                                )}
                            </div>
                            <ChevronDown
                                className={`h-6 w-6 text-on-surface-variant transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''
                                    }`}
                            />
                        </div>

                        {/* Accordion Content */}
                        {isOpen && (
                            <div className="space-y-6 mt-6 pt-6 border-t border-outline-variant/30">
                                {/* Hiker Profile Card */}
                                <div className="border-none rounded-xl p-0 shadow-none">
                                    <h2 className="font-headline-md text-on-surface mb-6 flex items-center gap-3 text-xl font-bold">
                                        <User className="h-6 w-6 text-primary" />
                                        Hiker Information
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="font-label-md text-sm font-medium text-on-surface block">
                                                Full Name
                                            </label>
                                            <Input
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={(e) => handleInputChange(index, e)}
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
                                            <Input
                                                name="dateOfBirth"
                                                value={formData.dateOfBirth}
                                                onChange={(e) => handleInputChange(index, e)}
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
                                            <Input
                                                name="address"
                                                value={formData.address}
                                                onChange={(e) => handleInputChange(index, e)}
                                                className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                                                placeholder="123 Trailhead St, City, Country"
                                                type="text"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Emergency Contact */}
                                <div className="border-none rounded-xl p-0 shadow-none pt-6">
                                    <h2 className="font-headline-md text-on-surface mb-6 flex items-center gap-3 text-xl font-bold">
                                        <PhoneCall className="h-6 w-6 text-primary" />
                                        Emergency Contact
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="font-label-md text-sm font-medium text-on-surface block">
                                                Full Name
                                            </label>
                                            <Input
                                                name="emergencyName"
                                                value={formData.emergencyName}
                                                onChange={(e) => handleInputChange(index, e)}
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
                                            <Input
                                                name="emergencyRelationship"
                                                value={formData.emergencyRelationship}
                                                onChange={(e) => handleInputChange(index, e)}
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
                                            <Input
                                                name="emergencyContact"
                                                value={formData.emergencyContact}
                                                onChange={(e) => handleInputChange(index, e)}
                                                className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                                                placeholder="+63 900 000 0000"
                                                type="tel"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Health Declaration */}
                                <div className="border-none rounded-xl p-0 shadow-none pt-6">
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
                                                                    name={`hiker_${index}_${item.id}`}
                                                                    value={option}
                                                                    checked={currentAnswer === option}
                                                                    onChange={() => handleHealthChange(index, item.id, option)}
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
                                <div className="border-none rounded-xl p-0 shadow-none pt-6">
                                    <h2 className="font-headline-md text-on-surface mb-6 flex items-center gap-3 text-xl font-bold">
                                        <Scale className="h-6 w-6 text-primary" />
                                        Liability Waiver
                                    </h2>
                                    <div className="h-48 overflow-y-auto p-4 rounded-lg border border-outline-variant/20 mb-6 font-body-sm text-sm text-on-surface-variant space-y-2 bg-surface-container-lowest">
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
                                            onChange={(e) => handleInputChange(index, e)}
                                            required
                                            className="mt-1 w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
                                        />
                                        <span className="font-body-md text-sm text-on-surface">
                                            I have read, understood, and agree to the terms and conditions
                                            outlined in the Liability Waiver.
                                        </span>
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}

            {/* Action Buttons */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-4 pt-4 border-none shadow-none">
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

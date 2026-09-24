import { useEffect, useRef, useState } from 'react';
import { Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useDrawerTransition } from '@/hooks/useDrawerTransition';
import { toast } from '@/components/ui/toast';

const GENERAL_CONFIG = {
    eyebrow: 'General settings',
    title: 'Edit site identity',
    description: 'Update the public site name and office information shown to visitors.',
    fields: [
        { name: 'siteName', label: 'Site name', type: 'text', required: true },
        { name: 'officeName', label: 'Office name', type: 'text', required: true },
        { name: 'officeAddress', label: 'Office address', type: 'text', required: true },
        { name: 'officeHours', label: 'Office hours', type: 'text', required: true },
    ],
};

const CONTACT_CONFIG = {
    eyebrow: 'Public contact',
    title: 'Edit contact channels',
    description: 'Keep visitor-facing phone, email, emergency, and map details in one place.',
    fields: [
        { name: 'supportEmail', label: 'Support email', type: 'email', required: true },
        { name: 'officePhone', label: 'Office phone', type: 'text', required: true },
        { name: 'emergencyPhone', label: 'Emergency phone', type: 'text', required: true },
        { name: 'emergencyAvailability', label: 'Emergency availability', type: 'text', required: true },
        { name: 'mapUrl', label: 'Map destination URL', type: 'url', required: true },
        { name: 'latitude', label: 'Map latitude', type: 'number', step: 'any', min: -90, max: 90, required: true },
        { name: 'longitude', label: 'Map longitude', type: 'number', step: 'any', min: -180, max: 180, required: true },
        { name: 'facebook', label: 'Facebook URL', type: 'url' },
        { name: 'instagram', label: 'Instagram URL', type: 'url' },
        { name: 'x', label: 'X URL', type: 'url' },
    ],
};

const BOOKING_CONFIG = {
    eyebrow: 'Booking defaults',
    title: 'Edit booking defaults',
    description: 'Set the default amounts and capacity guidance used for new schedules.',
    fields: [
        { name: 'baseFeePerPax', label: 'Base fee per hiker', type: 'number', min: 0, required: true },
        { name: 'environmentalFee', label: 'Environmental fee', type: 'number', min: 0, required: true },
        { name: 'processingFee', label: 'Processing fee', type: 'number', min: 0, required: true },
        { name: 'guideFeePerGroup', label: 'Guide fee per group', type: 'number', min: 0, required: true },
        { name: 'defaultDailyCapacity', label: 'Default daily capacity', type: 'number', min: 1, required: true },
        { name: 'guideRatio', label: 'Hikers per guide', type: 'number', min: 1, required: true },
        { name: 'maxGroupSize', label: 'Maximum group size', type: 'number', min: 1, required: true },
    ],
};

const MAINTENANCE_CONFIG = {
    eyebrow: 'Utility page',
    title: 'Edit maintenance notice',
    description: 'Control the public maintenance page without changing its route or animation.',
    fields: [
        { name: 'enabled', label: 'Maintenance mode', type: 'checkbox' },
        { name: 'title', label: 'Page title', type: 'text', required: true },
        { name: 'message', label: 'Notice message', type: 'textarea', required: true },
        { name: 'estimatedCompletion', label: 'Estimated completion', type: 'text', required: true },
    ],
};

const LEGAL_CONFIG = {
    eyebrow: 'Legal page',
    title: 'Edit legal publication settings',
    description: 'Update the page heading, publication date, and footer visibility. Policy text stays in its public page component.',
    fields: [
        { name: 'enabled', label: 'Page published', type: 'checkbox' },
        { name: 'showInFooter', label: 'Show in footer', type: 'checkbox' },
        { name: 'title', label: 'Page title', type: 'text', required: true },
        { name: 'subtitle', label: 'Page subtitle', type: 'text' },
        { name: 'lastUpdated', label: 'Last updated', type: 'date', required: true },
    ],
};

const UTILITY_CONFIGS = {
    notFound: {
        eyebrow: 'Utility page',
        title: 'Edit page not found message',
        description: 'Keep the unavailable-route message useful for visitors who follow an old link.',
        fields: [
            { name: 'enabled', label: 'Utility page enabled', type: 'checkbox' },
            { name: 'title', label: 'Page title', type: 'text', required: true },
            { name: 'message', label: 'Page message', type: 'textarea', required: true },
        ],
    },
    accessDenied: {
        eyebrow: 'Utility page',
        title: 'Edit access denied message',
        description: 'Explain the clearance requirement and keep the next action clear.',
        fields: [
            { name: 'enabled', label: 'Utility page enabled', type: 'checkbox' },
            { name: 'title', label: 'Page title', type: 'text', required: true },
            { name: 'message', label: 'Page message', type: 'textarea', required: true },
        ],
    },
    bookingSuspended: {
        eyebrow: 'Utility page',
        title: 'Edit booking suspension',
        description: 'Pause new reservations without changing the booking page route or existing hiker tools.',
        fields: [
            { name: 'enabled', label: 'Suspend new bookings', type: 'checkbox' },
            { name: 'title', label: 'Page title', type: 'text', required: true },
            { name: 'message', label: 'Suspension message', type: 'textarea', required: true },
            { name: 'reopenNote', label: 'Reopening guidance', type: 'text', required: true },
        ],
    },
};

function getFormConfig(section, itemKey) {
    if (section === 'legal') return LEGAL_CONFIG;
    if (section === 'utility') return UTILITY_CONFIGS[itemKey] || UTILITY_CONFIGS.notFound;
    if (section === 'general') return GENERAL_CONFIG;
    if (section === 'contact') return CONTACT_CONFIG;
    if (section === 'booking') return BOOKING_CONFIG;
    return MAINTENANCE_CONFIG;
}

function createInitialForm(value, fields) {
    return fields.reduce((form, field) => {
        const nextValue = value?.[field.name];
        if (field.type === 'checkbox') {
            form[field.name] = Boolean(nextValue);
        } else if (field.type === 'number') {
            form[field.name] = nextValue === '' || nextValue === null || nextValue === undefined ? '' : Number(nextValue);
        } else {
            form[field.name] = nextValue ?? '';
        }
        return form;
    }, {});
}

function Field({ field, value, onChange }) {
    const id = `setting-${field.name}`;

    if (field.type === 'checkbox') {
        return (
            <label htmlFor={id} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-outline-variant/40 bg-surface px-3.5 py-2.5 transition-colors hover:border-primary/60">
                <input
                    id={id}
                    type="checkbox"
                    checked={value}
                    onChange={onChange}
                    className="h-5 w-5 shrink-0 accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                />
                <span className="text-sm font-medium text-on-surface">{field.label}</span>
            </label>
        );
    }

    if (field.type === 'textarea') {
        return (
            <div>
                <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                    {field.label}
                </label>
                <textarea
                    id={id}
                    rows={5}
                    value={value}
                    onChange={onChange}
                    required={field.required}
                    className="w-full resize-y rounded-lg border border-outline-variant bg-surface px-3.5 py-2.5 text-sm font-medium text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
            </div>
        );
    }

    return (
        <div>
            <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                {field.label}
            </label>
            <Input
                id={id}
                type={field.type}
                value={value}
                onChange={onChange}
                required={field.required}
                min={field.min}
                max={field.max}
                step={field.step}
                className="h-11"
            />
        </div>
    );
}

export default function SettingsForm({ section, itemKey, value, onSave, onClose }) {
    const config = getFormConfig(section, itemKey);
    const closeButtonRef = useRef(null);
    const dialogRef = useRef(null);
    const { closing, requestClose, handleAnimationEnd } = useDrawerTransition(onClose);
    const [form, setForm] = useState(() => createInitialForm(value, config.fields));
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                requestClose();
                return;
            }

            if (event.key !== 'Tab') return;

            const focusableElements = dialogRef.current?.querySelectorAll(
                'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), a[href]'
            );
            if (!focusableElements?.length) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        };

        window.addEventListener('keydown', onKeyDown);
        closeButtonRef.current?.focus();
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [requestClose]);

    const setField = (field) => (event) => {
        const nextValue = field.type === 'checkbox'
            ? event.target.checked
            : field.type === 'number'
                ? event.target.value === '' ? '' : Number(event.target.value)
                : event.target.value;
        setForm((current) => ({ ...current, [field.name]: nextValue }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const missingField = config.fields.find((field) => field.required && (form[field.name] === '' || form[field.name] === null || form[field.name] === undefined));
        if (missingField) {
            toast.error(`${missingField.label} is required.`);
            return;
        }

        const invalidNumber = config.fields.find((field) => field.type === 'number' && form[field.name] !== '' && (
            !Number.isFinite(Number(form[field.name]))
            || Number(form[field.name]) < (field.min ?? 0)
            || (field.max !== undefined && Number(form[field.name]) > field.max)
        ));
        if (invalidNumber) {
            toast.error(`${invalidNumber.label} must be a valid number.`);
            return;
        }

        const invalidEmail = config.fields.find((field) => field.type === 'email' && form[field.name] && !/^\S+@\S+\.\S+$/.test(form[field.name]));
        if (invalidEmail) {
            toast.error(`${invalidEmail.label} must be a valid email address.`);
            return;
        }

        const invalidUrl = config.fields.find((field) => field.type === 'url' && form[field.name] && !/^https?:\/\//i.test(form[field.name]));
        if (invalidUrl) {
            toast.error(`${invalidUrl.label} must start with http:// or https://.`);
            return;
        }

        setIsSubmitting(true);
        try {
            await onSave(form);
            requestClose();
        } catch (error) {
            toast.error('Settings could not be saved.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-40">
            <div
                className={`absolute inset-0 bg-inverse-surface/60 ${closing ? 'animate-out fade-out animation-duration-300' : 'animate-in fade-in animation-duration-300'} motion-reduce:animate-none`}
                onClick={requestClose}
                aria-hidden="true"
            />
            <aside
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="settings-form-title"
                onAnimationEnd={closing ? handleAnimationEnd : undefined}
                className={`absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col bg-surface-container-lowest shadow-xl ${closing ? 'animate-out slide-out-to-right animation-duration-300' : 'animate-in slide-in-from-right animation-duration-300'} motion-reduce:animate-none`}
            >
                <div className="flex items-start justify-between gap-4 border-b border-outline-variant/20 px-5 py-4">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-primary">{config.eyebrow}</p>
                        <h2 id="settings-form-title" className="mt-1 text-lg font-bold text-on-surface">{config.title}</h2>
                        <p className="mt-1 max-w-lg text-xs leading-relaxed text-on-surface-variant">{config.description}</p>
                    </div>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={requestClose}
                        aria-label="Close settings editor"
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-1.5 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
                    {config.fields.map((field) => (
                        <Field key={field.name} field={field} value={form[field.name]} onChange={setField(field)} />
                    ))}
                </form>

                <div className="flex items-center justify-end gap-3 border-t border-outline-variant/20 px-5 py-4">
                    <Button type="button" variant="ghost" className="h-11" onClick={requestClose} disabled={isSubmitting}>
                        Cancel
                    </Button>
                    <Button type="submit" className="h-11 gap-2" disabled={isSubmitting}>
                        <Save className="h-4 w-4" aria-hidden="true" />
                        {isSubmitting ? 'Saving...' : 'Save settings'}
                    </Button>
                </div>
            </aside>
        </div>
    );
}

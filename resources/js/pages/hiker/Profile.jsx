import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    UserRound,
    ShieldCheck,
    CheckCircle2,
    BadgeAlert,
    Ticket,
    ScrollText,
    HeartPulse,
} from 'lucide-react';
import { useHikerStore, updateProfile } from '../../state/hikerStore';

const getInitials = (name) => {
    if (!name) return 'U';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

function Field({ label, hint, children }) {
    return (
        <div>
            <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">
                {label}
            </label>
            {children}
            {hint && <p className="text-[11px] text-on-surface-variant mt-1.5">{hint}</p>}
        </div>
    );
}

function SectionCard({ icon: Icon, title, subtitle, children, footer }) {
    return (
        <section className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-6 pt-5 pb-4 border-b border-outline-variant/20">
                <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                </span>
                <div>
                    <h2 className="text-base font-bold text-on-surface">{title}</h2>
                    {subtitle && <p className="text-xs text-on-surface-variant mt-0.5">{subtitle}</p>}
                </div>
            </div>
            <div className="px-6 py-5 space-y-5">{children}</div>
            {footer}
        </section>
    );
}

export default function Profile() {
    const navigate = useNavigate();
    const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
    const { profile, transactions } = useHikerStore();

    const activePassCount = transactions
        .flatMap((txn) => txn.passesData)
        .filter((pass) => pass.status === 'Valid').length;

    const [form, setForm] = useState({
        name: profile.name,
        email: profile.email,
        mobile: profile.mobile,
        emergencyName: profile.emergencyContact.name,
        emergencyRelation: profile.emergencyContact.relation,
        emergencyMobile: profile.emergencyContact.mobile,
    });

    const [password, setPassword] = useState({ newPassword: '', confirmPassword: '' });
    const [saveStatus, setSaveStatus] = useState(null);
    const [passwordStatus, setPasswordStatus] = useState(null);

    const setField = (key) => (event) =>
        setForm((current) => ({ ...current, [key]: event.target.value }));

    const handleSave = (event) => {
        event.preventDefault();
        updateProfile({
            name: form.name.trim(),
            email: form.email.trim(),
            mobile: form.mobile.trim(),
            emergencyContact: {
                name: form.emergencyName.trim(),
                relation: form.emergencyRelation.trim(),
                mobile: form.emergencyMobile.trim(),
            },
        });
        setSaveStatus('saved');
        window.setTimeout(() => setSaveStatus(null), 4000);
    };

    const handlePasswordSubmit = (event) => {
        event.preventDefault();
        if (password.newPassword.length < 8) {
            setPasswordStatus({ type: 'error', text: 'New password must be at least 8 characters.' });
            return;
        }
        if (password.newPassword !== password.confirmPassword) {
            setPasswordStatus({ type: 'error', text: 'The new password and confirmation do not match.' });
            return;
        }
        setPasswordStatus({ type: 'success', text: 'Your password has been updated.' });
        setPassword({ newPassword: '', confirmPassword: '' });
        window.setTimeout(() => setPasswordStatus(null), 4000);
    };

    return (
        <div ref={sectionRef} className="min-h-screen bg-surface font-sans">
            <div className={`max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                <header className="mb-8">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary">My Profile</p>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mt-2">Account Settings</h1>
                    <p className="text-sm md:text-base text-on-surface-variant mt-2 max-w-2xl">
                        Keep your personal and emergency contact details up to date. These stay with your bookings.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    <aside className="lg:sticky lg:top-20 space-y-4">
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 text-center shadow-sm">
                            <span className="h-16 w-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                <span className="text-2xl font-bold">{getInitials(form.name)}</span>
                            </span>
                            <h2 className="text-lg font-bold text-on-surface mt-4">{form.name || 'Hiker'}</h2>
                            <p className="text-sm text-on-surface-variant break-all">{form.email || 'No email set'}</p>
                            <span className="inline-block mt-3 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                Hiker
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => navigate('/hiker/transactions')}
                                className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4 text-left shadow-xs transition-all hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none cursor-pointer"
                            >
                                <span className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                    <ScrollText className="h-4 w-4" />
                                </span>
                                <p className="text-xl font-bold text-on-surface mt-3">{transactions.length}</p>
                                <p className="text-xs text-on-surface-variant">Bookings</p>
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/hiker/passes')}
                                className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4 text-left shadow-xs transition-all hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none cursor-pointer"
                            >
                                <span className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                    <Ticket className="h-4 w-4" />
                                </span>
                                <p className="text-xl font-bold text-on-surface mt-3">{activePassCount}</p>
                                <p className="text-xs text-on-surface-variant">Active passes</p>
                            </button>
                        </div>
                    </aside>

                    <div className="lg:col-span-2 space-y-6">
                        <SectionCard
                            icon={UserRound}
                            title="Personal Information"
                            subtitle="Used to issue your digital passes and receipts."
                        >
                            {saveStatus === 'saved' && (
                                <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-700 text-sm rounded-xl px-4 py-3">
                                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                                    Your details have been saved.
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Field label="Full Name">
                                    <Input
                                        value={form.name}
                                        onChange={setField('name')}
                                        placeholder="Your full name"
                                        required
                                    />
                                </Field>
                                <Field label="Email Address">
                                    <Input
                                        type="email"
                                        value={form.email}
                                        onChange={setField('email')}
                                        placeholder="you@example.com"
                                        required
                                    />
                                </Field>
                            </div>

                            <Field label="Mobile Number" hint="Enter with your country code, e.g. +63.">
                                <Input
                                    type="tel"
                                    value={form.mobile}
                                    onChange={setField('mobile')}
                                    placeholder="+63 917 000 0000"
                                />
                            </Field>

                            <div className="flex justify-end pt-2">
                                <Button type="submit" variant="default" className="gap-2 cursor-pointer">
                                    Save Changes
                                </Button>
                            </div>
                        </SectionCard>

                        <SectionCard
                            icon={HeartPulse}
                            title="Emergency Contact"
                            subtitle="Who the trailhead station should reach in case of an incident."
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Field label="Full Name">
                                    <Input
                                        value={form.emergencyName}
                                        onChange={setField('emergencyName')}
                                        placeholder="Emergency contact name"
                                    />
                                </Field>
                                <Field label="Relation">
                                    <Input
                                        value={form.emergencyRelation}
                                        onChange={setField('emergencyRelation')}
                                        placeholder="e.g. Parent, Sibling"
                                    />
                                </Field>
                                <Field label="Mobile Number">
                                    <Input
                                        type="tel"
                                        value={form.emergencyMobile}
                                        onChange={setField('emergencyMobile')}
                                        placeholder="+63 917 000 0000"
                                    />
                                </Field>
                            </div>

                            <div className="flex justify-end pt-2">
                                <Button type="submit" variant="default" className="gap-2 cursor-pointer" onClick={handleSave}>
                                    Save Changes
                                </Button>
                            </div>
                        </SectionCard>

                        <SectionCard
                            icon={ShieldCheck}
                            title="Change Password"
                            subtitle="Use at least 8 characters with a combination of letters and numbers."
                        >
                            {passwordStatus && (
                                <div className={`flex items-center gap-2 text-sm rounded-xl px-4 py-3 ${passwordStatus.type === 'success'
                                    ? 'bg-emerald-500/10 text-emerald-700'
                                    : 'bg-red-500/10 text-red-700'}`}
                                >
                                    {passwordStatus.type === 'success' ? (
                                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                                    ) : (
                                        <BadgeAlert className="h-4 w-4 shrink-0" />
                                    )}
                                    {passwordStatus.text}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Field label="New Password">
                                    <div className="relative">
                                        <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
                                        <Input
                                            type="password"
                                            value={password.newPassword}
                                            onChange={(e) => setPassword((c) => ({ ...c, newPassword: e.target.value }))}
                                            placeholder="Enter new password"
                                            className="pl-9"
                                        />
                                    </div>
                                </Field>
                                <Field label="Confirm New Password">
                                    <div className="relative">
                                        <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
                                        <Input
                                            type="password"
                                            value={password.confirmPassword}
                                            onChange={(e) => setPassword((c) => ({ ...c, confirmPassword: e.target.value }))}
                                            placeholder="Repeat new password"
                                            className="pl-9"
                                        />
                                    </div>
                                </Field>
                            </div>

                            <div className="flex justify-end pt-2">
                                <Button type="submit" variant="default" className="gap-2 cursor-pointer" onClick={handlePasswordSubmit}>
                                    Update Password
                                </Button>
                            </div>
                        </SectionCard>
                    </div>
                </div>
            </div>
        </div>
    );
}
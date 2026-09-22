import React, { useState, useEffect, useRef } from 'react';
import { X, Save, UserCog, CalendarCheck, Wallet, Mountain, UserCheck, Newspaper, Megaphone, BarChart3, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useDrawerTransition } from '@/hooks/useDrawerTransition';
import { toast } from '@/components/ui/toast';

const ROLE_OPTIONS = [
    { value: 1, label: 'Admin' },
    { value: 2, label: 'Staff / Guide' },
    { value: 3, label: 'Hiker' },
];

const STATUS_OPTIONS = ['Active', 'Inactive'];

const PERMISSION_OPTIONS = [
    { key: 'bookings', label: 'Bookings', icon: CalendarCheck },
    { key: 'trails', label: 'Trails', icon: Mountain },
    { key: 'guides', label: 'Guides', icon: UserCheck },
    { key: 'payments', label: 'Payments', icon: Wallet },
    { key: 'content', label: 'Content', icon: Newspaper },
    { key: 'announcements', label: 'Announcements', icon: Megaphone },
    { key: 'reports', label: 'Reports', icon: BarChart3 },
];

const EMPTY_FORM = {
    name: '',
    email: '',
    role: 3,
    status: 'Active',
    subtitle: '',
    permissions: [],
};

export default function UserForm({ user, onSave, onClose }) {
    const closeButtonRef = useRef(null);
    const { closing, requestClose, handleAnimationEnd } = useDrawerTransition(onClose);
    const isNew = !user?.id;
    const isEditing = !!user?.id;

    const [form, setForm] = useState(() => {
        if (user) {
            return {
                name: user.name || '',
                email: user.email || '',
                role: user.role ?? 3,
                status: user.status || 'Active',
                subtitle: user.subtitle || '',
                permissions: user.permissions || [],
            };
        }
        return EMPTY_FORM;
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') requestClose();
        };
        window.addEventListener('keydown', onKeyDown);
        closeButtonRef.current?.focus();
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [requestClose]);

    const setField = (key) => (e) => setForm((c) => ({ ...c, [key]: e.target.value }));

    const togglePermission = (key) => {
        setForm((c) => ({
            ...c,
            permissions: c.permissions.includes(key)
                ? c.permissions.filter((p) => p !== key)
                : [...c.permissions, key],
        }));
    };

    const handleSubmit = async (e, action = 'save') => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim()) {
            toast.add({ type: 'error', title: 'Validation error', description: 'Name and email are required.' });
            return;
        }
        setIsSubmitting(true);
        try {
            const data = {
                ...form,
                id: user?.id ?? `user_${Date.now()}`,
                subtitle: form.subtitle,
            };
            onSave(data, isEditing ? user.id : null);
            toast.add({ type: 'success', title: isEditing ? 'User updated' : 'User created', description: isEditing ? 'Changes have been saved.' : 'The user has been added.' });
            requestClose();
        } catch (error) {
            toast.add({ type: 'error', title: 'Error', description: 'Failed to save user.' });
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
                role="dialog"
                aria-modal="true"
                aria-label={isEditing ? 'Edit user' : 'Create user'}
                onAnimationEnd={closing ? handleAnimationEnd : undefined}
                className={`absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col bg-surface-container-lowest shadow-xl ${closing ? 'animate-out slide-out-to-right animation-duration-300' : 'animate-in slide-in-from-right animation-duration-300'} motion-reduce:animate-none`}
            >
                <div className="flex items-start justify-between gap-4 border-b border-outline-variant/20 px-5 py-4">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-primary">{isEditing ? 'Edit' : 'Create'} User</p>
                        <h2 className="mt-1 text-lg font-bold text-on-surface">{isEditing ? 'Update user' : 'New user'}</h2>
                    </div>
                    <button ref={closeButtonRef} type="button" onClick={requestClose} aria-label="Close" className="rounded-lg p-1.5 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={(e) => handleSubmit(e, 'save')} className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
                    <div>
                        <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Full Name</label>
                        <Input value={form.name} onChange={setField('name')} required placeholder="Full name" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Email</label>
                        <Input type="email" value={form.email} onChange={setField('email')} required placeholder="email@example.com" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Role</label>
                            <select value={form.role} onChange={(e) => setField('role')(e)} className="w-full rounded-lg border border-outline-variant bg-surface px-3.5 py-2.5 text-sm font-medium text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer">
                                {ROLE_OPTIONS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Status</label>
                            <select value={form.status} onChange={setField('status')} className="w-full rounded-lg border border-outline-variant bg-surface px-3.5 py-2.5 text-sm font-medium text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer">
                                {STATUS_OPTIONS.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Subtitle / Title</label>
                        <Input value={form.subtitle} onChange={setField('subtitle')} placeholder="e.g., Park Staff / Guide" />
                    </div>

                    {form.role === 2 && (
                        <div className="space-y-4 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5">
                            <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4 text-primary" />
                                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">Role-Based Access Control</p>
                            </div>
                            <p className="text-xs text-on-surface-variant">Select modules this Staff / Guide can access.</p>
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {PERMISSION_OPTIONS.map((perm) => (
                                    <button
                                        key={perm.key}
                                        type="button"
                                        onClick={() => togglePermission(perm.key)}
                                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors cursor-pointer ${form.permissions.includes(perm.key)
                                            ? 'border-primary bg-primary/5 text-primary'
                                            : 'border-outline-variant bg-surface text-on-surface-variant hover:border-primary/50 hover:text-on-surface'
                                            }`}
                                    >
                                        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${form.permissions.includes(perm.key)
                                            ? 'bg-primary border-primary text-white'
                                            : 'border-outline-variant bg-surface'
                                            }`}>
                                            {form.permissions.includes(perm.key) && (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            )}
                                        </div>
                                        <perm.icon className="h-4 w-4 shrink-0 opacity-60" />
                                        <span className="text-xs font-semibold">{perm.label}</span>
                                    </button>
                                ))}
                            </div>
                            <p className="text-[10px] text-on-surface-variant">
                                {form.permissions.length} module{form.permissions.length !== 1 ? 's' : ''} selected
                            </p>
                        </div>
                    )}
                </form>

                <div className="border-t border-outline-variant/20 px-5 py-4 flex items-center justify-end gap-3">
                    <Button type="button" variant="ghost" onClick={requestClose} className="cursor-pointer" disabled={isSubmitting}>Cancel</Button>
                    <Button type="submit" className="gap-2 cursor-pointer" disabled={isSubmitting}>
                        <Save className="h-4 w-4" />
                        {isEditing ? 'Save Changes' : 'Create User'}
                    </Button>
                </div>
            </aside>
        </div>
    );
}

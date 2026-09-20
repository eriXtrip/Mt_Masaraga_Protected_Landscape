import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SectionCard, Field } from './SectionCard';

export default function ChangePasswordForm({ password, onPasswordFieldChange, onSubmit }) {
    return (
        <SectionCard
            icon={ShieldCheck}
            title="Change Password"
            subtitle="Use at least 8 characters with a combination of letters and numbers."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="New Password">
                    <div className="relative">
                        <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
                        <Input
                            type="password"
                            value={password.newPassword}
                            onChange={(e) => onPasswordFieldChange('newPassword', e.target.value)}
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
                            onChange={(e) => onPasswordFieldChange('confirmPassword', e.target.value)}
                            placeholder="Repeat new password"
                            className="pl-9"
                        />
                    </div>
                </Field>
            </div>

            <div className="flex justify-end pt-2">
                <Button type="submit" variant="default" className="gap-2 cursor-pointer" onClick={onSubmit}>
                    Update Password
                </Button>
            </div>
        </SectionCard>
    );
}

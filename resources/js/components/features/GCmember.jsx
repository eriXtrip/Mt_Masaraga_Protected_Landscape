import React from 'react';
import { Users, ShieldCheck, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Mock data based on the DEFAULT_MESSAGES senders
import { DEFAULT_MEMBERS } from '../../mockData';

export default function GCMember({
    members = DEFAULT_MEMBERS,
    onClose,
}) {
    return (
        <div className="flex flex-col h-[70vh] min-h-[500px] md:h-[600px] w-full max-w-sm bg-surface-container-lowest border border-outline-variant/40 rounded-3xl shadow-xl overflow-hidden transition-all duration-300">

            {/* Header */}
            <header className="bg-surface-container-low border-b border-outline-variant/30 px-4 md:px-6 py-4 flex items-center justify-between shrink-0 z-10">
                <div className="flex items-center gap-2.5 md:gap-3">
                    <div className="p-2 md:p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                        <Users className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-base font-bold text-on-surface leading-tight">
                            Group Members
                        </h2>
                        <p className="text-xs font-medium text-on-surface-variant mt-0.5">
                            {members.length} Participants
                        </p>
                    </div>
                </div>

                {/* Close Button for Mobile/Drawer view */}
                {onClose && (
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="rounded-full text-on-surface-variant hover:text-on-surface lg:hidden cursor-pointer"
                        title="Close Members List"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                )}
            </header>

            {/* Member List */}
            <main className="flex-1 overflow-y-auto p-5 space-y-4 bg-surface-container-lowest/50">
                {members.map((member) => (
                    <div key={member.id} className="flex items-center justify-between gap-3 p-1">
                        <div className="flex items-center gap-3.5 min-w-0">

                            {/* Avatar with Online Status */}
                            <div className="relative shrink-0">
                                <div
                                    className={`w-10 h-10 rounded-full text-xs font-bold flex items-center justify-center border-2 ${member.isAdmin
                                        ? 'bg-emerald-600 text-white border-emerald-200'
                                        : 'bg-surface-variant text-on-surface-variant border-outline-variant/30'
                                        }`}
                                >
                                    {member.avatar}
                                </div>
                                {member.isOnline && (
                                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-emerald-500 border-2 border-surface-container-lowest ring-1 ring-black/5" />
                                )}
                            </div>

                            {/* Name and Role */}
                            <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-sm font-semibold text-on-surface truncate">
                                        {member.name}
                                    </span>
                                    {member.isAdmin && (
                                        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" title="Verified Staff" />
                                    )}
                                </div>
                                <p className="text-xs text-on-surface-variant truncate">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}

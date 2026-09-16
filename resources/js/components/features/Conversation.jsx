import React, { useRef, useEffect } from 'react';
import { Mountain, Users, MoreVertical } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SendGCMessage from "../../components/forms/SendGCMsgForm";

const DEFAULT_MESSAGES = [
    {
        id: 1,
        sender: 'Park Admin',
        avatar: 'PA',
        message: 'Welcome hikers! Please make sure to arrive at the jump-off point 30 minutes before your scheduled climb for the safety briefing.',
        timestamp: '08:00 AM',
        isAdmin: true,
    },
    {
        id: 2,
        sender: 'Jane Doe (Lead Hiker)',
        avatar: 'JD',
        message: 'Copy admin! Are we required to bring physical copies of our IDs?',
        timestamp: '08:15 AM',
        isAdmin: false,
        isSelf: true,
    },
    {
        id: 3,
        sender: 'Park Admin',
        avatar: 'PA',
        message: 'Yes, Jane. Please present your digital or printed E-Pass along with physical IDs at the station.',
        timestamp: '08:18 AM',
        isAdmin: true,
        isSelf: false,
    },
];

export default function Conversation({
    trailName = 'Masaraga Summit Trail',
    hikeDate = 'Oct 24, 2026',
    messages = DEFAULT_MESSAGES,
    onToggleMembers,
    onSendMessage,
}) {
    const scrollRef = useRef(null);

    // Auto-scroll to bottom whenever messages update
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="flex flex-col h-[600px] bg-surface-container-lowest border border-outline-variant/40 rounded-3xl shadow-xl overflow-hidden">

            {/* 1. Header: Trail Name & Hike Date */}
            <header className="bg-surface-container-low border-b border-outline-variant/30 px-6 py-4 flex items-center justify-between shrink-0 z-10">
                <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Mountain className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-base font-bold text-on-surface leading-tight">
                            {trailName}
                        </h1>
                        <p className="text-xs font-semibold text-primary flex items-center gap-1.5 mt-0.5">
                            <span>Climb Date: {hikeDate}</span>
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </p>
                    </div>
                </div>

                {/* Action Controls */}
                <div className="flex items-center gap-2">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={onToggleMembers}
                        className="rounded-full text-on-surface-variant hover:text-on-surface cursor-pointer"
                        title="Group Members"
                    >
                        <Users className="h-5 w-5" />
                    </Button>
                </div>
            </header>

            {/* 2. Messages Conversation Feed */}
            <main
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-surface-container-lowest/50"
            >
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex items-end gap-2.5 max-w-[85%] sm:max-w-[70%] ${msg.isSelf ? 'ml-auto flex-row-reverse' : ''
                            }`}
                    >
                        {/* User Avatar */}
                        <div
                            className={`w-8 h-8 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 ${msg.isSelf
                                ? 'bg-primary text-on-primary'
                                : msg.isAdmin
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-surface-variant text-on-surface-variant'
                                }`}
                        >
                            {msg.avatar}
                        </div>

                        {/* Bubble Content */}
                        <div className={`space-y-1 ${msg.isSelf ? 'text-right' : 'text-left'}`}>
                            <span className="text-[10px] font-medium text-outline block px-1">
                                {msg.sender} • {msg.timestamp}
                            </span>
                            <div
                                className={`p-3.5 rounded-2xl text-sm leading-relaxed ${msg.isSelf
                                    ? 'bg-primary text-on-primary rounded-br-xs'
                                    : msg.isAdmin
                                        ? 'bg-emerald-500/10 text-emerald-950 dark:text-emerald-200 border border-emerald-500/20 rounded-bl-xs'
                                        : 'bg-surface-container-high text-on-surface rounded-bl-xs'
                                    }`}
                            >
                                {msg.message}
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            {/* 3. Docked Input Form inside Container Footer */}
            <footer className="shrink-0 bg-surface-container-low border-t border-outline-variant/30 p-3 md:p-4">
                <SendGCMessage
                    trailName={trailName}
                    onSendMessage={onSendMessage}
                />
            </footer>

        </div>
    );
}
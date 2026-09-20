import React, { useRef, useEffect } from 'react';
import { Mountain, Users, MessageCircleQuestion } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SendGCMessage from "../../forms/SendGCMsgForm";
import { DEFAULT_MESSAGES, DEFAULT_MEMBERS } from '../../../mockData';

export default function Conversation({
    trailName = 'Masaraga Summit Trail',
    subtitle = 'Climb Date: Oct 24, 2026',
    messages = DEFAULT_MESSAGES,
    membersCount = DEFAULT_MEMBERS.length,
    onToggleMembers,
    onSendMessage,
}) {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="flex flex-col h-[70vh] min-h-125 md:h-150 bg-surface-container-lowest border border-outline-variant/40 rounded-3xl shadow-sm overflow-hidden">

            {/* 1. Header: Channel Name & Meta */}
            <header className="bg-surface-container-low border-b border-outline-variant/30 px-4 md:px-6 py-4 flex items-center justify-between shrink-0 z-10">
                <div className="flex items-center gap-2.5 md:gap-3.5">
                    <div className="h-10 w-10 md:h-11 md:w-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Mountain className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Group Chat</p>
                        <h1 className="text-base font-bold text-on-surface leading-tight mt-0.5">
                            {trailName}
                        </h1>
                        <p className="text-xs font-medium text-on-surface-variant flex items-center gap-1.5 mt-0.5">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* Action Controls */}
                <div className="flex items-center gap-2">
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={onToggleMembers}
                        className="rounded-full gap-1.5 text-on-surface-variant hover:text-on-surface cursor-pointer"
                        title="Group Members"
                    >
                        <Users className="h-4 w-4" />
                        <span className="hidden sm:inline text-xs font-semibold">Members</span>
                        <span className="h-5 min-w-5 px-1 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold">
                            {membersCount}
                        </span>
                    </Button>
                </div>
            </header>

            {/* 2. Messages Conversation Feed */}
            <main
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-surface-container-lowest/50"
            >
                {messages.length > 0 ? (
                    messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex items-end gap-2.5 max-w-[85%] sm:max-w-[70%] ${msg.isSelf ? 'ml-auto flex-row-reverse' : ''
                                }`}
                        >
                            {/* User Avatar */}
                            <div
                                className={`h-8 w-8 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 ${msg.isSelf
                                    ? 'bg-primary text-on-primary'
                                    : msg.isAdmin
                                        ? 'bg-tertiary text-white'
                                        : 'bg-surface-variant text-on-surface-variant'
                                    }`}
                            >
                                {msg.avatar}
                            </div>

                            {/* Bubble Content */}
                            <div className={`space-y-1 ${msg.isSelf ? 'text-right' : 'text-left'}`}>
                                <span className="text-[10px] font-medium text-on-surface-variant block px-1">
                                    {msg.sender} • {msg.timestamp}
                                </span>
                                <div
                                    className={`p-3.5 rounded-2xl text-sm leading-relaxed ${msg.isSelf
                                        ? 'bg-primary text-on-primary rounded-br-xs'
                                        : msg.isAdmin
                                            ? 'bg-tertiary/10 text-on-surface border border-tertiary/20 rounded-bl-xs'
                                            : 'bg-surface-container-high text-on-surface rounded-bl-xs'
                                        }`}
                                >
                                    {msg.message}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center gap-3">
                        <span className="h-12 w-12 rounded-2xl bg-surface-container-high text-on-surface-variant flex items-center justify-center">
                            <MessageCircleQuestion className="h-6 w-6" />
                        </span>
                        <p className="text-sm font-semibold text-on-surface">No messages yet</p>
                        <p className="text-xs text-on-surface-variant max-w-xs">
                            Start the conversation with your trail companions.
                        </p>
                    </div>
                )}
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
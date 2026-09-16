import React from 'react';
import { ShieldAlert, Users, ChevronRight, MessageSquare } from 'lucide-react';

import { DEFAULT_CONVERSATIONS } from '../../mockData';

export default function ConversationList({
    conversations = DEFAULT_CONVERSATIONS,
    activeId = 'hikers-gc',
    onSelectConversation,
}) {
    return (
        <div className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-4 shadow-sm">
            <h3 className="text-xs font-bold text-outline uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Conversations
            </h3>

            <div className="space-y-2">
                {conversations.map((conv) => {
                    const IconComponent = conv.icon;
                    const isActive = activeId === conv.id;

                    return (
                        <button
                            key={conv.id}
                            type="button"
                            onClick={() => onSelectConversation && onSelectConversation(conv)}
                            className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center justify-between cursor-pointer border ${isActive
                                ? 'bg-primary/10 border-primary/30 ring-1 ring-primary/20'
                                : 'bg-surface-container-low/50 border-outline-variant/20 hover:bg-surface-container-low'
                                }`}
                        >
                            <div className="flex items-center gap-3.5 min-w-0">
                                {/* Channel Icon */}
                                <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${conv.type === 'admin'
                                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                                        : 'bg-primary/10 text-primary border border-primary/20'
                                        }`}
                                >
                                    <IconComponent className="h-5 w-5" />
                                </div>

                                {/* Details */}
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-2">
                                        <h4 className="text-sm font-bold text-on-surface truncate">
                                            {conv.title}
                                        </h4>
                                        <span className="text-[10px] font-medium text-outline shrink-0">
                                            {conv.timestamp}
                                        </span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant truncate mt-0.5">
                                        {conv.lastMessage}
                                    </p>
                                </div>
                            </div>

                            {/* Unread Counter Badge or Arrow */}
                            <div className="flex items-center gap-2 shrink-0 ml-3">
                                {conv.unreadCount > 0 ? (
                                    <span className="w-5 h-5 rounded-full bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center">
                                        {conv.unreadCount}
                                    </span>
                                ) : (
                                    <ChevronRight className="h-4 w-4 text-outline" />
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

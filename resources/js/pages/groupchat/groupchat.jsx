import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { MessageSquareText } from 'lucide-react';
import ConversationList from '../../components/features/ConversationList';
import Conversation from '../../components/features/Conversation';
import GCMember from '../../components/features/GCmember';

export default function GroupChat() {
    const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
    const [activeTab, setActiveTab] = useState('hikers-gc');
    const [showMembers, setShowMembers] = useState(false);

    const isAdminChannel = activeTab === 'admin-announcements';
    const trailName = isAdminChannel ? 'Park Announcements' : 'GC Summit Trail Oct 24, 2026';
    const subtitle = isAdminChannel ? 'Official updates from Park Staff' : 'Climb Date: Oct 24, 2026';

    return (
        <div ref={sectionRef} className="min-h-screen bg-surface font-sans">
            <div className="max-w-7xl mx-auto my-4 md:my-6 px-3 md:px-4 relative overflow-hidden">

                <header className="mb-4 md:mb-6 transition-all duration-700 ease-out">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary">Live Chat</p>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mt-2 flex items-center gap-3">
                        <span className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            <MessageSquareText className="h-6 w-6" />
                        </span>
                        Group Conversations
                    </h1>
                    <p className="text-sm md:text-base text-on-surface-variant mt-2">
                        Coordinate with your trail companions and Park Staff for your upcoming climb.
                    </p>
                </header>

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-start transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    {/* 1. Left Sidebar: Channel & Group Selector */}
                    <div className="lg:col-span-3">
                        <ConversationList
                            activeId={activeTab}
                            onSelectConversation={(conv) => setActiveTab(conv.id)}
                        />
                    </div>

                    {/* 2. Center Panel: Active Conversation View */}
                    <div className={`transition-all duration-300 ${showMembers ? 'lg:col-span-6' : 'lg:col-span-9'
                        }`}>
                        <Conversation
                            trailName={trailName}
                            subtitle={subtitle}
                            onToggleMembers={() => setShowMembers((prev) => !prev)}
                        />
                    </div>

                    {/* 3. Right Sidebar / Drawer: Members List */}
                    {showMembers && (
                        <div
                            onClick={() => setShowMembers(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 lg:hidden"
                        />
                    )}

                    <aside
                        className={`fixed inset-y-0 right-0 top-20 z-40 lg:z-auto w-80 lg:w-full lg:static transform transition-all duration-300 ease-in-out ${showMembers
                            ? 'translate-x-0 lg:col-span-3 lg:block'
                            : 'translate-x-full lg:hidden'
                            }`}
                    >
                        <GCMember onClose={() => setShowMembers(false)} />
                    </aside>

                </div>
            </div>
        </div>
    );
}
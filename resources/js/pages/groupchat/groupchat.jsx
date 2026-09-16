import React, { useState } from 'react';
import ConversationList from '../../components/features/ConversationList';
import Conversation from '../../components/features/Conversation';
import GCMember from '../../components/features/GCmember';

export default function GroupChat() {
    const [activeTab, setActiveTab] = useState('hikers-gc');
    const [showMembers, setShowMembers] = useState(false);

    return (
        <div className="max-w-7xl mx-auto my-6 px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* 1. Left Sidebar: Channel & Group Selector (Fixed 3 cols on desktop) */}
                <div className="lg:col-span-3">
                    <ConversationList
                        activeId={activeTab}
                        onSelectConversation={(conv) => setActiveTab(conv.id)}
                    />
                </div>

                {/* 2. Center Panel: Active Conversation View (Expands from 6 to 9 cols when sidebar is hidden) */}
                <div className={`transition-all duration-300 ${showMembers ? 'lg:col-span-6' : 'lg:col-span-9'
                    }`}>
                    <Conversation
                        trailName={
                            activeTab === 'admin-announcements'
                                ? 'Park Announcements'
                                : 'GC Summit Trail Oct 24,2026'
                        }
                        hikeDate="Oct 24, 2026"
                        onToggleMembers={() => setShowMembers((prev) => !prev)}
                    />
                </div>

                {/* 3. Right Sidebar / Drawer: Members List */}
                {/* Mobile Backdrop Overlay */}
                {showMembers && (
                    <div
                        onClick={() => setShowMembers(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 lg:hidden"
                    />
                )}

                {/* Drawer Container (Slide-over on Mobile, In-grid Column on Desktop) */}
                <aside
                    className={`fixed inset-y-0 right-0 mt-15 z-40 lg:z-auto w-80 lg:w-full lg:static transform transition-all duration-300 ease-in-out ${showMembers
                        ? 'translate-x-0 lg:col-span-3 lg:block'
                        : 'translate-x-full lg:hidden'
                        }`}
                >
                    <GCMember onClose={() => setShowMembers(false)} />
                </aside>

            </div>
        </div>
    );
}
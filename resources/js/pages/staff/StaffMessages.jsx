import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MessageSquare, ShieldAlert, UsersRound, X } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import Conversation from '../../components/hiker/groupchat/Conversation';
import ConversationList from '../../components/hiker/groupchat/ConversationList';
import GCMember from '../../components/hiker/groupchat/GCmember';
import { toast } from '../../components/ui/toast';
import { markChannelRead, sendMessage, useStaffStore } from '../../state/staffStore';
import StaffEmptyState from '../../components/staff/StaffEmptyState';
import StaffPageHeader from '../../components/staff/StaffPageHeader';

const CHANNEL_ICONS = {
    admin: ShieldAlert,
    group: UsersRound,
};

export default function StaffMessages() {
    const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
    const { channels } = useStaffStore();
    const [searchParams, setSearchParams] = useSearchParams();
    const channelList = useMemo(() => Object.values(channels).map((channel) => ({ ...channel, icon: CHANNEL_ICONS[channel.type] || MessageSquare })), [channels]);
    const requestedGroup = searchParams.get('group');
    const initialChannelId = requestedGroup && channels[`group-${requestedGroup}`] ? `group-${requestedGroup}` : channelList[0]?.id;
    const [activeChannelId, setActiveChannelId] = useState(initialChannelId);
    const [showMembers, setShowMembers] = useState(false);

    useEffect(() => {
        if (requestedGroup && channels[`group-${requestedGroup}`]) {
            setActiveChannelId(`group-${requestedGroup}`);
        }
    }, [channels, requestedGroup]);

    useEffect(() => {
        if (!showMembers) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setShowMembers(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [showMembers]);

    const activeChannel = channels[activeChannelId] || channelList[0];

    const handleSelect = (channel) => {
        setActiveChannelId(channel.id);
        setSearchParams(channel.type === 'group' ? { group: channel.scheduleId } : {});
        markChannelRead(channel.id);
        setShowMembers(false);
    };

    const handleSend = (message) => {
        if (!activeChannel) return;
        const sent = sendMessage(activeChannel.id, message);
        if (sent) toast.add({ type: 'success', title: 'Message sent', description: `Your message was added to ${activeChannel.title}.` });
    };

    return (
        <div ref={sectionRef} className="space-y-6 md:space-y-8">
            <div style={{ transitionDelay: '0ms' }} className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                <StaffPageHeader
                    eyebrow="Park staff · Group coordination"
                    title="Messages"
                    description="Keep assigned groups informed about jump-off details and keep park announcements in a shared operational channel."
                >
                    <Link to="/staff/schedules" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-outline-variant px-4 text-sm font-semibold text-on-surface hover:bg-surface-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">View schedules</Link>
                </StaffPageHeader>
            </div>

            <div style={{ transitionDelay: '150ms' }} className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                {activeChannel ? (
                <div className="grid gap-6 lg:grid-cols-[minmax(260px,0.62fr)_minmax(0,1.38fr)]">
                    <ConversationList conversations={channelList} activeId={activeChannel.id} onSelectConversation={handleSelect} />
                    <div className="min-w-0">
                        <Conversation
                            trailName={activeChannel.title}
                            subtitle={activeChannel.subtitle}
                            messages={activeChannel.messages}
                            membersCount={activeChannel.members.length}
                            onToggleMembers={() => setShowMembers((current) => !current)}
                            onSendMessage={handleSend}
                        />
                    </div>
                </div>
            ) : (
                <StaffEmptyState icon={MessageSquare} title="No staff conversations yet" description="Assigned group channels will appear here when a schedule is linked to your duty." />
                )}
            </div>

            {showMembers && activeChannel && (
                <div className="fixed inset-0 z-50 flex items-end justify-center bg-inverse-surface/50 p-4 sm:items-center lg:static lg:mt-6 lg:bg-transparent lg:p-0">
                    <div className="relative w-full max-w-sm">
                        <button type="button" onClick={() => setShowMembers(false)} aria-label="Close group members" className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container-lowest/90 text-on-surface-variant hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                            <X className="h-5 w-5" />
                        </button>
                        <GCMember members={activeChannel.members} onClose={() => setShowMembers(false)} />
                    </div>
                </div>
            )}
        </div>
    );
}

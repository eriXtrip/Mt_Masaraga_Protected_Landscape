import { UserCheck, ChevronRight, Star, Mountain, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STATUS_CONFIG = {
    Active: { label: 'Active', text: 'text-emerald-700', bg: 'bg-emerald-50', dot: 'bg-emerald-500' },
    'On Leave': { label: 'On Leave', text: 'text-amber-700', bg: 'bg-amber-50', dot: 'bg-amber-500' },
    Inactive: { label: 'Inactive', text: 'text-red-700', bg: 'bg-red-50', dot: 'bg-red-500' },
};

function StatusPill({ status }) {
    const config = STATUS_CONFIG[status] || { label: status, text: 'text-on-surface-variant', bg: 'bg-surface-container-high', dot: 'bg-on-surface-variant/40' };
    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${config.bg} ${config.text}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
            {config.label}
        </span>
    );
}

const TRAIL_LABELS = {
    amtic: 'Amtic',
    ligao: 'Balogo',
};

export default function GuideList({ guides, onSelect, resultCount, totalCount }) {
    if (guides.length === 0) {
        return (
            <div className="space-y-4">
                {/* Result Count Indicator */}
                <div className="pt-2 border-t border-outline-variant/20 xl:border-t-0 xl:pt-0 xl:ml-auto shrink-0 text-xs text-on-surface-variant whitespace-nowrap">
                    Showing <strong className="text-on-surface font-bold">{resultCount ?? 0}</strong> of {totalCount ?? 0} guides
                </div>

                <div className="text-center py-12 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl">
                    <span className="h-12 w-12 rounded-xl bg-surface-container-high text-on-surface-variant flex items-center justify-center mx-auto mb-3">
                        <UserCheck className="h-6 w-6" />
                    </span>
                    <h3 className="text-base font-bold text-on-surface">No guides found</h3>
                    <p className="text-xs text-on-surface-variant">
                        Try adjusting your search term or filters.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Result Count Indicator */}
            <div className="pt-2 border-t border-outline-variant/20 xl:border-t-0 xl:pt-0 xl:ml-auto shrink-0 text-xs text-on-surface-variant whitespace-nowrap">
                Showing <strong className="text-on-surface font-bold">{resultCount ?? guides.length}</strong> of {totalCount ?? guides.length} guides
            </div>

            {/* 1 Column on Small screens, 2 Columns on Medium+ screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guides.map((guide) => (
                    <div
                        key={guide.id}
                        className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-5 shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between gap-4"
                    >
                        <div className="flex items-center gap-4 min-w-0">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                                {guide.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}
                            </span>
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2">
                                    <p className="truncate text-sm font-bold text-on-surface">{guide.name}</p>
                                    <StatusPill status={guide.status} />
                                </div>
                                <p className="truncate text-xs text-on-surface-variant mt-0.5">
                                    {guide.specialization} · {guide.certification}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-2 border-t border-outline-variant/20 pt-3">
                            <div className="flex flex-wrap items-center gap-3 text-xs text-on-surface-variant">
                                <div className="flex items-center gap-1">
                                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 shrink-0" />
                                    <span className="font-semibold">{guide.rating}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Mountain className="h-3.5 w-3.5 shrink-0" />
                                    <span className="font-semibold">{guide.totalClimbs} climbs</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5 shrink-0" />
                                    <span className="font-semibold truncate max-w-25">
                                        {(guide.assignedTrails || []).map((t) => TRAIL_LABELS[t] || t).join(', ') || 'None'}
                                    </span>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => onSelect?.(guide)}
                                className="gap-1.5 cursor-pointer shrink-0"
                            >
                                <span>Details</span>
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
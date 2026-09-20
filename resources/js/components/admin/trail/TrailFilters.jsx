import { Search, Filter, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const DIFFICULTY_OPTIONS = ['All', 'Major Climb', 'Moderate-Major', 'Moderate'];
const STATUS_OPTIONS = ['All', 'Active', 'Draft', 'Closed'];

export default function TrailFilters({
    searchTerm,
    difficultyFilter,
    statusFilter,
    resultCount,
    totalCount,
    onSearch,
    onDifficulty,
    onStatus,
    onAdd,
}) {
    return (
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-4 shadow-xs">
            <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
                <Input
                    placeholder="Search trails..."
                    value={searchTerm}
                    onChange={(e) => onSearch(e.target.value)}
                    className="pl-9 w-full"
                />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
                <Filter className="h-4 w-4 text-outline" />

                <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Difficulty
                </span>
                {DIFFICULTY_OPTIONS.map((diff) => (
                    <button
                        key={diff}
                        type="button"
                        onClick={() => onDifficulty(diff)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none cursor-pointer ${
                            difficultyFilter === diff
                                ? 'bg-primary text-white'
                                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                        }`}
                    >
                        {diff}
                    </button>
                ))}

                <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant ml-2">
                    Status
                </span>
                {STATUS_OPTIONS.map((status) => (
                    <button
                        key={status}
                        type="button"
                        onClick={() => onStatus(status)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none cursor-pointer ${
                            statusFilter === status
                                ? 'bg-primary text-white'
                                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                        }`}
                    >
                        {status}
                    </button>
                ))}

                <Button
                    variant="default"
                    size="sm"
                    onClick={onAdd}
                    className="ml-2 gap-2"
                >
                    <Plus className="h-4 w-4" />
                    <span className="hidden sm:inline">Add Trail</span>
                </Button>
            </div>
        </div>
    );
}

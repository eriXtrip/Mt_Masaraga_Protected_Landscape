import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const METHOD_OPTIONS = ['All', 'GCash', 'Maya', 'Bank Transfer', 'Card'];
const STATUS_OPTIONS = ['All', 'Confirmed', 'Completed', 'Refunded'];

export default function PaymentFilters({
    searchTerm,
    methodFilter,
    statusFilter,
    resultCount,
    totalCount,
    onSearch,
    onMethod,
    onStatus,
}) {
    return (
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-4 shadow-xs">
            <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
                <Input
                    placeholder="Search by name, ref, trail..."
                    value={searchTerm}
                    onChange={(e) => onSearch(e.target.value)}
                    className="pl-9 w-full"
                />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
                <Filter className="h-4 w-4 text-outline" />

                <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Method
                </span>
                {METHOD_OPTIONS.map((method) => (
                    <button
                        key={method}
                        type="button"
                        onClick={() => onMethod(method)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none cursor-pointer ${
                            methodFilter === method
                                ? 'bg-primary text-white'
                                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                        }`}
                    >
                        {method}
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
            </div>
        </div>
    );
}

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { GALLERY_ITEMS } from '../../mockData';
import { useInView } from '@/hooks/useInView';

export default function Gallery() {
    const [showAll, setShowAll] = useState(false);
    const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });

    // Slice array to initial 6 items if not expanded
    const visibleItems = showAll ? GALLERY_ITEMS : GALLERY_ITEMS.slice(0, 6);
    const hasMoreItems = GALLERY_ITEMS.length > 6;

    return (
        <section ref={sectionRef} className="bg-surface px-6 py-6 md:px-12 md:py-8 overflow-hidden">
            <div className="mx-auto max-w-6xl">
                {/* Header Section */}
                <div
                    className={`mb-10 text-center transition-all duration-700 ease-out ${isInView
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl">
                        Experience the Landscape
                    </h2>
                    <p className="max-w-2xl mx-auto text-base font-normal text-on-surface-variant md:text-lg">
                        Discover the breathtaking beauty and biodiversity of Mt. Masaraga.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleItems.map((item, index) => {
                        const isExpandedItem = index >= 6;

                        return (
                            <div
                                key={item.caption || item.src}
                                style={{
                                    transitionDelay: !isExpandedItem ? `${index * 100}ms` : '0ms',
                                    animationDelay: isExpandedItem ? `${(index - 6) * 75}ms` : '0ms'
                                }}
                                className={`group overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm transition-all duration-500 ease-out hover:shadow-md ${isExpandedItem
                                        ? 'animate-in fade-in zoom-in-95 fill-mode-backwards'
                                        : isInView
                                            ? 'opacity-100 translate-y-0 scale-100'
                                            : 'opacity-0 translate-y-8 scale-95'
                                    }`}
                            >
                                <div className="aspect-4/3 overflow-hidden">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Expand / Collapse Button */}
                {hasMoreItems && (
                    <div
                        style={{ transitionDelay: '600ms' }}
                        className={`mt-8 flex justify-center transition-all duration-700 ease-out ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-6'
                            }`}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setShowAll((prev) => !prev)}
                            className="inline-flex items-center gap-2 font-bold cursor-pointer rounded-xl border-outline-variant/60 px-6 hover:bg-surface-container-low active:scale-95 transition-all"
                        >
                            <span>{showAll ? "Show Less" : `View More (${GALLERY_ITEMS.length - 6} more)`}</span>
                            {showAll ? (
                                <ChevronUp className="h-4 w-4" />
                            ) : (
                                <ChevronDown className="h-4 w-4" />
                            )}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
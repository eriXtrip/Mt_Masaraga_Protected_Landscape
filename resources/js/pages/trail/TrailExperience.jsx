import React, { useState } from 'react';
import { ExperienceCard } from '@/components/features/ExperienceCard';
import { Button } from '@/components/ui/button';

const INITIAL_VISIBLE_COUNT = 2;
const PAGE_SIZE = 2;

const TRAIL_EXPERIENCES = [
    {
        id: 1,
        initials: 'ES',
        name: 'Elena Santos',
        quote:
            'The summit view was breathtaking! A challenging climb but the panoramic views of Bicol are worth every step.',
        date: 'Oct 12, 2024',
        rating: 5,
    },
    {
        id: 2,
        initials: 'MC',
        name: 'Marcus Chen',
        quote:
            'Well-maintained trails and friendly guides. The permit process was smooth and the safety briefing was very thorough.',
        date: 'Sep 28, 2024',
        rating: 4,
    },
    {
        id: 3,
        initials: 'SJ',
        name: 'Sarah Johnson',
        quote:
            'The Eco-Trail Loop was perfect for my family. My kids loved seeing the rare birds and learning about local plants.',
        date: 'Sep 15, 2024',
        rating: 5,
    },
    {
        id: 4,
        initials: 'RV',
        name: 'Ramon Valdez',
        quote:
            'Great trail condition overall. Prepare for steep inclines toward the summit. Hydration is key!',
        date: 'Aug 30, 2024',
        rating: 4.5,
    },
    {
        id: 5,
        initials: 'AL',
        name: 'Anna Lopez',
        quote:
            'Highly recommend hiring a guide. Very knowledgeable about local flora and kept our group safe throughout.',
        date: 'Aug 14, 2024',
        rating: 5,
    },
];

export default function TrailExperience() {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

    const displayedReviews = TRAIL_EXPERIENCES.slice(0, visibleCount);
    const hasMore = visibleCount < TRAIL_EXPERIENCES.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, TRAIL_EXPERIENCES.length));
    };

    const handleShowLess = () => {
        setVisibleCount(INITIAL_VISIBLE_COUNT);
    };

    return (
        <section className="w-full max-w-md bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 transition-all hover:shadow-md">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-outline-variant/30">
                <h3 className="text-xl font-bold text-on-surface tracking-tight">
                    Hiker Reviews
                </h3>
                <span className="text-xs text-on-surface-variant font-medium">
                    Showing {displayedReviews.length} of {TRAIL_EXPERIENCES.length}
                </span>
            </div>

            {/* Scrollable Reviews Container */}
            <div className="space-y-1 mb-4 max-h-105 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-outline-variant/40">
                {displayedReviews.map((review, index) => (
                    <React.Fragment key={review.id}>
                        <ExperienceCard
                            initials={review.initials}
                            name={review.name}
                            quote={review.quote}
                            date={review.date}
                            rating={review.rating}
                            isLast={index === displayedReviews.length - 1}
                            variant="ghost"
                        />
                        {index !== displayedReviews.length - 1 && (
                            <div className="border-t border-outline-variant/30" />
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Action Button */}
            {hasMore ? (
                <Button
                    variant="outline"
                    className="w-full"
                    size="lg"
                    onClick={handleLoadMore}
                >
                    Load More Reviews ({TRAIL_EXPERIENCES.length - visibleCount} remaining)
                </Button>
            ) : (
                TRAIL_EXPERIENCES.length > INITIAL_VISIBLE_COUNT && (
                    <Button
                        variant="ghost"
                        className="w-full text-on-surface-variant hover:text-on-surface"
                        size="sm"
                        onClick={handleShowLess}
                    >
                        Show Less
                    </Button>
                )
            )}
        </section>
    );
}
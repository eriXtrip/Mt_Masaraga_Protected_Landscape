import React from 'react';
import { Dot } from 'lucide-react';

const TRAIL_PARAGRAPHS = [
    "The Standard Summit Trail offers the most direct and well-maintained route to the peak of Mt. Masaraga. Beginning at the designated ranger station in Ligao City, the trail immediately immerses hikers in dense, secondary forest before transitioning into a more challenging, steeper ascent characterized by loose volcanic soil and cogon grass near the summit.",
    "While considered manageable for experienced beginners, the constant incline requires good cardiovascular endurance. The final stretch provides little tree cover, exposing hikers to the elements but rewarding them with panoramic views of the surrounding Bicol region, including Mt. Mayon on clear days."
];

const TRAIL_HIGHLIGHTS = [
    {
        id: 'flora-fauna',
        label: 'Flora & Fauna:',
        description: 'Look out for pitcher plants near the summit and various endemic bird species in the lower canopy.'
    },
    {
        id: 'water-sources',
        label: 'Water Sources:',
        description: 'One reliable spring is located roughly halfway up the trail. Treat water before consuming.'
    },
    {
        id: 'campsites',
        label: 'Campsites:',
        description: 'A small campsite exists near the summit, accommodating up to 10 tents.'
    }
];

export default function TrailOverview() {
    return (
        <div className="w-full space-y-6">
            <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-10 border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">

                {/* Title & Category */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant/60">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-on-surface">
                            Trail Overview
                        </h3>
                    </div>
                </div>

                {/* Narrative Text */}
                <div className="space-y-4 text-on-surface/85 text-base md:text-lg leading-relaxed">
                    {TRAIL_PARAGRAPHS.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* Key Trail Characteristics / Highlights List */}
                <div className="mt-8 pt-6 border-t border-outline-variant/60">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-4">
                        Trail Highlights &amp; Key Points
                    </h4>
                    <ul className="space-y-3.5">
                        {TRAIL_HIGHLIGHTS.map((highlight) => (
                            <li key={highlight.id} className="flex items-start gap-2 text-on-surface/90">
                                <Dot className="h-6 w-6 text-primary shrink-0 -mt-0.5" />
                                <div>
                                    <strong className="font-semibold text-on-surface">
                                        {highlight.label}{' '}
                                    </strong>
                                    <span className="text-on-surface/80">
                                        {highlight.description}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
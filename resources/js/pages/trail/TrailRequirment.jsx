import React from 'react';
import { CircleCheck, TriangleAlert, SunMedium } from 'lucide-react';

const REQUIREMENTS = [
    {
        id: 1,
        title: 'Mandatory Local Guide (1 per 5 hikers)',
        icon: CircleCheck,
        isWarning: false,
    },
    {
        id: 2,
        title: 'Environmental Fee (₱150/head)',
        icon: CircleCheck,
        isWarning: false,
    },
    {
        id: 3,
        title: 'Valid ID presented at Jump-off',
        icon: CircleCheck,
        isWarning: false,
    },
    {
        id: 4,
        title: 'Strictly no walk-ins during weekends',
        icon: TriangleAlert,
        isWarning: true,
    },
];

export default function TrailRequirement() {
    return (
        <section className="w-full max-w-md bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 transition-all hover:shadow-md">
            {/* Title */}
            <h2 className="text-xl font-bold text-on-surface mb-5 flex items-center gap-2">
                Requirements
            </h2>

            {/* Requirements List */}
            <ul className="space-y-3.5 mb-6">
                {REQUIREMENTS.map((req) => (
                    <li
                        key={req.id}
                        className={`flex items-center gap-3 text-sm font-medium ${req.isWarning ? 'text-amber-700' : 'text-on-surface-variant'
                            }`}
                    >
                        <req.icon
                            className={`h-5 w-5 shrink-0 ${req.isWarning ? 'text-amber-600' : 'text-primary'
                                }`}
                        />
                        <span>{req.title}</span>
                    </li>
                ))}
            </ul>

            {/* Weather Forecast Section */}
            <div className="pt-5 border-t border-outline-variant/30">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                        Weather Forecast
                    </h3>
                </div>

                <div className="flex items-center gap-4 bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/20">
                    <SunMedium className="h-8 w-8 text-amber-500 shrink-0" />
                    <div>
                        <div className="font-bold text-base text-on-surface leading-tight">
                            24°C
                        </div>
                        <div className="text-xs text-on-surface-variant mt-0.5">
                            Partly Cloudy • 20% Rain • 8 km/h Wind
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
import { useState } from 'react';
import { Map, Flag, Tent, Mountain, TreePine, GripVertical } from 'lucide-react';
import { Button } from "@/components/ui/button";

const trails = {
    amtic: {
        name: 'Amtic Trail',
        subtitle: 'Continuous forested ascent with scenic viewpoints and technical ridge sections.',
        difficulty: '6/9',
        difficultyLabel: 'Major Climb',
        duration: '2-3 Days',
        trailClass: 'Class 1-4',
        technicality: 'High (Ropes req.)',
        waypoints: [
            {
                name: 'Brgy. Amtic Jump-off',
                description: 'Registration & Briefing',
                icon: 'start',
            },
            {
                name: 'Camp 1',
                description: 'Water source available',
                icon: 'camp',
            },
            {
                name: 'Camp 2 (Assault Base)',
                description: 'Dense mossy forest',
                icon: 'camp',
            },
            {
                name: 'Summit',
                description: '360\u00b0 view of Mayon',
                icon: 'summit',
            },
        ],
        elevationPoints: [
            { label: 'Jump-off', elevation: '250m', x: 70, y: 260 },
            { label: 'Amintao Viewdeck', elevation: '680m', x: 220, y: 195 },
            { label: 'Rope Section', elevation: '950m', x: 390, y: 140 },
            { label: 'Mossy Forest Ridge', elevation: '1,150m', x: 530, y: 95 },
            { label: 'Mt. Masaraga Summit', elevation: '1,328m', x: 660, y: 35, isSummit: true },
        ],
    },
    ligao: {
        name: 'Ligao Summit Trail',
        subtitle: 'A scenic route passing through lush forests and panoramic ridgelines.',
        difficulty: '5/9',
        difficultyLabel: 'Moderate Climb',
        duration: '1-2 Days',
        trailClass: 'Class 1-3',
        technicality: 'Moderate',
        waypoints: [
            {
                name: 'Brgy. Ligao Jump-off',
                description: 'Registration & gear check',
                icon: 'start',
            },
            {
                name: 'Forest Gate Camp',
                description: 'Sheltered resting area',
                icon: 'camp',
            },
            {
                name: 'Ridge Trail',
                description: 'Open ridgeline views',
                icon: 'camp',
            },
            {
                name: 'Summit',
                description: 'Panoramic Albay landscape',
                icon: 'summit',
            },
        ],
        elevationPoints: [
            { label: 'Jump-off', elevation: '300m', x: 70, y: 255 },
            { label: 'Forest Gate', elevation: '580m', x: 220, y: 200 },
            { label: 'Ridge Trail', elevation: '870m', x: 390, y: 150 },
            { label: 'Lookout Point', elevation: '1,080m', x: 530, y: 100 },
            { label: 'Summit', elevation: '1,328m', x: 660, y: 35, isSummit: true },
        ],
    },
};

function WaypointIcon({ type }) {
    if (type === 'summit') {
        return (
            <span className="absolute -left-6 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-on-primary shadow-sm">
                <Flag className="h-2.5 w-2.5" />
            </span>
        );
    }
    if (type === 'camp') {
        return (
            <span className="absolute -left-6 top-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-white">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
        );
    }
    return (
        <span className="absolute -left-6 top-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-white">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
    );
}

export default function TrailShowcase() {
    const [activeTrail, setActiveTrail] = useState('amtic');
    const trail = trails[activeTrail];

    return (
        <section className="w-full px-6 py-16 md:px-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
                {/* Section Header & Trail Tabs */}
                <div className="flex flex-col gap-4 border-b border-outline-variant pb-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-2xl font-extrabold tracking-tight text-on-surface md:text-3xl">
                            Trail Showcase
                        </h2>
                        <p className="mt-1 text-sm text-on-surface-variant md:text-base">
                            Explore the authorized routes for ascending Mt. Masaraga.
                        </p>
                    </div>

                    {/* Segmented Tab Controls */}
                    <div
                        role="tablist"
                        aria-label="Available climbing trails"
                        className="inline-flex items-center self-start rounded-xl bg-surface-container-high p-1 md:self-auto"
                    >
                        {Object.entries(trails).map(([key, t]) => {
                            const isActive = activeTrail === key;
                            return (
                                <Button
                                    key={key}
                                    role="tab"
                                    variant={isActive ? "default" : "ghost"}
                                    aria-selected={isActive}
                                    onClick={() => setActiveTrail(key)}
                                    className="rounded-lg px-4 py-2 text-xs font-semibold md:text-sm"
                                >
                                    {t.name}
                                </Button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Showcase Grid */}
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Elevation Profile */}
                    <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 shadow-sm md:p-6 lg:col-span-8">
                        <div>
                            <span className="mb-2 inline-block rounded-md bg-primary-container/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                                Elevation Profile
                            </span>
                            <h3 className="text-lg font-bold text-on-surface md:text-xl">
                                Elevation Profile: Mt. Masaraga {trail.name}
                            </h3>
                            <p className="mt-0.5 text-xs text-on-surface-variant md:text-sm">
                                {trail.subtitle}
                            </p>
                        </div>

                        {/* Elevation Chart SVG */}
                        <div className="relative mt-6 min-h-75 flex-col items-end border-t border-outline-variant pt-4">
                            <svg
                                className="h-72 w-full overflow-visible"
                                viewBox="0 0 760 300"
                                preserveAspectRatio="none"
                            >
                                <defs>
                                    <linearGradient id="trailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#39670d" stopOpacity="0.9" />
                                        <stop offset="60%" stopColor="#2d5210" stopOpacity="0.7" />
                                        <stop offset="100%" stopColor="#1a3408" stopOpacity="0.95" />
                                    </linearGradient>
                                    <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%">
                                        <feDropShadow dx="0" dy="4" floodOpacity="0.15" stdDeviation="3" />
                                    </filter>
                                </defs>

                                {/* Grid lines */}
                                <line x1="0" y1="240" x2="760" y2="240" stroke="#e5f1e7" strokeWidth="1" />
                                <line x1="0" y1="170" x2="760" y2="170" stroke="#e5f1e7" strokeWidth="1" />
                                <line x1="0" y1="100" x2="760" y2="100" stroke="#e5f1e7" strokeWidth="1" />
                                <line x1="0" y1="35" x2="760" y2="35" stroke="#e5f1e7" strokeWidth="1" />

                                {/* Filled area */}
                                <path
                                    d={`M 0,${trail.elevationPoints[0].y} ${trail.elevationPoints
                                        .map((p) => `L ${p.x},${p.y}`)
                                        .join(' ')} L 760,${trail.elevationPoints[trail.elevationPoints.length - 1].y} L 760,300 L 0,300 Z`}
                                    fill="url(#trailGradient)"
                                />

                                {/* Line path */}
                                <path
                                    d={`M ${trail.elevationPoints.map((p) => `${p.x},${p.y}`).join(' L ')}`}
                                    fill="none"
                                    stroke="#1a3408"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    filter="url(#shadow)"
                                />

                                {/* Points and labels */}
                                {trail.elevationPoints.map((point, i) => (
                                    <g key={i}>
                                        <circle
                                            cx={point.x}
                                            cy={point.y}
                                            r={point.isSummit ? 6 : 5}
                                            fill={point.isSummit ? '#141e18' : '#ffffff'}
                                            stroke={point.isSummit ? '#ffffff' : '#1a3408'}
                                            strokeWidth={point.isSummit ? 2.5 : 3}
                                        />
                                        {i > 0 && (
                                            <line
                                                x1={point.x}
                                                y1={point.y}
                                                x2={point.x}
                                                y2={point.y - 25}
                                                stroke="#9ec4a3"
                                                strokeDasharray="2,2"
                                                strokeWidth="1.5"
                                            />
                                        )}
                                        <text
                                            x={point.x}
                                            y={point.isSummit ? point.y - 15 : point.y - 30}
                                            textAnchor="middle"
                                            fill={point.isSummit ? '#141e18' : '#42493b'}
                                            fontSize={point.isSummit ? 12 : 11}
                                            fontWeight={point.isSummit ? 800 : 600}
                                        >
                                            {point.label} ({point.elevation})
                                        </text>
                                    </g>
                                ))}
                            </svg>
                        </div>
                    </div>

                    {/* Sidebar Cards */}
                    <div className="flex flex-col gap-4 lg:col-span-4">
                        {/* Trail Difficulty Card */}
                        <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-5 shadow-sm md:p-6">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
                                Trail Difficulty
                            </span>
                            <div className="mt-2 flex items-baseline gap-2 border-b border-outline-variant pb-4">
                                <span className="text-4xl font-extrabold tracking-tight text-on-surface">
                                    {trail.difficulty}
                                </span>
                                <span className="rounded-full bg-primary-container/15 px-2.5 py-0.5 text-sm font-bold text-primary">
                                    {trail.difficultyLabel}
                                </span>
                            </div>

                            <dl className="mt-4 space-y-3 text-xs md:text-sm">
                                <div className="flex items-center justify-between">
                                    <dt className="font-medium text-on-surface-variant">Duration</dt>
                                    <dd className="font-bold text-on-surface">{trail.duration}</dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-outline-variant/40 pt-2.5">
                                    <dt className="font-medium text-on-surface-variant">Trail Class</dt>
                                    <dd className="font-bold text-on-surface">{trail.trailClass}</dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-outline-variant/40 pt-2.5">
                                    <dt className="font-medium text-on-surface-variant">Technicality</dt>
                                    <dd className="text-right font-bold text-on-surface">{trail.technicality}</dd>
                                </div>
                            </dl>
                        </div>

                        {/* Key Waypoints Card */}
                        <div className="flex-1 rounded-2xl border border-outline-variant bg-surface-container-low p-5 shadow-sm md:p-6">
                            <span className="mb-4 block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
                                Key Waypoints
                            </span>

                            <ol className="relative space-y-5 pl-6">
                                {/* Vertical connecting bar */}
                                <div
                                    aria-hidden="true"
                                    className="absolute bottom-3 left-2.5 top-2 w-0.5 bg-primary-container"
                                />

                                {trail.waypoints.map((wp, i) => (
                                    <li key={i} className="relative">
                                        <WaypointIcon type={wp.icon} />
                                        <div>
                                            <h4 className="text-xs font-bold leading-tight text-on-surface md:text-sm">
                                                {wp.name}
                                            </h4>
                                            <p className="mt-0.5 text-xs text-on-surface-variant">
                                                {wp.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

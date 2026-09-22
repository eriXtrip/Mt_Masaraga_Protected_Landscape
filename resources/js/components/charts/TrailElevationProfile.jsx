import { useMemo } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';
import ChartContainer from './ChartContainer';
import { useInView } from '@/hooks/useInView';

export default function TrailElevationProfile({ trail, className = '', showHeader = true }) {
    // Trigger when 15% of the element enters the viewport
    const [containerRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });

    // Process and clean elevation data points
    const elevationData = useMemo(() => {
        if (!trail?.elevationPoints || trail.elevationPoints.length === 0) return [];

        return trail.elevationPoints.map((point, index) => {
            const rawElevation = point.elevation ?? 0;
            const parsedNum = typeof rawElevation === 'number'
                ? rawElevation
                : parseFloat(String(rawElevation).replace(/[^0-9.-]/g, '')) || 0;

            return {
                ...point,
                index,
                elevationNum: Math.round(parsedNum),
                isSummit: point.isSummit || false,
                isStart: index === 0,
            };
        });
    }, [trail]);

    const maxElevation = useMemo(() => {
        return elevationData.length > 0
            ? Math.max(...elevationData.map((p) => p.elevationNum))
            : 0;
    }, [elevationData]);

    const minElevation = useMemo(() => {
        return elevationData.length > 0
            ? Math.min(...elevationData.map((p) => p.elevationNum))
            : 0;
    }, [elevationData]);

    if (elevationData.length === 0) {
        return (
            <ChartContainer height={200} className={className}>
                <div className="flex items-center justify-center h-full text-on-surface-variant">
                    No elevation data available
                </div>
            </ChartContainer>
        );
    }

    // Custom Dot Renderer to highlight each waypoint along the line
    const RenderCustomDot = (props) => {
        const { cx, cy, payload } = props;
        if (!cx || !cy) return null;

        if (payload.isSummit) {
            return (
                <g key={`dot-summit-${payload.index}`}>
                    <circle cx={cx} cy={cy} r={8} fill="var(--foreground)" stroke="var(--background)" strokeWidth={2} />
                    <circle cx={cx} cy={cy} r={12} fill="none" stroke="var(--foreground)" strokeWidth={1.5} opacity={0.5} />
                    <text x={cx} y={cy - 18} textAnchor="middle" fill="var(--foreground)" fontSize={11} fontWeight="bold">
                        Summit
                    </text>
                    <text x={cx} y={cy - 6} textAnchor="middle" fill="var(--foreground)" fontSize={10} fontWeight="600">
                        {payload.elevationNum}m
                    </text>
                </g>
            );
        }

        if (payload.isStart) {
            return (
                <g key={`dot-start-${payload.index}`}>
                    <circle cx={cx} cy={cy} r={7} fill="var(--foreground)" stroke="var(--background)" strokeWidth={2} />
                    <text x={cx} y={cy - 16} textAnchor="middle" fill="var(--foreground)" fontSize={11} fontWeight="bold">
                        Start
                    </text>
                    <text x={cx} y={cy - 5} textAnchor="middle" fill="var(--foreground)" fontSize={10}>
                        {payload.elevationNum}m
                    </text>
                </g>
            );
        }

        return (
            <g key={`dot-point-${payload.index}`}>
                <circle cx={cx} cy={cy} r={5} fill="var(--background)" stroke="var(--primary)" strokeWidth={2} />
                {payload.label && (
                    <text x={cx} y={cy > 180 ? cy + 18 : cy - 14} textAnchor="middle" fill="var(--muted-foreground)" fontSize={10} fontWeight="500">
                        {payload.label}
                    </text>
                )}
            </g>
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const point = payload[0].payload;
            return (
                <div className="bg-surface-container p-3 rounded-lg border border-outline-variant/40 shadow-lg min-w-40">
                    <p className="font-bold text-on-surface">{point.label || `Waypoint ${point.index + 1}`}</p>
                    <p className="text-sm font-medium text-on-surface">
                        Elevation: <span className="text-sm text-on-surface-variant">{point.elevationNum}m</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div ref={containerRef} className={className}>
            {showHeader && (
                <div className="text-xl font-bold text-on-surface mb-5 flex items-center gap-2 border-b border-outline-variant/40 pb-2">
                    <span>Elevation Profile</span>
                </div>
            )}

            {/* Recharts Chart Container - Only renders when scrolled into view */}
            <ChartContainer height={360}>
                {isInView ? (
                    <AreaChart data={elevationData} margin={{ top: 35, right: 30, left: 10, bottom: 20 }}>
                        <defs>
                            <linearGradient id="elevationGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.02} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                        <XAxis dataKey="index" hide />
                        <YAxis
                            type="number"
                            domain={[Math.max(0, minElevation - 40), maxElevation + 60]}
                            tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(v) => `${v}m`}
                            width={45}
                        />
                        <Tooltip content={<CustomTooltip />} />

                        <Area
                            type="monotone"
                            dataKey="elevationNum"
                            stroke="var(--foreground)"
                            strokeWidth={2.5}
                            fill="url(#elevationGradient)"
                            connectNulls={true}
                            isAnimationActive={true}
                            animationDuration={1500}
                            animationEasing="ease-out"
                            dot={<RenderCustomDot />}
                            activeDot={{ r: 7, fill: 'var(--primary)', stroke: 'var(--background)', strokeWidth: 2 }}
                        />
                    </AreaChart>
                ) : (
                    /* Blank space reservation to prevent layout shift before scrolling into view */
                    <div className="h-full w-full" />
                )}
            </ChartContainer>
        </div>
    );
}
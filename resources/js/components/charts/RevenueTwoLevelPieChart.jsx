import { useMemo } from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from 'recharts';
import ChartContainer from './ChartContainer';

const TRAIL_COLORS = [
    'var(--chart-1)',
    'var(--chart-3)',
    'var(--chart-5)',
    'var(--chart-7)',
    'var(--chart-9)',
];

const formatter = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

export default function RevenueTwoLevelPieChart({ bookings, selectedTrail = 'all' }) {
    const { innerData, outerData, totalRevenue, payments, paymentColors } = useMemo(() => {
        const filtered = selectedTrail === 'all'
            ? bookings
            : bookings.filter((b) => b.trail === selectedTrail);

        const trailMap = new Map();
        const paymentMap = new Map();

        filtered.forEach((booking) => {
            const trail = booking.trail;
            const payment = booking.paymentMethod;
            const amount = booking.totalPaid || 0;

            trailMap.set(trail, (trailMap.get(trail) || 0) + amount);
            paymentMap.set(payment, (paymentMap.get(payment) || 0) + amount);
        });

        const paymentList = [...paymentMap.keys()].sort();

        const colors = {};
        paymentList.forEach((payment, index) => {
            colors[payment] = `var(--chart-${(index % 10) + 1})`;
        });

        // Inner pie: revenue per trail
        const inner = Array.from(trailMap, ([trail, total]) => ({
            name: trail,
            value: total,
        }));

        // Outer pie: revenue by payment method (all trails combined)
        const outer = paymentList.map((payment) => ({
            name: payment,
            value: paymentMap.get(payment),
            color: colors[payment],
        }));

        const total = Array.from(trailMap.values()).reduce((sum, t) => sum + t, 0);

        return {
            innerData: inner,
            outerData: outer,
            totalRevenue: total,
            payments: paymentList,
            paymentColors: colors,
        };
    }, [bookings, selectedTrail]);

    if (innerData.length === 0) {
        return (
            <ChartContainer height={200}>
                <div className="flex items-center justify-center h-full text-on-surface-variant">
                    No revenue data available
                </div>
            </ChartContainer>
        );
    }

    const CombinedTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0];
            const percentage = ((data.value / totalRevenue) * 100).toFixed(1);

            return (
                <div className="bg-surface-container p-3 rounded-lg border border-outline-variant/40 shadow-lg">
                    <div className="flex items-center gap-2">
                        <span
                            className="w-3 h-3 rounded shrink-0"
                            style={{ backgroundColor: data.payload.color || data.fill }}
                        />
                        <p className="font-bold text-on-surface">{data.name}</p>
                    </div>
                    <p className="text-sm font-medium text-on-surface mt-1">{formatter.format(data.value)}</p>
                    <p className="text-xs text-on-surface-variant">{percentage}% of total</p>
                </div>
            );
        }
        return null;
    };

    const renderInnerLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
        if (percent < 0.08) return null;
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y - 6}
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={11}
                fontWeight={700}
            >
                {name.length > 10 ? name.slice(0, 10) + '...' : name}
            </text>
        );
    };

    const renderOuterLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        if (percent < 0.04) return null;
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={9}
                fontWeight={600}
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="space-y-4">
            {/* Total Revenue Display */}
            <div className="text-center">
                <p className="text-sm text-on-surface-variant">Total Revenue</p>
                <p className="text-3xl font-extrabold text-on-surface">{formatter.format(totalRevenue)}</p>
            </div>

            <ChartContainer height={400}>
                <PieChart>
                    {/* Outer Pie: Revenue by payment method */}
                    <Pie
                        data={outerData}
                        cx="50%"
                        cy="50%"
                        innerRadius={100}
                        outerRadius={160}
                        paddingAngle={1}
                        dataKey="value"
                        label={renderOuterLabel}
                        labelLine={false}
                        stroke="var(--background)"
                        strokeWidth={1}
                    >
                        {outerData.map((entry, index) => (
                            <Cell key={`outer-${index}`} fill={entry.color} />
                        ))}
                    </Pie>

                    {/* Inner Pie: Revenue per trail */}
                    <Pie
                        data={innerData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={95}
                        paddingAngle={2}
                        dataKey="value"
                        label={renderInnerLabel}
                        labelLine={false}
                        stroke="var(--background)"
                        strokeWidth={2}
                    >
                        {innerData.map((entry, index) => (
                            <Cell key={`inner-${index}`} fill={TRAIL_COLORS[index % TRAIL_COLORS.length]} />
                        ))}
                    </Pie>

                    <Tooltip content={<CombinedTooltip />} />
                    <Legend
                        verticalAlign="bottom"
                        height={50}
                        formatter={(value) => (
                            <span className="text-sm text-on-surface">{value}</span>
                        )}
                    />
                </PieChart>
            </ChartContainer>

            {/* Payment Methods Legend - Shows ALL payment methods */}
            <div className="border-t border-outline-variant/20 pt-3">
                <p className="text-xs font-semibold text-on-surface-variant text-center mb-2">
                    Payment Methods
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    {payments.map((payment) => (
                        <div key={payment} className="flex items-center gap-1.5">
                            <span
                                className="w-3 h-3 rounded"
                                style={{ backgroundColor: paymentColors[payment] }}
                            />
                            <span className="text-xs text-on-surface-variant">{payment}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
import { ArrowRight } from 'lucide-react';

const NEWS = [
    {
        badge: 'ADVISORY',
        badgeClass: 'bg-red-50 text-red-700 border-red-200',
        date: 'Oct 24, 2024',
        title: 'Scheduled Trail Maintenance',
        description:
            'The Eco-Trail Loop will be partially closed for boardwalk repairs from Oct 28-30.',
    },
    {
        badge: 'WEATHER',
        badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
        date: 'Oct 23, 2024',
        title: 'Favorable Climbing Conditions',
        description:
            'Clear skies expected for the weekend. Perfect conditions for the Standard Summit trail.',
    },
    {
        badge: 'UPDATE',
        badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        date: 'Oct 20, 2024',
        title: 'New Online Permit System',
        description:
            'We have upgraded our booking portal for faster processing of climbing permits.',
    },
];

export default function News() {
    return (
        <section className="bg-surface px-6 py-6 md:px-12 md:py-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl">
                        News & Announcements
                    </h2>
                    <p className="max-w-2xl text-base font-normal text-on-surface-variant md:text-lg">
                        Stay updated with the latest advisories and park information.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {NEWS.map((item) => (
                        <div
                            key={item.title}
                            className="flex flex-col justify-between rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <span
                                        className={`rounded border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${item.badgeClass}`}
                                    >
                                        {item.badge}
                                    </span>
                                    <span className="text-xs font-medium text-on-surface-variant">
                                        {item.date}
                                    </span>
                                </div>
                                <h3 className="mb-2 text-lg font-bold leading-snug text-on-surface">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-on-surface-variant">
                                    {item.description}
                                </p>
                            </div>
                            <div className="mt-6 border-t border-outline-variant pt-4">
                                <a
                                    href="#"
                                    className="group inline-flex items-center text-sm font-bold text-primary transition-colors hover:text-primary-container"
                                >
                                    <span>Read More</span>
                                    <ArrowRight
                                        className=" h-5 w-5 transition-transform group-hover:translate-x-1 ml-1"
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

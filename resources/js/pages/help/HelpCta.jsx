import { CloudLightning, CreditCard, FileText, Headset, Mountain } from 'lucide-react';
import HelpSearchBar from '../../components/features/HelpSearchBar';

const POPULAR_TOPICS = [
    { icon: FileText, label: 'Permit Requirements' },
    { icon: CreditCard, label: 'Payment Methods' },
    { icon: Mountain, label: 'Trail Difficulty' },
    { icon: CloudLightning, label: 'Weather & Alerts' },
];

export default function HelpSearchbar() {
    return (
        <section className="relative w-full overflow-hidden px-6 pt-16 pb-6 md:px-5 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-center px-1 py-14 text-center sm:px-10 md:px-14">
                    <div className="mx-auto w-full max-w-3xl">

                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl md:text-5xl">
                            How can we help you prepare?
                        </h2>
                        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
                            Find answers to frequently asked questions about booking, trail
                            requirements, and safety policies.
                        </p>

                        <HelpSearchBar />

                        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 pt-2">
                            <span className="mr-1 text-xs font-semibold text-on-surface-variant">
                                Popular topics:
                            </span>
                            {POPULAR_TOPICS.map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    className="inline-flex items-center rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-surface-container"
                                >
                                    <Icon className="mr-1 h-4.5 w-4.5 text-on-surface-variant" />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
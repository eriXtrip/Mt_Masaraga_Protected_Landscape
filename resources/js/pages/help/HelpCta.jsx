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
        <section className="relative px-6 pt-24 pb-12 md:px-12 lg:px-16 min-h-auto lg:min-h-screen w-full items-start justify-start overflow-hidden">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-center  px-6 py-14 text-center sm:px-10 md:px-14">
                    <div className="mx-auto w-full max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1 text-xs font-semibold text-primary">
                            <Headset className="h-4 w-4 shrink-0" />
                            <span>Support &amp; Assistance</span>
                        </div>

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
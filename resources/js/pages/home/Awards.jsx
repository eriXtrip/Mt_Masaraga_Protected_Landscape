

import { AWARDS, ICON_PATHS } from '../../mockData';

export default function Awards() {
    return (
        <section className="bg-surface px-6 py-12 md:px-12 md:py-20">
            <div className="mx-auto max-w-6xl">
                {/* Header Section */}
                <div className="mb-12 max-w-2xl">
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-on-surface md:text-5xl">
                        Awards & Distinctions
                    </h2>
                    <p className="text-base leading-relaxed text-on-surface-variant md:text-lg">
                        Recognized for excellence in environmental conservation and
                        sustainable ecotourism.
                    </p>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-16">
                    {/* Editorial Image Frame */}
                    <div className="overflow-hidden rounded-2xl bg-surface-container-high md:col-span-5">
                        <img
                            src="/images/awards/trophy.jpg"
                            alt="DENR-PAMB Environmental Excellence Award Trophy in tropical rainforest"
                            className="h-80 w-full object-cover transition-transform duration-500 ease-out hover:scale-102 md:h-130"
                        />
                    </div>

                    {/* Structured Awards List */}
                    <div className="flex flex-col justify-center space-y-8 md:col-span-7 md:py-4">
                        {AWARDS.map((award, index) => (
                            <div
                                key={award.name}
                                className={`flex items-start gap-5 ${index !== AWARDS.length - 1
                                    ? 'border-b border-outline-variant/30 pb-8'
                                    : ''
                                    }`}
                            >
                                {/* Minimal Icon Badge */}
                                <div
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-container-high text-primary"
                                    aria-hidden="true"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5 fill-current"
                                    >
                                        <path d={ICON_PATHS[award.iconKey]} />
                                    </svg>
                                </div>

                                {/* Award Details */}
                                <div className="space-y-1">
                                    <h3 className="text-lg cursor-pointer font-bold leading-snug text-on-surface md:text-xl hover:text-primary">
                                        <a href={`/awards/${award.id}`}>{award.name}</a>
                                    </h3>
                                    <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
                                        {award.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
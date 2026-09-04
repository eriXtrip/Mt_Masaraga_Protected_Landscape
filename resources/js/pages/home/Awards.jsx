const AWARDS = [
    {
        icon: 'workspace_premium',
        name: 'DENR-PAMB Recognition',
        description:
            'Awarded for outstanding management of protected landscapes in the Bicol Region (2023).',
    },
    {
        icon: 'eco',
        name: 'Eco-Tourism Excellence',
        description:
            'Certified Sustainable Destination by the National Ecotourism Steering Committee.',
    },
    {
        icon: 'verified_user',
        name: 'ISO 14001 Certified',
        description:
            'International standard for effective environmental management systems.',
    },
];

const ICON_PATHS = {
    workspace_premium: 'M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2z',
    eco: 'M22 5v2h-3v3h-2V7h-3V5h3V2h2v3h3zm-6.5 7.5C16 15 14 17 10.5 17 8 17 5 14 5 11.5 5 8 7 6 9.5 6c3.5 0 5 3.5 6 6.5zM2 22c0-5 3-8.5 8-10.5C6 13 4 16 2 22z',
    verified_user: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
};

export default function Awards() {
    return (
        <section className="bg-surface px-6 py-6 md:px-12 md:py-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl">
                        Awards & Distinctions
                    </h2>
                    <p className="max-w-2xl text-base font-normal text-on-surface-variant md:text-lg">
                        Recognized for excellence in environmental conservation and
                        sustainable ecotourism.
                    </p>
                </div>

                <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 md:p-10">
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
                        <div className="overflow-hidden rounded-2xl border border-outline-variant shadow-md md:col-span-6">
                            <img
                                src="/images/awards/trophy.jpg"
                                alt="DENR-PAMB Environmental Excellence Award Trophy in tropical rainforest"
                                className="h-80 w-full object-cover transition-transform duration-500 ease-out hover:scale-105 md:h-[420px]"
                            />
                        </div>

                        <div className="flex flex-col justify-center gap-8 md:col-span-6">
                            {AWARDS.map((award) => (
                                <div key={award.name} className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-white text-primary shadow-sm">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6 fill-current"
                                            aria-hidden="true"
                                        >
                                            <path d={ICON_PATHS[award.icon]} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold leading-snug text-on-surface">
                                            {award.name}
                                        </h3>
                                        <p className="mt-1.5 text-sm leading-relaxed text-on-surface-variant">
                                            {award.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { AWARDS, ICON_PATHS } from '../../mockData';


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
                                className="h-80 w-full object-cover transition-transform duration-500 ease-out hover:scale-105 md:h-150"
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

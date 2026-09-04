const EXPERIENCES = [
    {
        initials: 'ES',
        name: 'Elena Santos',
        quote:
            'The summit view was breathtaking! A challenging climb but the panoramic views of Bicol are worth every step.',
        date: 'Oct 2024',
    },
    {
        initials: 'MC',
        name: 'Marcus Chen',
        quote:
            'Well-maintained trails and friendly guides. The permit process was smooth and the safety briefing was very thorough.',
        date: 'Sep 2024',
    },
    {
        initials: 'SJ',
        name: 'Sarah Johnson',
        quote:
            'The Eco-Trail Loop was perfect for my family. My kids loved seeing the rare birds and learning about local plants.',
        date: 'Sep 2024',
    },
];

const starPath =
    'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';

function Stars() {
    return (
        <div className="flex gap-1" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-primary"
                    aria-hidden="true"
                >
                    <path d={starPath} />
                </svg>
            ))}
        </div>
    );
}

export default function Experience() {
    return (
        <section className="bg-surface px-6 py-6 md:px-12 md:py-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 text-center">
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl">
                        Hiker Experiences & Feedback
                    </h2>
                    <p className="max-w-2xl text-base mx-auto font-normal text-on-surface-variant md:text-lg">
                        Discover the breathtaking beauty and biodiversity of Mt. Masaraga
                        through the stories of fellow explorers.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {EXPERIENCES.map((review) => (
                        <div
                            key={review.name}
                            className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm"
                        >
                            <div className="mb-4 flex flex-row items-center">
                                <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-sm font-bold text-on-primary-container">
                                    {review.initials}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-on-surface">
                                        {review.name}
                                    </h3>
                                    <Stars />
                                </div>
                            </div>



                            <blockquote className="mt-4 flex-1 text-base text-on-surface-variant">
                                &ldquo;{review.quote}&rdquo;
                            </blockquote>

                            <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-on-surface-variant">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-3.5 w-3.5 fill-primary"
                                    aria-hidden="true"
                                >
                                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                <span>Verified Hiker</span>
                                <span className="text-outline">•</span>
                                <span>{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

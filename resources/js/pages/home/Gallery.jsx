const GALLERY_ITEMS = [
    {
        src: '/images/gallery/morning-mist.jpg',
        alt: "Mt. Masaraga's peak shrouded in soft morning mist",
        caption: 'Morning Mist over Mt. Masaraga',
    },
    {
        src: '/images/gallery/tropical-bird.jpg',
        alt: 'Rare tropical bird in rainforest',
        caption: 'Native Flora & Avian Wildlife',
    },
    {
        src: '/images/gallery/boardwalk.jpg',
        alt: 'Hikers on wooden boardwalk trail',
        caption: 'Protected Canopy Boardwalk',
    },
    {
        src: '/images/gallery/forest-stream.jpg',
        alt: 'Mountain stream with crystal water',
        caption: 'Pristine Forest Streams',
    },
    {
        src: '/images/gallery/sunrise-deck.jpg',
        alt: 'Wooden viewing deck overlooking sea of clouds at sunrise',
        caption: 'Sunrise View Deck & Cloud Sea',
    },
    {
        src: '/images/gallery/cloud-forest.jpg',
        alt: 'Lush green ferns and moss-covered forest',
        caption: 'Ancient Cloud Forest Canopy',
    },
];

export default function Gallery() {
    return (
        <section className="bg-surface px-6 py-6 md:px-12 md:py-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 text-center">
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl">
                        Experience the Landscape
                    </h2>
                    <p className="max-w-2xl mx-auto text-base font-normal text-on-surface-variant md:text-lg">
                        Discover the breathtaking beauty and biodiversity of Mt. Masaraga.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {GALLERY_ITEMS.map((item) => (
                        <div
                            key={item.caption}
                            className="group overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

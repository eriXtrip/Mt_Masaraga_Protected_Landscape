import TrailCard from '../../components/features/TrailCard';

const TRAILS = [
    {
        name: 'Standard Summit',
        difficulty: 'Challenging',
        difficultyClass: 'bg-primary-container text-on-primary-container',
        description:
            'A demanding but rewarding ascent to the peak of Mt. Masaraga, offering panoramic views of the surrounding Bicol region.',
        statIcon: 'height',
        stats: ['6-8 Hours', '8km'],
        image:
            'https://lh3.googleusercontent.com/aida/AEtjO1Wpnp7mJSLpQTg06WeVS6Q3LZxOPj5BajErYN7Vvt3odT5WiIfdIgAmcZJ5G6UHjsGSWPgJv0Vfw94wFlLsKKixyrWJ318FjLBRLBqNBc1yzsvm9pc7N5qkvbZQ0kxG8BZBP8Se3sBfS9aXT80njFAq0U1GW1QZGXROKs4lGSshKMaPHWVVOIoWVg_evwR8rRq9junay1-1bgPD007QH48vKkBLilKL2RtAt98o6h3Vi41JzQ5B9jBaEH8',
    },
    {
        name: 'Eco-Trail Loop',
        difficulty: 'Beginner',
        difficultyClass: 'bg-primary text-white',
        description:
            'A guided, immersive loop focusing on the unique biodiversity and conservation efforts within the lower slopes of the landscape.',
        statIcon: 'nature',
        stats: ['2-3 Hours', '6.5km'],
        image:
            'https://lh3.googleusercontent.com/aida/AEtjO1Xzb6yyJ4VlO_ZqsSS-qhh4zVyXms7hqKxPsm8ATb3l4X_T3aCokk6XkJmR9DSVnG9hY4kkO7i43edpYTvVIycw__yXA4CMPdEh3kWbPnn4AMr_3X7kHf8LLo9vUWscWLdDUq1eBZE9bms19K3Swf_bPEZYhhIrjW9eL8uuPF0nwlINrFm1qNuYDY9MLlmvbQew9dTheRhHErwPHVjfzC50w0n_zJpPNTzwzu37ZJjKWtXk4JCyOzFAeIWI',
    },
];

export default function ExploreTrail() {
    return (
        <section className="bg-surface px-6 py-6 md:px-12 md:py-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 text-left">
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl">
                        Explore the Trails
                    </h2>
                    <p className="max-w-2xl text-base font-normal text-on-surface-variant md:text-lg">
                        Choose your path through the protected landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
                    {TRAILS.map((trail) => (
                        <TrailCard key={trail.name} trail={trail} />
                    ))}
                </div>
            </div>
        </section>
    );
}

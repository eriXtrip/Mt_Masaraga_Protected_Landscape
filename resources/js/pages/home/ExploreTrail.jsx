import TrailCard from '../../components/features/TrailCard';
import SabluyonRoute from '../../../../public/images/trail/SabluyonTrail.jpg'
import BalogoRoute from '../../../../public/images/trail/BalogoTrail.jpg'

const TRAILS = [
    {
        name: 'Amtic Trail (or Sabluyon Trail)',
        difficulty: 'Major Climb',
        difficultyClass: 'bg-primary-container text-on-primary-container',
        description:
            'This is the most popular, standard route. It begins in Sitio Sabluyon, Barangay Amtic, Ligao City. This trail is home to the famous Mt. Masaraga Campsite and features a grueling, pure uphill assault to the summit.',
        statIcon: 'height',
        stats: ['3-4 Hours', '12.4km'],
        image: SabluyonRoute,
    },
    {
        name: 'Balogo Trail',
        difficulty: 'Major Climb',
        difficultyClass: 'bg-primary text-white',
        description:
            'This is the alternative route that starts near Balogo East Elementary School. Depending on the path mapped out by local guides, it can cross the boundary areas near Oas or Ligao, passing through open fields and residential areas before hitting the steep mountain slopes.',
        statIcon: 'nature',
        stats: ['4-5 Hours', '14km'],
        image: BalogoRoute,
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

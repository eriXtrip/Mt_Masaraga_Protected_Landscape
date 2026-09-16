import TrailCard from '../../components/features/TrailCard';
import { TRAILS } from '../../mockData';

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

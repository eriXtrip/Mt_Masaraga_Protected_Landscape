import TrailHero from './TrailHero';

export default function Trail() {
    return (
        <div className="flex min-h-screen flex-col bg-surface">
            <main className="flex-1 lg:-mt-14 p-4 sm:p-10 lg:p-20">
                <TrailHero />
            </main>
        </div>
    );
}

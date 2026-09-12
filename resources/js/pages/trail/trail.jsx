import TrailHero from './TrailHero';
import TrailStats from './TrailStats';
import TrailOverview from './TrailOverview';
import TrailGallery from './TrailGallery';
import TrailRequirment from './TrailRequirment';
import TrailExperience from './TrailExperience';

export default function Trail() {
    return (
        <div className="flex min-h-screen flex-col bg-surface">
            <main className="flex-1 lg:-mt-14 p-4 sm:p-10 lg:p-20">
                <TrailHero />
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mt-10 ">
                    <div className="flex flex-col gap-8 col-span-4">
                        <TrailStats />
                        <TrailOverview />
                        <TrailGallery />
                    </div>
                    <div className="flex flex-col gap-8 col-span-4 lg:col-span-2">
                        <TrailRequirment />
                        <TrailExperience />
                    </div>
                </div>
            </main>
        </div>
    );
}

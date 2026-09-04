import { Map, Phone, Leaf } from 'lucide-react';
import ResourceCard from '../../components/features/ResourceCard';

const resources = [
    {
        icon: Map,
        title: 'Offline Trail Maps',
        description: 'High-resolution GPX and PDF maps for offline navigation.',
        href: '#download-maps',
    },
    {
        icon: Phone,
        title: 'Emergency Guide',
        description: 'Local rescue contacts, protocols, and nearest medical facilities.',
        href: '#download-emergency',
    },
    {
        icon: Leaf,
        title: 'Flora & Fauna Checklist',
        description: 'Identify endemic species and follow Leave No Trace principles.',
        href: '#download-checklist',
    },
];

export default function PreperationResource() {
    return (
        <section className="w-full px-6 py-16 md:px-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
                        Preparation Resources
                    </h2>
                    <p className="text-sm leading-relaxed text-on-surface-variant sm:text-base">
                        Essential guides and maps to ensure a safe and responsible hike.
                    </p>
                </div>

                {/* Resource Cards Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                    {resources.map((resource) => (
                        <ResourceCard key={resource.title} {...resource} />
                    ))}
                </div>
            </div>
        </section>
    );
}

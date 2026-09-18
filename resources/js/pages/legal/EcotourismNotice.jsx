import LegalPageLayout, { PolicySection, PolicyList } from './LegalPageLayout';

export default function EcotourismNotice() {
    return (
        <LegalPageLayout
            title="Ecotourism Policy"
            subtitle="Leave No Trace"
            lastUpdated="September 18, 2026"
        >
            <p className="text-body-md leading-relaxed text-on-surface-variant">
                Mt. Masaraga Protected Landscape is a living ecosystem, not a playground. As
                a condition of entry, every hiker agrees to follow the Leave No Trace
                principles below. Violations are enforced by park staff and may lead to
                permit revocation and administrative fines.
            </p>

            <PolicySection title="1. Plan Ahead and Prepare">
                <PolicyList
                    items={[
                        'Secure a mandatory permit through this booking platform before ascending.',
                        'Check trail conditions and weather updates. Trails close during typhoons, storms, and declared danger periods.',
                        'Keep group sizes within the daily limits published for your chosen trail.',
                        'Carry the required gear listed in the Mandatory Physical Documents Guide, including water, food, and rain protection.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="2. Travel on Durable Surfaces">
                <PolicyList
                    items={[
                        'Stay on marked trails at all times. Do not cut switchbacks or create new paths.',
                        'Walk single file on narrow segments to avoid widening the trail.',
                        'Rest only in designated resting areas. Avoid camping or resting on vegetated slopes and stream banks.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="3. Dispose of Waste Properly">
                <PolicyList
                    items={[
                        'Pack it in, pack it out. All trash you carry up must come back down with you, including food wrappers and cigarette butts.',
                        'Human waste must be buried at least 15 cm deep and 30 meters away from water sources, trails, and camps.',
                        'Do not leave waste in pits, rivers, or bamboo groves. Designated waste collection points are marked on official trail maps.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="4. Leave What You Find">
                <PolicyList
                    items={[
                        'Do not pick plants, dig up roots, or collect seeds, fruits, moss, or bamboo.',
                        'Do not remove rocks, soil, or other natural materials from the mountain.',
                        'Leave artifacts, markings, and cultural objects in place. Report any discovery to park staff.',
                        'Photographs are the only souvenirs you may take from Mt. Masaraga.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="5. Minimize Fire Impact">
                <PolicyList
                    items={[
                        'Open fires are strictly prohibited in all areas of the protected landscape.',
                        'Cooking is allowed only in designated cooking areas using portable stoves that you bring.',
                        'Report any signs of forest fire or illegal clearing to park staff or the emergency hotline immediately.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="6. Respect Wildlife">
                <PolicyList
                    items={[
                        'Observe animals from a distance. Do not chase, feed, or handle wildlife.',
                        'Keep noise levels low to avoid stressing resident fauna, especially bird species active at dawn and dusk.',
                        'Never transport wild animals, eggs, or plants out of the protected area.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="7. Be Considerate of Other Visitors">
                <PolicyList
                    items={[
                        'Yield to descending hikers and to those carrying heavier loads.',
                        'Keep conversation and audio at a level that does not disturb others.',
                        'Follow the instructions of guides and park staff at all times.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="8. Enforcement">
                <p>
                    Park staff and guides are authorized to warn, expel, or report any visitor
                    who violates these rules. Repeat or serious violations are referred to the
                    Protected Area Management Board and may result in fines, suspension of
                    booking privileges, or legal action under the National Integrated Protected
                    Areas System Act and applicable DENR regulations.
                </p>
            </PolicySection>
        </LegalPageLayout>
    );
}
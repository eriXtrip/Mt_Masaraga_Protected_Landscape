import LegalPageLayout, { PolicySection, PolicyList } from './LegalPageLayout';

export default function WildlifeProtection() {
    return (
        <LegalPageLayout
            title="Wildlife Protection"
            subtitle="Conserving Mt. Masaraga's Native Fauna and Flora"
            lastUpdated="September 18, 2026"
        >
            <PolicySection title="1. Legal Framework">
                <p>
                    Mt. Masaraga Protected Landscape is managed under the National Integrated
                    Protected Areas System (NIPAS) Act and aligns with the Wildlife Resources
                    Conservation and Protection Act (Republic Act No. 9147). These laws define
                    the protected area's zones, prohibit the taking of wildlife, and impose
                    penalties on violators.
                </p>
                <p>
                    The Protected Area Management Board (PAMB), supported by the Department
                    of Environment and Natural Resources, enforces these rules and oversees
                    biodiversity monitoring across the landscape.
                </p>
            </PolicySection>

            <PolicySection title="2. What Is Protected">
                <p>
                    All living organisms found within the protected landscape are protected by
                    law, including birds, mammals, reptiles, amphibians, insects, and all
                    native plant species such as the region's moss forest flora and endemic
                    orchids. Species listed under DENR administrative orders as threatened or
                    endangered receive the highest level of protection.
                </p>
            </PolicySection>

            <PolicySection title="3. Prohibited Activities">
                <PolicyList
                    items={[
                        'Hunting, trapping, or collecting any wild animal, egg, or nest.',
                        'Gathering, uprooting, or trading any native plant, orchid, moss, or forest product.',
                        'Introducing non-native or invasive species into the area.',
                        'Disturbing wildlife through feeding, chasing, or excessive noise near nests or dens.',
                        'Damaging habitats by cutting trees, clearing vegetation, or starting fires.',
                        'Removing rocks, soil, or water from the protected area.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="4. Zoning Rules">
                <PolicyList
                    items={[
                        'Strict Protection Zones: closed to entry except for authorized conservation and research activities.',
                        'Core Zones: accessible to hikers only on designated trails and only with a valid permit and guide.',
                        'Buffer and Transition Zones: subject to regulated land use and visitor activities as defined in the protected area management plan.',
                        'Illegal entry into closed zones is treated as a serious violation and is reported for enforcement.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="5. Reporting Violations">
                <p>
                    If you witness wildlife poaching, illegal logging, feeding, or the
                    collection of plants and animals, report it to park staff at the trailhead
                    or to the DENR/PAMB Local Office. Photographic evidence without
                    approaching wildlife is the safest way to document an incident.
                </p>
            </PolicySection>

            <PolicySection title="6. Penalties">
                <p>
                    Violations of wildlife protection rules may be filed under Republic Act
                    No. 9147 and the NIPAS Act. Convictions can carry fines, imprisonment,
                    or both, depending on the species involved and the severity of the
                    offense. Administrative sanctions, including permit revocation and loss
                    of booking privileges, also apply to visitors found in violation.
                </p>
            </PolicySection>

            <PolicySection title="7. How Visitors Can Help">
                <PolicyList
                    items={[
                        'Photograph wildlife from a distance with a zoom lens; never approach.',
                        'Walk quietly and stay on marked trails to avoid damaging habitat.',
                        'Follow the Ecotourism Policy (Leave No Trace), detailed on our policies page.',
                        'Support conservation by following guide instructions and park announcements.',
                    ]}
                />
            </PolicySection>
        </LegalPageLayout>
    );
}
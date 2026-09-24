import LegalPageLayout, { PolicySection, PolicyList } from './LegalPageLayout';

export default function Disclaimer() {
    return (
        <LegalPageLayout
            pageKey="disclaimer"
            title="Disclaimer"
            subtitle="Important Information for Visitors of Mt. Masaraga Protected Landscape"
            lastUpdated="September 18, 2026"
        >
            <PolicySection title="1. General Disclaimer">
                <p>
                    The information on this platform is provided by the Mt. Masaraga Protected
                    Landscape, the Protected Area Management Board (PAMB), and the Department
                    of Environment and Natural Resources (DENR) for general information and
                    booking purposes. We update this information regularly, but we do not
                    guarantee that it is always complete, current, or error-free.
                </p>
                <p>
                    Nothing on this platform constitutes legal, medical, or professional
                    advice, and it is not a substitute for consulting with park staff or
                    qualified professionals.
                </p>
            </PolicySection>

            <PolicySection title="2. Mountain and Trail Activity Risks">
                <p>
                    Hiking and trekking in a protected mountain landscape carries inherent
                    risks, including steep and uneven terrain, slippery trails, changing
                    weather, altitude effects, and physical exhaustion. Such activities may
                    also bring you close to wildlife and remote areas where access to
                    emergency services is limited.
                </p>
                <p>
                    Your participation is voluntary and at your own risk. Assess your fitness,
                    health, and preparation honestly, and follow the safety instructions of
                    your guide and park staff at all times.
                </p>
            </PolicySection>

            <PolicySection title="3. Accuracy of Information">
                <p>
                    Trail conditions, fees, schedules, and requirements may change without
                    prior notice due to weather, conservation work, or management decisions.
                    The information shown on this platform may not reflect the latest status
                    on the ground. Confirm critical details with park staff before you plan
                    your visit.
                </p>
                <PolicyList
                    items={[
                        'Trail status and closure advisories.',
                        'Applicable fees and permits.',
                        'Required documents for entry.',
                        'Operating hours and guide availability.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="4. Third-Party Services">
                <p>
                    Payments on this platform are facilitated through third-party providers,
                    including GCash, Maya, and Landbank. We do not control these providers and
                    are not responsible for their availability, processing times, or terms.
                    Transactions with these providers are governed by their own terms and
                    privacy policies.
                </p>
            </PolicySection>

            <PolicySection title="5. External Links">
                <p>
                    Where this platform links to external websites or resources, such as
                    government pages, those links are provided for your convenience. We do not
                    endorse and are not responsible for the content, accuracy, or practices of
                    external sites.
                </p>
            </PolicySection>

            <PolicySection title="6. Limitation of Liability">
                <p>
                    To the fullest extent permitted by Philippine law, the DENR, the PAMB, and
                    the park office accept no liability for loss, injury, or damage arising
                    from your use of this platform, from the information it contains, or from
                    your participation in activities within the protected area, except where
                    liability is imposed by law.
                </p>
            </PolicySection>

            <PolicySection title="7. Emergency and Assistance">
                <p>
                    In an emergency on the mountain, follow your guide's instructions and the
                    park's evacuation protocol, and contact the DENR/PAMB Local Office at the
                    earliest opportunity. Park staff coordinate search and rescue response.
                </p>
            </PolicySection>

            <PolicySection title="8. Contact">
                <p>
                    For questions or to report outdated or inaccurate information, contact
                    support@masaraga.gov.ph or the DENR/PAMB Local Office, Ligao City, Albay.
                </p>
            </PolicySection>
        </LegalPageLayout>
    );
}
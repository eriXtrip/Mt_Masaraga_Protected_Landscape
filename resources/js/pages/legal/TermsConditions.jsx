import LegalPageLayout, { PolicySection, PolicyList } from './LegalPageLayout';

export default function TermsConditions() {
    return (
        <LegalPageLayout
            title="Terms and Conditions"
            subtitle="Booking and Use of the Mt. Masaraga Protected Landscape Platform"
            lastUpdated="September 18, 2026"
        >
            <PolicySection title="1. Acceptance of Terms">
                <p>
                    The Mt. Masaraga Protected Landscape, under the stewardship of the
                    Protected Area Management Board (PAMB) and the Department of Environment
                    and Natural Resources (DENR), operates this platform to manage permits,
                    trail bookings, and communication with visitors.
                </p>
                <p>
                    By accessing this platform, creating an account, or completing a booking,
                    you agree to these Terms and Conditions, our Privacy Policy, and all
                    applicable laws and DENR regulations that govern entry into the protected
                    area. If you do not agree with any part of these terms, do not use the
                    platform or proceed with a booking.
                </p>
            </PolicySection>

            <PolicySection title="2. Eligibility">
                <p>
                    You must be at least 18 years old, or have the consent of a parent or
                    legal guardian, to create an account and complete a booking. A valid
                    government-issued ID is required at booking and at the trailhead for
                    verification and mandatory visitor registration.
                </p>
                <p>
                    You are responsible for providing accurate information, including your
                    name, contact details, emergency contact, and the details of every member
                    in your group. Information that is false or incomplete may result in the
                    cancellation of your permit without refund of fees beyond those required
                    by law.
                </p>
            </PolicySection>

            <PolicySection title="3. Bookings and Permits">
                <PolicyList
                    items={[
                        'A confirmed booking reserves a slot for the trail and date you selected, subject to available capacity.',
                        'Your booking is confirmed only after payment is completed and a booking reference is issued.',
                        'Entry into the protected area requires a valid permit, which is granted upon compliance with the documented requirements, including health certificates, barangay clearances, and valid IDs.',
                        'Slots are limited and managed by the park office. Late arrival or failure to present required documents may forfeit your slot.',
                        'The park management may cancel, postpone, or modify bookings when required for safety, conservation, or operational reasons.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="4. Payments">
                <p>
                    Payments are collected for the base fee per person and a processing fee,
                    as shown on the booking summary before you confirm. We accept payment
                    through GCash, Maya, and Landbank, and through major card networks where
                    available.
                </p>
                <p>
                    You confirm that you are authorized to use the chosen payment method.
                    Refund eligibility is described in our Refund and Return Policy, which is
                    part of these terms.
                </p>
            </PolicySection>

            <PolicySection title="5. Trail Rules and Code of Conduct">
                <PolicyList
                    items={[
                        'Follow the Ecotourism Policy (Leave No Trace) at all times: carry out what you carry in, stay on marked trails, and leave plants and wildlife undisturbed.',
                        'Obey the instructions of your guide and park staff, especially in evacuation, weather, or emergency situations.',
                        'Do not enter zoned or closed areas. Entry is limited to designated trails with a valid permit.',
                        'Do not bring prohibited items, including firearms, firecrackers, and disposable single-use plastics on the trail.',
                        'Silence or muted mobile devices are required near wildlife and at designated quiet points to avoid disturbing native species.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="6. Cancellations and Refunds">
                <p>
                    Cancellation terms, timelines, and refund eligibility are set out in the
                    Refund and Return Policy. Unless otherwise stated there, the processing
                    fee paid for your booking is non-refundable once a booking is confirmed.
                </p>
            </PolicySection>

            <PolicySection title="7. Your Responsibility for Safety">
                <p>
                    Hiking in a protected mountain landscape involves inherent physical risks,
                    including steep terrain, weather changes, and physical exertion. You
                    participate at your own risk and are responsible for your fitness, health,
                    and preparation, as well as the preparation of every member of your group.
                </p>
                <p>
                    You must disclose any health condition that could affect your safety or
                    the safety of others so that guides and staff can respond appropriately.
                </p>
            </PolicySection>

            <PolicySection title="8. Prohibited Conduct">
                <PolicyList
                    items={[
                        'Reselling, transferring, or using booking references for a purpose other than your own entry.',
                        'Using the platform to misrepresent your identity, group size, or purpose of visit.',
                        'Attempting to access, disrupt, or interfere with the platform, its data, or its security controls.',
                        'Committing acts that violate the Wildlife Resources Conservation and Protection Act (Republic Act No. 9147) or the NIPAS Act.',
                        'Harassing, threatening, or discriminating against park staff or other visitors.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="9. Limitation of Liability">
                <p>
                    The park management works to keep this platform accurate, available, and
                    secure, but provides it on an "as is" and "as available" basis. To the
                    fullest extent permitted by law, the DENR, the PAMB, and the park office
                    are not liable for indirect, incidental, or consequential damages arising
                    from your use of the platform or from events on the mountain.
                </p>
                <p>
                    Nothing in these terms limits liability that cannot be limited under
                    Philippine law, including liability for gross negligence or willful
                    misconduct.
                </p>
            </PolicySection>

            <PolicySection title="10. Changes to These Terms">
                <p>
                    We may update these Terms and Conditions from time to time. Changes will
                    be posted on this page with a revised "Last updated" date. Continued use
                    of the platform after changes take effect constitutes acceptance of the
                    updated terms.
                </p>
            </PolicySection>

            <PolicySection title="11. Governing Law">
                <p>
                    These terms are governed by the laws of the Republic of the Philippines.
                    Any dispute relating to your use of this platform or to activities within
                    the protected area shall be subject to the exclusive jurisdiction of the
                    appropriate courts of Albay.
                </p>
            </PolicySection>

            <PolicySection title="12. Contact">
                <p>
                    Questions about these terms can be sent to support@masaraga.gov.ph or to
                    the DENR/PAMB Local Office, Ligao City, Albay.
                </p>
            </PolicySection>
        </LegalPageLayout>
    );
}
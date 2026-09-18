import LegalPageLayout, { PolicySection, PolicyList } from './LegalPageLayout';

export default function RefundPolicy() {
    return (
        <LegalPageLayout
            title="Refund and Return Policy"
            subtitle="Cancellations, Fees, and Refund Terms"
            lastUpdated="September 18, 2026"
        >
            <PolicySection title="1. Overview">
                <p>
                    A confirmed booking reserves your slot, date, and trail. Once payment is
                    completed, the booking is governed by the cancellation and refund terms
                    described on this page. Please read these terms before confirming your
                    payment.
                </p>
            </PolicySection>

            <PolicySection title="2. Processing Fee">
                <p>
                    Every confirmed booking includes a processing fee of ₱50. This fee is
                    non-refundable once the booking is confirmed, regardless of the reason for
                    cancellation, except where the cancellation is initiated by park
                    management.
                </p>
            </PolicySection>

            <PolicySection title="3. Cancellation by the Visitor">
                <p>
                    If you cancel your booking before the scheduled climb date, the following
                    terms apply:
                </p>
                <PolicyList
                    items={[
                        '48 hours or more before the scheduled climb date: a full refund of the base fee paid, minus the non-refundable processing fee.',
                        '24 to 48 hours before the scheduled climb date: a refund of 50% of the base fee paid, minus the non-refundable processing fee.',
                        'Less than 24 hours before the scheduled climb date or failure to appear at the trailhead on the date booked (no-show): no refund of any kind.',
                    ]}
                />
                <p>
                    To cancel your booking, contact support@masaraga.gov.ph or reach the
                    DENR/PAMB Local Office directly. Cancellation is effective only after you
                    receive a confirmation of the cancellation by email or through the platform.
                </p>
            </PolicySection>

            <PolicySection title="4. Cancellation by Park Management">
                <p>
                    The park management may cancel or reschedule your booking for safety,
                    conservation, or operational reasons, including severe weather, trail
                    damage, or emergency declarations. When a cancellation is initiated by the
                    park, you are entitled to a full refund of all fees paid, including the
                    processing fee.
                </p>
                <p>
                    Where possible, the park office will offer an alternative date or trail.
                    If no suitable alternative is available, a refund will be processed as
                    described in this policy.
                </p>
            </PolicySection>

            <PolicySection title="5. How Refunds Are Issued">
                <PolicyList
                    items={[
                        'Refunds are returned to the original payment method used at the time of booking (GCash, Maya, or Landbank).',
                        'Refunds are processed within 7 to 14 banking days after your cancellation is confirmed.',
                        'Delays caused by the payment provider are outside our control, but park staff will assist in following up on delayed refunds when needed.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="6. No-Show or Failure to Check In">
                <p>
                    A no-show occurs when a confirmed booking is not claimed at the trailhead
                    on the booked date and time. No-shows are treated as a cancellation less
                    than 24 hours before the scheduled climb and are not eligible for a refund
                    of any kind.
                </p>
            </PolicySection>

            <PolicySection title="7. Changes to Trail or Date">
                <p>
                    If you wish to change your trail or date after a booking is confirmed,
                    contact support@masaraga.gov.ph. Changes are subject to availability and
                    park management approval. Where the base fee for the new date or trail is
                    lower, the difference is refunded. Where the fee is higher, you will be
                    asked to pay the difference before the change is confirmed.
                </p>
            </PolicySection>

            <PolicySection title="8. Failed or Duplicate Payments">
                <p>
                    If a payment fails or is duplicated due to a technical error, contact
                    support@masaraga.gov.ph with your booking reference. Verified duplicate
                    payments will be refunded in full, including the processing fee, within
                    7 to 14 banking days.
                </p>
            </PolicySection>

            <PolicySection title="9. Contact">
                <p>
                    For questions about a refund or return request, contact
                    support@masaraga.gov.ph or the DENR/PAMB Local Office, Ligao City, Albay.
                </p>
            </PolicySection>
        </LegalPageLayout>
    );
}
import LegalPageLayout, { PolicySection, PolicyList } from './LegalPageLayout';

export default function CookieTerms() {
    return (
        <LegalPageLayout
            title="Cookie Policy"
            lastUpdated="September 18, 2026"
        >
            <PolicySection title="1. What Cookies Are">
                <p>
                    Cookies are small text files stored on your device when you visit a
                    website. They help the platform remember your preferences, keep you signed
                    in securely, and understand how visitors use the site so it can be
                    improved.
                </p>
            </PolicySection>

            <PolicySection title="2. Cookies We Use">
                <p>We use the following categories of cookies:</p>
                <PolicyList
                    items={[
                        'Essential cookies: required for the platform to function, including session authentication and security protection when you log in or complete a booking. These cannot be disabled.',
                        'Preference cookies: remember your choices such as language and previously viewed trail pages, so you do not have to reselect them.',
                        'Analytics cookies: collect anonymous usage data such as which pages are visited and how long visitors stay, so we can improve the booking experience. This information is aggregated and does not identify you personally.',
                        'Payment session cookies: set temporarily while you complete a payment, to confirm the transaction is processed correctly.',
                    ]}
                />
            </PolicySection>

            <PolicySection title="3. Third-Party Cookies">
                <p>
                    We do not set advertising or profiling cookies on this platform. When you
                    pay through our payment partners (GCash, Maya, or Landbank), those
                    providers may set their own cookies or similar technologies within their
                    own pages. Their practices are governed by their respective privacy and
                    cookie policies.
                </p>
            </PolicySection>

            <PolicySection title="4. Managing Cookies">
                <p>
                    You can control or delete cookies through your browser settings. Most
                    browsers allow you to block cookies entirely, delete existing cookies, or
                    receive a warning before a cookie is stored.
                </p>
                <p>
                    Please note that disabling essential cookies may prevent you from logging
                    in, booking a trail, or completing a payment, since these core functions
                    depend on them.
                </p>
            </PolicySection>

            <PolicySection title="5. Changes to This Policy">
                <p>
                    We may update this Cookie Policy as our technology or legal obligations
                    change. The latest version will always be available on this page with a
                    revised "Last updated" date.
                </p>
            </PolicySection>

            <PolicySection title="6. Contact Us">
                <p>
                    Questions about cookies or how your information is handled can be sent to
                    support@masaraga.gov.ph or to the DENR/PAMB Local Office, Ligao City,
                    Albay.
                </p>
            </PolicySection>
        </LegalPageLayout>
    );
}
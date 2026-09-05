import { useState } from 'react';
import { ChevronDown, Cloud, Receipt, RotateCcw, ShieldCheck } from 'lucide-react';

const FAQ_CATEGORIES = [
    {
        icon: Receipt,
        title: 'Booking & Payments',
        items: [
            {
                question: 'How do I secure a permit?',
                answer:
                    'Permits can be reserved online through our official booking engine by selecting an authorized trail schedule, registering hiker details, and paying the required fees. We recommend booking at least 5 to 7 days before your target climb date as daily climber quotas are strictly observed by the PAMB-DENR office.',
            },
            {
                question: 'What payment methods are accepted?',
                answer:
                    'We accept GCash, Maya, major Credit/Debit cards (Visa & Mastercard), and Landbank / BDO direct bank transfer through our government merchant gateway.',
            },
        ],
    },
    {
        icon: ShieldCheck,
        title: 'Physical Requirements',
        items: [
            {
                question: 'Do I need to upload my Health Certificate?',
                answer: (
                    <>
                        No digital upload is required during online booking. However, you{' '}
                        <strong>must bring physical hard copies</strong> of your valid Medical
                        Certificate ("Fit to Climb") issued within 7 days of the hike date to
                        present to rangers at the jump-off registration desk.
                    </>
                ),
            },
            {
                question: 'What are the mandatory documents to bring?',
                answer:
                    'Hikers must present: (1) Official Booking Ticket / Digital Hike Pass, (2) One Valid Government-issued ID, (3) Physician-signed Health Declaration / Medical Clearance, and (4) Valid Barangay Clearance or Cedula (Community Tax Certificate).',
            },
        ],
    },
    {
        icon: Cloud,
        title: 'Weather & Safety Policies',
        items: [
            {
                question: 'What happens if there is a Typhoon alert?',
                answer:
                    'Under PAGASA Tropical Cyclone Wind Signal (TCWS) #1 or higher, all mountain trails are automatically closed for safety by the DENR-PAMB office. Affected bookings are eligible for free rescheduling within 6 months or a full refund.',
            },
            {
                question: 'Are guides mandatory?',
                answer:
                    'Yes, accredited local DENR ecotourism guides are mandatory at a ratio of 1 guide per 5 hikers to ensure trail safety and environmental preservation.',
            },
        ],
    },
    {
        icon: RotateCcw,
        title: 'Cancellations & Refunds',
        items: [
            {
                question: 'Can I reschedule my hike?',
                answer:
                    'Hike schedules can be rescheduled up to 48 hours prior to your hike date through your Hiker Dashboard or by contacting support, subject to slot availability.',
            },
            {
                question: 'What is the refund policy for weather-related closures?',
                answer:
                    'If trails are closed by PAMB/DENR due to severe weather, force majeure, or volcanic advisories, 100% of registration fees are refunded or credited towards a rescheduled date.',
            },
        ],
    },
];

export default function FAQ() {
    const [openItems, setOpenItems] = useState({ '0-0': true, '1-0': true });

    const toggleItem = (key) => {
        setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <section className="bg-surface px-4 py-8 sm:px-6 sm:py-10 md:py-14">
            <div className="mx-auto max-w-3xl space-y-10 lg:max-w-4xl">
                {FAQ_CATEGORIES.map(({ icon: Icon, title, items }, categoryIndex) => (
                    <div key={title} className="space-y-4">
                        <div className="flex items-center gap-2.5">
                            <Icon className="h-5.5 w-5.5 text-primary" />
                            <h2 className="text-lg font-extrabold tracking-tight text-primary sm:text-xl">
                                {title}
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {items.map(({ question, answer }, itemIndex) => {
                                const key = `${categoryIndex}-${itemIndex}`;
                                const isOpen = !!openItems[key];

                                return (
                                    <div
                                        key={question}
                                        className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm transition-all"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleItem(key)}
                                            aria-expanded={isOpen}
                                            className="flex w-full items-center justify-between gap-3 p-4 text-left text-sm font-semibold text-on-surface transition-colors hover:text-primary sm:p-5 sm:text-base"
                                        >
                                            <span>{question}</span>
                                            <ChevronDown
                                                className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>

                                        {isOpen && (
                                            <div className="border-t border-outline-variant/40 px-4 pb-4 pt-3 text-sm leading-relaxed text-on-surface-variant sm:px-5 sm:pb-5">
                                                {answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
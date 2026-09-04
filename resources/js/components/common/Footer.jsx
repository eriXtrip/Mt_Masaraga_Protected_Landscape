import { Link } from 'react-router-dom';

const QUICK_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Help', to: '/help' },
    { label: 'Contact Us', to: '/contact' },
];

const LEGAL_LINKS = ['Privacy Policy', 'Cookie Policy', 'Ecotourism Policy (Leave No Trace)', 'Wildlife Protection'];

const PAYMENTS = [
    { label: 'Visa/MC', icon: 'card' },
    { label: 'GCash/Maya', icon: 'wallet' },
    { label: 'Landbank', icon: 'bank' },
];

export default function Footer() {
    return (
        <footer className="w-full bg-[#d1ddd3] px-8 py-12 text-[#3f4940] md:px-16 lg:px-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                {/* Brand, Quick Links & Social */}
                <div>
                    <h2 className="mb-6 text-xl font-bold text-[#5b8c31]">
                        Mt. Masaraga Protected Landscape
                    </h2>

                    <div className="mb-8">
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-70">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="transition-colors hover:text-[#5b8c31]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-70">
                            Social Media
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 transition-all hover:bg-[#5b8c31] hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.5 9H16l.5-3h-3V4.5c0-1 .5-1.5 1.5-1.5H16V.1C15.9.1 15 0 14 .0 12.3 0 11 1.2 11 3.4V6H9v3h2v9h2.5V9Z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 transition-all hover:bg-[#5b8c31] hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
                                    <circle cx="12" cy="12" r="3.5" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                aria-label="Share"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 transition-all hover:bg-[#5b8c31] hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.6 13.5 6.8 4M17.4 8.5l-6.8 4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Information & Permits */}
                <div>
                    <h3 className="mb-6 text-sm font-bold uppercase tracking-wider opacity-70">
                        Contact Information
                    </h3>
                    <div className="mb-8 space-y-4">
                        <div className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-5 w-5 text-[#5b8c31]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <a href="mailto:support@masaraga.gov.ph" className="transition-colors hover:text-[#5b8c31]">
                                support@masaraga.gov.ph
                            </a>
                        </div>
                        <div className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-5 w-5 text-[#5b8c31]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <p>Local Office, Brgy. Masaraga, Ligao City, Albay</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-2 text-sm font-bold uppercase tracking-wider opacity-70">
                            Permits &amp; Requirements
                        </h3>
                        <a href="#" className="mb-1 block font-bold text-[#5b8c31] hover:underline">
                            Mandatory Physical Documents Guide
                        </a>
                        <p className="text-xs opacity-70">
                            Requires: Health Certs, Barangay Clearances, Valid ID
                        </p>
                    </div>
                </div>

                {/* Legal & Policies */}
                <div>
                    <h3 className="mb-6 text-sm font-bold uppercase tracking-wider opacity-70">
                        Legal &amp; Policies
                    </h3>
                    <ul className="space-y-3">
                        {LEGAL_LINKS.map((item) => (
                            <li key={item}>
                                <a href="#" className="transition-colors hover:text-[#5b8c31]">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Supported Payments */}
                <div>
                    <h3 className="mb-6 text-sm font-bold uppercase tracking-wider opacity-70">
                        Supported Payments
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                        {PAYMENTS.map((item) => (
                            <div
                                key={item.label}
                                className="flex flex-col items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/40 p-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                                    {item.icon === 'card' && (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                    )}
                                    {item.icon === 'wallet' && (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                                    )}
                                    {item.icon === 'bank' && (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                    )}
                                </svg>
                                <span className="text-[10px] font-bold uppercase">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 text-sm opacity-60 md:flex-row">
                <p>&copy; 2024 Mt. Masaraga Protected Landscape. All rights reserved.</p>
                <p className="font-bold text-[#5b8c31]">Mandatory Permit Required for Entry.</p>
            </div>
        </footer>
    );
}

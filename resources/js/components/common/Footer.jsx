import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../brandlogo/facebook.svg';
import X from '../brandlogo/x.svg';
import Instagram from '../brandlogo/instagram.svg';
import Visa from '../brandlogo/visa.svg';
import Mastercard from '../brandlogo/mastercard.svg';
import Gcash from '../brandlogo/gcash.svg';
import Maya from '../brandlogo/maya.svg';
import Landbank from '../brandlogo/landbank.svg';

const QUICK_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Help', to: '/help' },
    { label: 'Contact Us', to: '/contact' },
];

const LEGAL_LINKS = [
    'Privacy Policy',
    'Cookie Policy',
    'Ecotourism Policy (Leave No Trace)',
    'Wildlife Protection'
];

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-surface-dim pt-12 pb-8 text-inverse-surface font-sans">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">

                {/* 5-Column Grid Layout */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-12">

                    {/* Column 1: Quick Links */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider opacity-70">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
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

                    {/* Column 2: Social Media */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider opacity-70">
                            Social Media
                        </h3>
                        <div className="flex gap-3 items-center">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/60 p-2 transition-all hover:bg-[#5b8c31] hover:text-white"
                            >
                                <img src={Facebook} alt="Facebook" className="h-4 w-4 object-contain" />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/60 p-2 transition-all hover:bg-[#5b8c31] hover:text-white"
                            >
                                <img src={Instagram} alt="Instagram" className="h-4 w-4 object-contain" />
                            </a>
                            <a
                                href="#"
                                aria-label="X"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/60 p-2 transition-all hover:bg-[#5b8c31] hover:text-white"
                            >
                                <img src={X} alt="X" className="h-4 w-4 object-contain" />
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Contact Information & Permits */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider opacity-70">
                            Contact Information
                        </h3>
                        <div className="space-y-3 text-xs">
                            <div className="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0 text-[#5b8c31]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <a href="mailto:support@masaraga.gov.ph" className="transition-colors hover:text-[#5b8c31]">
                                    support@masaraga.gov.ph
                                </a>
                            </div>
                            <div className="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0 text-[#5b8c31]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <p>Local Office, Brgy. Masaraga, Ligao City, Albay</p>
                            </div>

                            <div className="pt-2">
                                <h3 className="mb-1 text-xs font-bold uppercase tracking-wider opacity-70">
                                    Permits & Requirements
                                </h3>
                                <a href="#" className="block font-bold text-[#5b8c31] hover:underline">
                                    Mandatory Physical Documents Guide
                                </a>
                                <p className="text-[11px] opacity-70">
                                    Requires: Health Certs, Barangay Clearances, Valid ID
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Legal & Policies */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider opacity-70">
                            Legal & Policies
                        </h3>
                        <ul className="space-y-2 text-xs">
                            {LEGAL_LINKS.map((item) => (
                                <li key={item}>
                                    <a href="#" className="transition-colors hover:text-[#5b8c31]">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Supported Payments */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider opacity-70">
                            Supported Payments
                        </h3>
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="flex h-8 items-center justify-center rounded-lg border border-black/10 bg-white/60 px-3 py-1.5 shadow-xs">
                                <img src={Visa} alt="Visa" className="h-4 w-auto object-contain" />
                            </div>
                            <div className="flex h-8 items-center justify-center rounded-lg border border-black/10 bg-white/60 px-3 py-1.5 shadow-xs">
                                <img src={Mastercard} alt="Mastercard" className="h-4 w-auto object-contain" />
                            </div>
                            <div className="flex h-8 items-center justify-center rounded-lg border border-black/10 bg-white/60 px-3 py-1.5 shadow-xs">
                                <img src={Gcash} alt="GCash" className="h-4 w-auto object-contain" />
                            </div>
                            <div className="flex h-8 items-center justify-center rounded-lg border border-black/10 bg-white/60 px-3 py-1.5 shadow-xs">
                                <img src={Maya} alt="Maya" className="h-4 w-auto object-contain" />
                            </div>
                            <div className="flex h-8 items-center justify-center rounded-lg border border-black/10 bg-white/60 px-3 py-1.5 shadow-xs">
                                <img src={Landbank} alt="Landbank" className="h-4 w-auto object-contain" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Thin Structural Divider Line */}
                <div className="w-full border-t border-black/10 mb-6" />

                {/* Bottom Flexbox Bar */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm opacity-70">
                    <p>&copy; 2024 Mt. Masaraga Protected Landscape. All rights reserved.</p>
                    <p className="font-bold text-[#5b8c31]">Mandatory Permit Required for Entry.</p>
                </div>

            </div>

            {/* Oversized Background Watermark Brand Logo */}
            <div className="mt-8 flex justify-center overflow-hidden opacity-50 select-none pointer-events-none">
                <div className="flex items-center gap-4 text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-on-surface whitespace-nowrap">
                    <img
                        src="/assets/logo/MT. MASARAGA LOGO.svg"
                        alt="Mt. Masaraga Protected Landscape"
                        className="h-20 sm:h-32 md:h-40 w-auto"
                    />
                </div>
            </div>
        </footer>
    );
}
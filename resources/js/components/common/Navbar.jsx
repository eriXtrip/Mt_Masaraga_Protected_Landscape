import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Help', to: '/help' },
    { label: 'Contact Us', to: '/contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const close = () => setOpen(false);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? 'bg-white/20 shadow-xs backdrop-blur-xl'
                : 'bg-white/2'
                }`}
        >
            <nav className="mx-auto flex h-13 w-full items-center justify-between gap-6 pr-5 lg:h-14">
                {/* Logo / Brand */}
                <Link
                    to="/"
                    className="flex h-full shrink-0 items-center pl-3 pr-5 md:pl-6 md:pr-8"
                    onClick={close}
                >
                    <img
                        src="/assets/logo/MT. MASARAGA LOGO.svg"
                        alt="Mt. Masaraga Protected Landscape"
                        className="h-10 w-auto object-contain lg:h-12"
                    />
                </Link>

                {/* Desktop navigation */}
                <ul className="hidden items-center gap-8 pt-1 md:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `pb-1 text-xs font-semibold uppercase tracking-[0.05em] transition-colors ${isActive
                                        ? 'border-b-2 border-primary text-primary'
                                        : 'text-on-surface-variant hover:text-primary'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Auth actions */}
                <div className="hidden items-center gap-4 md:flex">
                    <Link
                        to="/login"
                        className="rounded px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-primary transition-colors hover:bg-surface-variant"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="rounded bg-primary px-6 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white hover:text-on-primary shadow-sm transition-colors hover:bg-primary-fixed-dim"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    aria-label="Toggle menu"
                    onClick={() => setOpen((v) => !v)}
                    className="flex h-10 w-10 items-center justify-center rounded p-2 text-on-surface-variant transition-colors hover:bg-surface-variant md:hidden"
                >
                    {open ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden bg-surface transition-[max-height] duration-300 md:hidden ${open ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <ul className="flex flex-col gap-1 px-4 py-4">
                    {NAV_LINKS.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                onClick={close}
                                className={({ isActive }) =>
                                    `block rounded-lg px-4 py-2 text-sm font-medium ${isActive
                                        ? 'bg-primary-container text-on-primary-container'
                                        : 'text-on-surface hover:bg-surface-container'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                    <li className="mt-2 flex flex-col gap-3 border-t border-outline-variant pt-4">
                        <Link
                            to="/login"
                            onClick={close}
                            className="rounded border border-primary px-4 py-2 text-center text-sm font-semibold text-primary"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            onClick={close}
                            className="rounded bg-primary px-4 py-2 text-center text-sm font-semibold text-on-primary"
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

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
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 w-full bg-on-background">
            <nav className="mx-auto flex h-14 w-full max-w-380 items-center justify-between gap-6 px-6">
                {/* Logo / Brand */}
                <Link
                    to="/"
                    className="flex h-full shrink-0 items-center"
                    onClick={close}
                >
                    <img
                        src="/assets/logo/MT. MASARAGA LOGO.svg"
                        alt="Mt. Masaraga Protected Landscape"
                        className="h-10 w-auto object-contain lg:h-12"
                    />
                </Link>

                {/* Desktop navigation */}
                <ul className="hidden items-center gap-6 md:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.to} className="relative">
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `relative py-2 text-sm font-medium transition-colors ${isActive
                                        ? 'text-on-secondary before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-on-secondary'
                                        : 'text-on-primary hover:text-on-secondary'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Auth actions - using design system button variants */}
                <div className="hidden items-center gap-3 md:flex">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => navigate('/login')}
                        className={"capitalize bg-transparent text-on-primary border-on-primary hover:border-muted"}
                    >
                        Login
                    </Button>
                    <Button
                        variant="default"
                        size="lg"
                        onClick={() => navigate('/signup')}
                        className={"capitalize"}
                    >
                        Sign Up
                    </Button>
                </div>

                {/* Mobile hamburger */}
                <Button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="flex1 h-10 w-10 items-center justify-center rounded-md text-on-secondary transition-colors hover:bg-surface-container md:hidden"
                >
                    {open ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                            className="h-5 w-5"
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
                </Button>
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
                                    `block rounded-lg px-4 py-3 text-base font-medium ${isActive
                                        ? 'bg-primary-container text-on-primary-container'
                                        : 'text-on-surface hover:bg-surface-container'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                    <li className="mt-3 flex flex-col gap-3 border-t border-outline-variant pt-4">
                        <Link
                            to="/login"
                            onClick={close}
                            className="rounded-md border border-primary px-4 py-3 text-center text-base font-semibold text-primary"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            onClick={close}
                            className="rounded-md bg-primary px-4 py-3 text-center text-base font-semibold text-on-primary"
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

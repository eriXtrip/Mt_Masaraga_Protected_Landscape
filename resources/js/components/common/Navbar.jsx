import { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ChevronDown, Receipt, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Help', to: '/help' },
    { label: 'Contact Us', to: '/contact' },
];

const HIKER_DROPDOWN = [
    { label: 'Transactions', to: '/hiker/transactions', icon: Receipt },
    { label: 'Messages', to: '/hiker/messages', icon: MessageSquare },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [hikerDropdownOpen, setHikerDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setHikerDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const closeAll = () => {
        setOpen(false);
        setHikerDropdownOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-on-background">
            <nav className="mx-auto flex h-14 w-full max-w-380 items-center justify-between gap-6 px-6">
                {/* Logo / Brand */}
                <Link
                    to="/"
                    className="flex h-full shrink-0 items-center"
                    onClick={closeAll}
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

                    {/* Hiker Dropdown Menu */}
                    <li className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            onClick={() => setHikerDropdownOpen((prev) => !prev)}
                            className="flex items-center gap-1 py-2 text-sm font-medium text-on-primary hover:text-on-secondary transition-colors cursor-pointer"
                        >
                            <span>Hiker</span>
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${hikerDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu Popup */}
                        {hikerDropdownOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                                {HIKER_DROPDOWN.map((item) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <Link
                                            key={item.to}
                                            to={item.to}
                                            onClick={closeAll}
                                            className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-on-surface hover:bg-primary/10 hover:text-primary transition-colors"
                                        >
                                            <IconComponent className="h-4 w-4 text-primary shrink-0" />
                                            <span>{item.label}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </li>
                </ul>

                {/* Auth actions */}
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
                className={`overflow-hidden bg-surface transition-[max-height] duration-300 md:hidden ${open ? 'max-h-[500px]' : 'max-h-0'
                    }`}
            >
                <ul className="flex flex-col gap-1 px-4 py-4">
                    {NAV_LINKS.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                onClick={closeAll}
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

                    {/* Hiker Mobile Submenu Section */}
                    <li className="border-t border-outline-variant/30 pt-2 mt-1">
                        <span className="px-4 text-xs font-bold text-outline uppercase tracking-wider block mb-1">
                            Hiker Navigation
                        </span>
                        {HIKER_DROPDOWN.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={closeAll}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-semibold ${isActive
                                            ? 'bg-primary-container text-on-primary-container'
                                            : 'text-on-surface hover:bg-surface-container'
                                        }`
                                    }
                                >
                                    <IconComponent className="h-4 w-4 text-primary shrink-0" />
                                    <span>{item.label}</span>
                                </NavLink>
                            );
                        })}
                    </li>

                    <li className="mt-3 flex flex-col gap-3 border-t border-outline-variant pt-4">
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => {
                                closeAll();
                                navigate('/login');
                            }}
                            className={"capitalize bg-transparent text-primary border-primary hover:border-muted"}
                        >
                            Login
                        </Button>
                        <Button
                            variant="default"
                            size="lg"
                            onClick={() => {
                                closeAll();
                                navigate('/signup');
                            }}
                            className={"capitalize"}
                        >
                            Sign Up
                        </Button>
                    </li>
                </ul>
            </div>
        </header>
    );
}
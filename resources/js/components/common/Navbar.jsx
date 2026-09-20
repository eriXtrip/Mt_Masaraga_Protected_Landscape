import { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
    ChevronDown,
    LogOut,
    ShieldCheck,
    ScrollText,
    MessageSquare,
    LayoutDashboard,
    Ticket,
    UserRound
} from 'lucide-react';
import { Button } from "@/components/ui/button";

import { MOCK_USERS } from '../../mockData';

const ROLE_BADGES = {
    1: { label: 'Admin', bg: 'bg-amber-600 text-white border-amber-300' },
    2: { label: 'Park Staff', bg: 'bg-emerald-600 text-white border-emerald-300' },
    3: { label: 'Hiker', bg: 'bg-primary text-white border-primary-container' },
};

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Help', to: '/help' },
    { label: 'Contact Us', to: '/contact' },
];

const HIKER_USER_LINKS = [
    { label: 'My Dashboard', to: '/hiker/dashboard', icon: LayoutDashboard },
    { label: 'My Transactions', to: '/hiker/transactions', icon: ScrollText },
    { label: 'My Digital Passes', to: '/hiker/passes', icon: Ticket },
    { label: 'Messages & Chat', to: '/hiker/messages', icon: MessageSquare },
    { label: 'My Profile', to: '/hiker/profile', icon: UserRound },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Authentication State using imported MOCK_USERS
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [currentUserIndex, setCurrentUserIndex] = useState(0);

    useEffect(() => {
        const stored = localStorage.getItem('currentUser');
        if (stored) {
            const user = JSON.parse(stored);
            const index = MOCK_USERS.findIndex((u) => u.id === user.id);
            if (index !== -1) {
                setIsLoggedIn(true);
                setCurrentUserIndex(index);
            }
        }
    }, []);

    // Current active user from array
    const currentUser = MOCK_USERS[currentUserIndex] || MOCK_USERS[0];

    // Helper to extract initials (e.g., "Juan Dela Cruz" -> "JD")
    const getInitials = (name) => {
        if (!name) return 'U';
        const parts = name.trim().split(' ');
        if (parts.length === 1) return parts[0][0].toUpperCase();
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    };

    const userDropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close user dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setUserDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const closeAll = () => {
        setOpen(false);
        setUserDropdownOpen(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('currentUser');
        closeAll();
        navigate('/');
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

                {/* Desktop Navigation */}
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

                {/* Auth Actions / User Profile Badge */}
                <div className="hidden items-center gap-3 md:flex">
                    {isLoggedIn ? (
                        <div className="relative" ref={userDropdownRef}>
                            <button
                                type="button"
                                onClick={() => setUserDropdownOpen((prev) => !prev)}
                                className="flex items-center gap-3 p-1.5 rounded-full hover:bg-surface-container/20 transition-colors cursor-pointer"
                            >
                                {/* Role-styled Initials Avatar */}
                                <div className={`w-9 h-9 rounded-full text-xs text-inverse-on-surface font-bold flex items-center justify-center shrink-0 border ${ROLE_BADGES[currentUser.role]?.bg}`}>
                                    {getInitials(currentUser.name)}
                                </div>
                                <div className="text-left leading-tight hidden xl:block">
                                    <h4 className="text-xs font-bold text-inverse-on-surface truncate flex items-center gap-1">
                                        {currentUser.name}
                                        {currentUser.role === 1 && <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />}
                                    </h4>
                                    <p className="text-[10px] font-medium text-on-primary/70 truncate">{currentUser.subtitle}</p>
                                </div>
                                <ChevronDown className={`h-4 w-4 text-on-primary transition-transform duration-200 ${userDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* User Menu Dropdown */}
                            {userDropdownOpen && (
                                <div className="absolute right-0 top-full w-60 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">

                                    {/* User Header Info */}
                                    <div className="px-3 py-2 border-b border-outline-variant/20 mb-1">
                                        <p className="text-xs font-bold text-on-surface">{currentUser.name}</p>
                                        <p className="text-[10px] text-on-surface-variant font-medium">{currentUser.subtitle}</p>
                                    </div>

                                    {/* Hiker Profile Navigation Options (Transactions & Messages) */}
                                    <div className="space-y-0.5 py-1 border-b border-outline-variant/20 mb-1">
                                        <span className="text-[9px] font-bold text-outline uppercase tracking-wider block mb-1 px-3">
                                            Hiker Account
                                        </span>
                                        {HIKER_USER_LINKS.map((item) => {
                                            const IconComponent = item.icon;
                                            return (
                                                <Link
                                                    key={item.to}
                                                    to={item.to}
                                                    onClick={closeAll}
                                                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-on-surface hover:bg-primary/10 hover:text-primary transition-colors"
                                                >
                                                    <IconComponent className="h-4 w-4 shrink-0 text-primary" />
                                                    <span>{item.label}</span>
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    {/* Logout Button */}
                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                                    >
                                        <LogOut className="h-4 w-4 shrink-0" />
                                        <span>Log Out</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => navigate('/login')}
                                className="capitalize bg-transparent text-on-primary border-on-primary hover:border-muted"
                            >
                                Login
                            </Button>
                            <Button
                                variant="default"
                                size="lg"
                                onClick={() => navigate('/signup')}
                                className="capitalize"
                            >
                                Sign Up
                            </Button>
                        </>
                    )}
                </div>

                {/* Mobile Hamburger Toggle */}
                <Button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="flex h-10 w-10 items-center justify-center rounded-md text-on-secondary transition-colors hover:bg-surface-container md:hidden"
                >
                    {open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </Button>
            </nav>

            {/* Mobile Menu Drawer */}
            <div className={`overflow-hidden bg-surface transition-[max-height] duration-300 md:hidden ${open ? 'max-h-160' : 'max-h-0'}`}>
                <ul className="flex flex-col gap-1 px-4 py-4">
                    {isLoggedIn && (
                        <li className="flex items-center gap-3 px-4 py-3 border-b border-outline-variant/30 mb-2">
                            <div className={`w-10 h-10 rounded-full text-sm font-bold flex items-center justify-center shrink-0 border ${ROLE_BADGES[currentUser.role]?.bg}`}>
                                {getInitials(currentUser.name)}
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-on-surface">{currentUser.name}</h4>
                                <p className="text-xs text-on-surface-variant">{currentUser.subtitle}</p>
                            </div>
                        </li>
                    )}

                    {/* General Page Links */}
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

                    {/* Logged In Hiker Quick Links */}
                    {isLoggedIn && (
                        <li className="border-t border-outline-variant/30 pt-2">
                            <span className="px-4 text-xs font-bold text-outline uppercase tracking-wider block mb-1">
                                Hiker Account
                            </span>
                            {HIKER_USER_LINKS.map((item) => {
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
                                        <IconComponent className="h-4 w-4 shrink-0 text-primary" />
                                        <span>{item.label}</span>
                                    </NavLink>
                                );
                            })}
                        </li>
                    )}

                    {/* Auth Action Buttons */}
                    <li className="flex flex-col gap-3 border-t border-outline-variant pt-4">
                        {isLoggedIn ? (
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleLogout}
                                className="capitalize bg-transparent text-red-600 border-red-600 hover:bg-red-50"
                            >
                                Log Out
                            </Button>
                        ) : (
                            <>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => {
                                        closeAll();
                                        navigate('/login');
                                    }}
                                    className="capitalize bg-transparent text-primary border-primary hover:border-muted"
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
                                    className="capitalize"
                                >
                                    Sign Up
                                </Button>
                            </>
                        )}
                    </li>
                </ul>
            </div>
        </header>
    );
}
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Mountain from '../../components/icons/Mountain';
import Hiking from '../../components/icons/Hiking';
import { ArrowRight, Eye, EyeOff, ShieldCheck, Mail } from 'lucide-react';
import MtMasaraga from '../../../../public/images/loginSignup/mt-masaraga-hero.jpg'


export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: '',
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-surface text-on-surface lg:flex-row">
            {/* Left Side: Hero Image */}
            <div className="hidden w-full shrink-0 bg-cover bg-center bg-surface-variant lg:flex lg:w-[42%] xl:w-[40%] relative flex-col justify-end p-12">
                <img
                    src={MtMasaraga}
                    alt="Mt. Masaraga covered in lush green rainforest piercing through morning mist"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent" />
                <div className="relative z-10 mb-12 flex max-w-lg flex-col gap-4">
                    <div className="flex items-center gap-2 text-white">
                        <Mountain className="h-10 w-15" />
                        <span className="text-headline-md font-bold tracking-tight">
                            Mt. Masaraga PL
                        </span>
                    </div>
                    <p className="leading-relaxed text-body-lg text-white/90">
                        Welcome back to the Mt. Masaraga PL. Sign in to access your registered trail permits, check scheduled climbs, coordinate with accredited guides, and view your verified hiker credentials.
                    </p>
                    <div className="mt-2 flex items-center gap-4 border-t border-white/20 pt-4 text-xs text-white/80">
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="h-4.5 w-4.5" />
                            <span>DENR-PASu Certified</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Hiking className="h-4.5 w-4.5" />
                            <span>Eco-Hiker Network</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="flex min-h-screen w-full flex-col justify-between overflow-y-auto bg-surface-container-lowest p-6 sm:p-10 md:p-14 lg:w-[58%] lg:p-16 xl:w-[60%]">
                <div className="max-w-md w-full mx-auto pt-5 pb-12">
                    {/* Header + Mobile Logo */}
                    <div className="flex items-center gap-2 text-primary lg:hidden">
                        <Mountain className="h-13 w-13" />
                        <span className="text-headline-md font-bold">Mt. Masaraga PL</span>
                    </div>
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-headline-lg-mobile font-bold text-on-surface md:text-headline-lg">
                            Welcome Back
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            Log in to manage your bookings and permits.
                        </p>
                    </div>

                    {/* Form Area */}
                    <div className="flex h-150 flex-col justify-start overflow-y-auto px-1">
                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-outline" />
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => update('email', e.target.value)}
                                        placeholder="name@example.com"
                                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-2 pl-9 pr-3 text-body-sm text-on-surface placeholder:text-outline transition-all focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block font-label-md text-label-md text-on-surface" htmlFor="password">
                                        Password
                                    </label>
                                    <a className="font-label-md text-label-md text-primary hover:underline" href="/forgot-password">
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        value={form.password}
                                        onChange={(e) => update('password', e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 pr-10 text-body-sm text-on-surface placeholder:text-outline transition-all focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors hover:text-on-surface focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    name="remember"
                                    type="checkbox"
                                    checked={form.remember}
                                    onChange={(e) => update('remember', e.target.checked)}
                                    className="h-4 w-4 cursor-pointer rounded border-outline-variant bg-surface-container-lowest text-primary transition-colors focus:ring-primary focus:ring-offset-surface"
                                />
                                <label className="ml-3 font-body-sm text-body-sm text-on-surface-variant" htmlFor="remember">
                                    Remember Me
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-label-md font-semibold text-on-secondary shadow-sm transition-colors hover:bg-surface-tint"
                            >
                                Login
                                <ArrowRight className="h-4.5 w-4.5" />
                            </button>
                        </form>

                        {/* Sign Up Redirect */}
                        <div className="text-center mt-6">
                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                                Don't have an account yet?
                                <Link
                                    to="/signup"
                                    className="font-label-md text-label-md text-primary hover:underline ml-1 font-semibold"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

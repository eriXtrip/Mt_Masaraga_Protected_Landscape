import { useState } from 'react';
import { Link } from 'react-router-dom';
import Mountain from '../../components/icons/Mountain';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
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
        <div className="flex min-h-screen w-full flex-col bg-background text-on-background lg:flex-row">
            {/* Left Side: Hero Image */}
            <div className="flex w-1/2 h-screen relative overflow-hidden">
                <img
                    src={MtMasaraga}
                    alt="Mt. Masaraga covered in lush green rainforest piercing through morning mist"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                <div className="absolute bottom-20 left-12 text-white">
                    <h1 className="text-4xl mb-4 drop-shadow-md uppercase font-bold">
                        Mt. Masaraga<br />Protected Landscape
                    </h1>
                    <p className="text-sm max-w-md drop-shadow">
                        Experience the untouched beauty. Secure your permit and plan your journey today.
                    </p>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full md:w-1/2 h-screen flex flex-col justify-center px-6 md:px-12 bg-surface-container-lowest shadow-[-4px_0_24px_rgba(69,101,83,0.05)] overflow-y-auto">
                <div className="max-w-md w-full mx-auto py-12">
                    {/* Header */}
                    <div className="mb-12 text-center md:text-left">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-container text-on-primary-container mb-6 md:mb-8">
                            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                                <Mountain className='w-12 h-12' />
                            </span>
                        </div>
                        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">
                            Welcome Back
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            Log in to manage your bookings and permits.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) => update('email', e.target.value)}
                                placeholder="name@example.com"
                                className="w-full h-12 px-4 bg-surface rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block font-label-md text-label-md text-on-surface" htmlFor="password">
                                    Password
                                </label>
                                <a className="font-label-md text-label-md text-primary hover:underline" href="#">
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
                                    className="w-full h-12 px-4 pr-10 bg-surface rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
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
                                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface"
                            />
                            <label className="ml-3 font-body-sm text-body-sm text-on-surface-variant" htmlFor="remember">
                                Remember Me
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full h-12 bg-primary hover:bg-surface-tint text-on-primary font-label-md text-label-md rounded-lg shadow-[0_4px_12px_rgba(69,101,83,0.1)] transition-all flex items-center justify-center gap-2"
                        >
                            Login
                            <ArrowRight className="h-[18px] w-[18px]" />
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
    );
}

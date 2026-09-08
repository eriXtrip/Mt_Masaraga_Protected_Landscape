import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Mountain from '../../components/icons/Mountain';
import Hiking from '../../components/icons/Hiking';
import ProgressNode from '../../components/features/ProgressNode';
import MtMasaragaCampsite from '../../../../public/images/loginSignup/MtmasaragaCampsite.jpg'
import { Button } from "@/components/ui/button";
import {

    ArrowRight,
    ArrowLeft,
    Mail,
    CheckCircle2,
    Check,
    ShieldCheck,
    Eye,
    EyeOff,
    RefreshCw,
    MailCheck,
    KeyRound,
    Info,
} from 'lucide-react';

const TOTAL_STEPS = 3;
const STEP_TITLES = [
    'Find Account',
    'Reset Code',
    'New Password',
];

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState('forward');

    const [form, setForm] = useState({
        email: '',
        otp: ['', '', '', '', '', ''],
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [codeSent, setCodeSent] = useState(false);
    const [codeCountdown, setCodeCountdown] = useState(0);
    const [resetSuccess, setResetSuccess] = useState(false);

    const otpRefs = useRef([]);

    const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

    const goToStep = (step) => {
        if (step < 1 || step > TOTAL_STEPS) return;
        setDirection(step > currentStep ? 'forward' : 'backward');
        setCurrentStep(step);
    };

    const handleSendCode = () => {
        setCodeSent(true);
        setCodeCountdown(60);
        const timer = setInterval(() => {
            setCodeCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setCodeSent(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const handleOtpChange = (index, value) => {
        if (!/^\d?$/.test(value)) return;
        const otp = [...form.otp];
        otp[index] = value;
        update('otp', otp);
        if (value && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !form.otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const getPasswordStrength = () => {
        const p = form.password;
        let score = 0;
        if (/[A-Z]/.test(p)) score++;
        if (/[a-z]/.test(p)) score++;
        if (/[0-9]/.test(p)) score++;
        if (/[^A-Za-z0-9]/.test(p)) score++;
        return score;
    };

    const strength = getPasswordStrength();
    const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];
    const strengthColors = ['text-error', 'text-error', 'text-tertiary', 'text-primary'];

    return (
        <div className="flex min-h-screen w-full flex-col bg-surface text-on-surface lg:flex-row">
            {/* Left Side: Hero Image Background */}
            <div className="hidden w-full shrink-0 bg-cover bg-center bg-surface-variant lg:flex lg:w-[42%] xl:w-[40%] relative flex-col justify-end p-12">
                <img
                    src={MtMasaragaCampsite}
                    alt="Mt. Masaraga Campsite"
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
                        Secure your verified hiker profile to seamlessly access your registered trail
                        permits, coordinate with accredited guides, and safeguard protected wildlife
                        habitat.
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

            {/* Right Side: Multi-Step Forgot Password Form */}
            <div className="flex min-h-screen w-full flex-col justify-between overflow-y-auto bg-surface-container-lowest p-6 sm:p-10 md:p-14 lg:w-[58%] lg:p-16 xl:w-[60%]">
                <div className="max-w-md w-full mx-auto pt-5 pb-12">
                    {/* Header + Mobile Logo */}
                    <div className="flex items-center gap-2 text-primary lg:hidden">
                        <Mountain className="h-13 w-13" />
                        <span className="text-headline-md font-bold">Mt. Masaraga PL</span>
                    </div>
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-headline-lg-mobile font-bold text-on-surface md:text-headline-lg">
                            Reset Your Password
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            Recover your account and continue enjoying the trails.
                        </p>
                    </div>

                    {/* Stepper Progress Tracker */}
                    <div className="w-full pb-4">
                        <div className="relative mb-6 flex w-full items-center">
                            {[1, 2, 3].map((step, index) => {
                                const isCompleted = step < currentStep;
                                const isActive = step === currentStep;
                                return (
                                    <div key={step} className={`flex items-center ${index < 2 ? 'flex-1' : ''}`}>
                                        <ProgressNode
                                            step={step}
                                            name={STEP_TITLES[step - 1]}
                                            isActive={isActive}
                                            isCompleted={isCompleted}
                                            onClick={() => goToStep(step)}
                                            color="primary"
                                        />
                                        {index < 2 && (
                                            <div className="mx-2 h-0.75 flex-1 rounded-full bg-surface-container-highest">
                                                <div
                                                    className="h-full rounded-full bg-primary transition-all duration-300"
                                                    style={{ width: currentStep > step ? '100%' : '0%' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        {/* Mobile counter */}
                        <div className="flex justify-between px-1 text-[11px] font-medium text-on-surface-variant sm:hidden">
                            <span>
                                Step {currentStep} of {TOTAL_STEPS}
                            </span>
                            <span className="font-semibold text-primary">{STEP_TITLES[currentStep - 1]}</span>
                        </div>
                    </div>

                    {/* STEP CONTAINERS */}
                    <div className="flex h-150 flex-col justify-start overflow-y-auto px-1">
                        {/* STEP 1: Find Account */}
                        {currentStep === 1 && (
                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                    Step 1 &bull; Identification
                                </span>
                                <h1 className="text-headline-lg-mobile font-bold text-on-surface md:text-headline-lg">
                                    Find your account
                                </h1>
                                <p className="text-body-md text-on-surface-variant">
                                    Enter your email associated with your account and we&apos;ll send instructions to
                                    reset your password.
                                </p>
                                <div className="mt-6 flex flex-col gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-label-md font-semibold text-on-surface">
                                            Email Address <span className="text-error">*</span>
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-outline" />
                                            <input
                                                type="email"
                                                value={form.email}
                                                onChange={(e) => update('email', e.target.value)}
                                                placeholder="juan.delacruz@gmail.com"
                                                className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-2 pl-9 pr-3 text-body-sm text-on-surface placeholder:text-outline transition-all focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                            />
                                        </div>
                                        <p className="mt-1 flex items-center gap-1 text-xs text-on-surface-variant">
                                            <Info className="h-3.75 w-3.75 text-primary" />
                                            Must match the email registered with your DENR trail permit profile.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <Button
                                        type="button"
                                        variant='default'
                                        size='lg'
                                        onClick={() => {
                                            handleSendCode();
                                            goToStep(2);
                                        }}
                                    >
                                        <span>Send Reset Code</span>
                                        <ArrowRight className="h-4.5 w-4.5" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: Reset Code */}
                        {currentStep === 2 && (
                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                    Step 2 &bull; Verification
                                </span>
                                <h1 className="text-headline-lg-mobile font-bold text-on-surface md:text-headline-lg">
                                    Enter Reset Code
                                </h1>
                                <p className="text-body-md text-on-surface-variant">
                                    Enter the 6-digit verification code we sent to{' '}
                                    <span className="font-semibold text-on-surface">
                                        {form.email || 'your email'}
                                    </span>.
                                </p>
                                <div className="mt-6 flex flex-col items-center gap-5">
                                    <div className="flex w-full max-w-sm justify-between gap-1">
                                        {form.otp.map((val, i) => (
                                            <input
                                                key={i}
                                                ref={(el) => { otpRefs.current[i] = el; }}
                                                type="text"
                                                maxLength={1}
                                                value={val}
                                                onChange={(e) => handleOtpChange(i, e.target.value)}
                                                onKeyDown={(e) => handleOtpKeyDown(i, e)}
                                                placeholder="·"
                                                className={`h-11 w-9 rounded-lg border-2 bg-surface-container-lowest text-center text-lg font-bold text-on-surface transition-all focus:ring-2 focus:ring-primary focus:outline-none sm:h-12 sm:w-10 ${val ? 'border-primary' : 'border-outline-variant'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                                        <span>Did not receive the code?</span>
                                        <button
                                            type="button"
                                            onClick={handleSendCode}
                                            disabled={codeCountdown > 0}
                                            className="flex items-center gap-1 font-semibold text-primary hover:underline focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <RefreshCw className="h-3.5 w-3.5" />
                                            {codeCountdown > 0
                                                ? `Resend Code (${codeCountdown}s)`
                                                : 'Resend Code'}
                                        </button>
                                    </div>
                                    <div className="flex w-full items-start gap-2.5 rounded-lg border border-outline-variant/60 bg-surface-container-low p-3 text-xs text-on-surface-variant">
                                        <MailCheck className="mt-0.5 h-4.5 shrink-0 text-primary" />
                                        <span>
                                            Check your spam or junk folder if you don&apos;t see the email within 2
                                            minutes. The code expires in 10 minutes.
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-8 flex items-center justify-between gap-3">
                                    <Button
                                        type="button"
                                        variant='outline'
                                        size='lg'
                                        onClick={() => goToStep(1)}
                                    >
                                        <ArrowLeft className="h-4.5 w-4.5" />
                                        <span>Back</span>
                                    </Button>
                                    <Button
                                        type="button"
                                        variant='default'
                                        size='lg'
                                        onClick={() => goToStep(3)}
                                    >
                                        <span>Verify Code</span>
                                        <CheckCircle2 className="h-4.5 w-4.5" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: New Password */}
                        {currentStep === 3 && !resetSuccess && (
                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                    Step 3 &bull; Account Security
                                </span>
                                <h1 className="text-headline-lg-mobile font-bold text-on-surface md:text-headline-lg">
                                    Create New Password
                                </h1>
                                <p className="text-body-md text-on-surface-variant">
                                    Your identity is verified. Create a new secure password for your hiker
                                    account.
                                </p>
                                <div className="mt-5 flex flex-col gap-4">
                                    {/* Password */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-label-md font-semibold text-on-surface">
                                            New Password <span className="text-error">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                value={form.password}
                                                onChange={(e) => update('password', e.target.value)}
                                                placeholder="••••••••••••"
                                                className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 pr-10 text-body-sm text-on-surface placeholder:text-outline transition-all focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors hover:text-on-surface focus:outline-none"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-label-md font-semibold text-on-surface">
                                            Confirm Password <span className="text-error">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showConfirm ? 'text' : 'password'}
                                                value={form.confirmPassword}
                                                onChange={(e) => update('confirmPassword', e.target.value)}
                                                placeholder="••••••••••••"
                                                className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 pr-10 text-body-sm text-on-surface placeholder:text-outline transition-all focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirm(!showConfirm)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors hover:text-on-surface focus:outline-none"
                                            >
                                                {showConfirm ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Password Strength Meter */}
                                    <div className="flex flex-col gap-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low p-3.5">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="font-medium text-on-surface-variant">Password Strength:</span>
                                            <span className={`flex items-center gap-1 font-bold ${strength > 0 ? strengthColors[strength - 1] : 'text-outline'}`}>
                                                <ShieldCheck className="h-3.75 w-3.75" />
                                                {strength > 0 ? strengthLabels[strength - 1] : '—'}
                                            </span>
                                        </div>
                                        <div className="flex h-1.5 w-full overflow-hidden gap-1 rounded-full bg-surface-container-highest">
                                            {[0, 1, 2, 3].map((i) => (
                                                <div
                                                    key={i}
                                                    className={`h-full flex-1 rounded-full transition-colors ${i < strength ? 'bg-primary' : ''
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                                            {[
                                                { label: 'Uppercase (A-Z)', test: /[A-Z]/ },
                                                { label: 'Lowercase (a-z)', test: /[a-z]/ },
                                                { label: 'Number (0-9)', test: /[0-9]/ },
                                                { label: 'Special character (!@#$)', test: /[^A-Za-z0-9]/ },
                                            ].map(({ label, test }) => (
                                                <div
                                                    key={label}
                                                    className={`flex items-center gap-1.5 ${form.password && test.test(form.password) ? 'text-primary' : 'text-outline'}`}
                                                >
                                                    <CheckCircle2 className="h-4 w-4" />
                                                    <span>{label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex items-center justify-between gap-3">
                                    <Button
                                        type="button"
                                        variant='outline'
                                        size='lg'
                                        onClick={() => goToStep(2)}
                                    >
                                        <ArrowLeft />
                                        <span>Back</span>
                                    </Button>
                                    <Button
                                        type="button"
                                        variant='default'
                                        size='lg'
                                        onClick={() => setResetSuccess(true)}
                                    >
                                        <span>Reset Password</span>
                                        <Check />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: Success */}
                        {currentStep === 3 && resetSuccess && (
                            <div className="flex flex-col items-center gap-3 py-2 text-center">
                                <div className="relative">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-container text-primary shadow-inner">
                                        <KeyRound className="h-10 w-10" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-md">
                                        <Check className="h-4.5 w-4.5" />
                                    </div>
                                </div>
                                <div className="flex max-w-md flex-col gap-1.5">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                        Password Reset Complete
                                    </span>
                                    <h1 className="text-headline-lg font-bold text-on-surface">
                                        Your password has been updated!
                                    </h1>
                                    <p className="text-body-md text-on-surface-variant">
                                        Your hiker account password has been securely changed. You can now sign in
                                        with your new credentials.
                                    </p>
                                </div>

                                {/* Info Card */}
                                <div className="my-2 w-full max-w-md rounded-xl border border-outline-variant/60 bg-surface-container-low p-4 text-left">
                                    <div className="flex items-center gap-2 pb-2 text-xs">
                                        <ShieldCheck className="h-4 w-4 text-primary" />
                                        <span className="font-semibold text-on-surface">Security Tip</span>
                                    </div>
                                    <p className="text-xs leading-relaxed text-on-surface-variant">
                                        Keep your new password secure and avoid reusing it across other platforms. For
                                        account safety, consider updating your password periodically.
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="mt-2 flex w-full max-w-md flex-col gap-2.5">
                                    <Button
                                        type='button'
                                        variant='default'
                                        size='xl2'
                                        onClick={() => navigate('/login')}
                                    >
                                        <span>Login</span>
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Login Redirect */}
                    <div className="border-t border-outline-variant/40 pt-4 text-center">
                        <p className="text-body-md text-on-surface-variant">
                            Remembered your credentials?{' '}
                            <Link to="/login" className="font-semibold text-primary hover:underline">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

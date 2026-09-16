import { useNavigate } from 'react-router-dom';
import HERO_IMAGE from '../../../../public/images/home/MtMasaraga.jpg';
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass } from 'lucide-react';

export default function Cta() {
    const navigate = useNavigate();

    return (
        <section className="relative flex min-h-[85vh] lg:min-h-screen w-full items-center justify-start overflow-hidden bg-surface-container-highest">
            {/* Background Image & Scrim Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HERO_IMAGE}
                    alt="Mt. Masaraga covered in lush green rainforest piercing through morning mist"
                    className="h-full w-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
                />
                {/* Gradient Scrim for Contrast & Atmosphere */}
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
            </div>

            {/* Main Hero Callout Content */}
            <div className="relative z-10 max-w-4xl px-6 py-20 md:px-16 lg:px-24">

                {/* Main Headline */}
                <h1 className="mb-6 text-4xl font-black tracking-tight leading-none text-white sm:text-6xl md:text-7xl lg:text-8xl">
                    MT. MASARAGA
                    <span className="mt-2 block text-2xl font-bold tracking-normal text-white/90 sm:text-4xl md:text-5xl">
                        Your Trek Begins Here
                    </span>
                </h1>

                {/* Subtitle / Overview */}
                <p className="mb-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                    Experience the lush summit trails and untouched rainforests of Ligao, Albay. Secure your official permit and trek guide today.
                </p>

                {/* Action Controls */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <Button
                        type="button"
                        size="lg"
                        variant="default"
                        onClick={() => {
                            const element = document.getElementById('trails');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="cursor-pointer font-bold gap-2 text-base px-8 py-6 rounded-2xl active:scale-[0.98] transition-all"
                    >
                        <span>Explore Trail</span>
                        <ArrowRight className="h-5 w-5" />
                    </Button>

                    <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        onClick={() => navigate('/help')}
                        className="cursor-pointer font-semibold text-white border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50 hover:text-inverse-on-surface hover:backdrop-blur-md rounded-2xl text-base px-6 py-6 transition-all"
                    >
                        Trek Guidelines
                    </Button>
                </div>

            </div>
        </section>
    );
}
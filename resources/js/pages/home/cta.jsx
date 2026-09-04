import { Link } from 'react-router-dom';
import HERO_IMAGE from '../../../../public/build/assets/MtMasaraga.jpg';

export default function Cta() {
    return (
        <section className="relative flex h-[100vh] w-full items-start justify-start overflow-hidden bg-secondary">
            <div className="absolute inset-0 z-0 opacity-90">
                <img
                    src={HERO_IMAGE}
                    alt="Mt. Masaraga covered in lush green rainforest piercing through morning mist"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="absolute inset-0 z-10" />

            <div className="relative z-20 max-w-4xl px-6 pt-28 text-left md:px-20 md:pt-36">
                <h1 className="mb-6 text-[40px] text-left font-bold leading-tight text-on-primary md:text-[64px] md:leading-[72px]">
                    MT. MASARAGA:
                    <br />
                    YOUR TREK BEGINS
                </h1>
                <Link
                    to="/help"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white hover:text-on-primary shadow-lg transition-colors hover:bg-primary-fixed-dim"
                >
                    Book your trek
                </Link>
            </div>
        </section>
    );
}

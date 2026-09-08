import { Link } from 'react-router-dom';
import HERO_IMAGE from '../../../../public/images/home/MtMasaraga.jpg';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

export default function Cta() {
    const navigate = useNavigate();
    return (
        <section className="relative flex h-screen w-full items-start justify-start overflow-hidden bg-secondary">
            <div className="absolute inset-0 z-0 opacity-90">
                <img
                    src={HERO_IMAGE}
                    alt="Mt. Masaraga covered in lush green rainforest piercing through morning mist"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="absolute inset-0 z-10" />

            <div className="relative z-20 max-w-4xl px-6 pt-28 text-left md:px-20 md:pt-36">
                <h1 className="mb-6 text-[40px] text-left font-bold leading-tight text-on-surface md:text-[64px] md:leading-18">
                    MT. MASARAGA:
                    <br />
                    YOUR TREK BEGINS
                </h1>
                <Button
                    type="button"
                    size="xl2"
                    variant='default'
                    onClick={() => navigate('/help')}
                >
                    Book your trek
                </Button>
            </div>
        </section>
    );
}

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Mountain from './../icons/Mountain';
import HERO_IMAGE from '../../../../public/images/home/MtMasaraga.jpg';

export default function SplashScreen({ onComplete }) {
    const [isLeaving, setIsLeaving] = useState(false);
    const onCompleteRef = useRef(onComplete);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsLeaving(true);
        }, 2000);

        const timer2 = setTimeout(() => {
            if (onCompleteRef.current) {
                onCompleteRef.current();
            }
        }, 2900);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    // Portal content directly into document.body
    return createPortal(
        <div
            translate="no"
            className={`fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden bg-surface-container-highest transition-opacity duration-700 ease-out ${
                isLeaving ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
            {/* Background Image & Scrim Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HERO_IMAGE}
                    alt="Mt. Masaraga covered in lush green rainforest piercing through morning mist"
                    className="h-full w-full object-cover object-center scale-105 transition-transform duration-3000 ease-out animate-in zoom-in-110"
                    style={{ transformOrigin: 'center center' }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/30 lg:to-black/20" />
            </div>

            {/* Logo and Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
               <img
                        src="/assets/logo/MT. MASARAGA Logo Center.svg"
                        alt="Mt. Masaraga Protected Landscape"
                        className="h-20 w-auto object-contain lg:h-60"
                    />
                <p className="text-white/80 font-medium tracking-widest uppercase text-sm mt-2 drop-shadow-sm">
                    Eco-Tourism Portal   
                </p>
            </div>
        </div>,
        document.body
    );
}
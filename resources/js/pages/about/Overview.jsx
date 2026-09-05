import { LandPlot, MountainSnow } from 'lucide-react';

import mtMasaragaOverview from "../../../../public/images/about/mt-masaraga-hero.jpg";

export default function Overview() {
    return (
        <section className="relative px-6 pt-24 pb-12 md:px-12 lg:px-16 min-h-auto lg:min-h-screen w-full items-start justify-start overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    <div className="lg:col-span-6 flex flex-col justify-center">

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e593a] tracking-tight leading-[1.15] mb-4 sm:mb-6">
                            Discover Mt. Masaraga
                        </h1>

                        <p className="text-sm sm:text-base text-[#404943] leading-relaxed mb-4 sm:mb-5 font-normal">
                            Rising majestically in the Bicol region, Mt. Masaraga is a forested stratovolcano standing at 1,328 meters above sea level. Characterized by its dense, lush mountain moss forests and rugged terrain, it offers a challenging yet deeply rewarding experience for ecotourism and conservation advocates.
                        </p>

                        <p className="text-xs sm:text-sm text-[#5a655e] leading-relaxed mb-6 sm:mb-8 font-normal">
                            Under the stewardship of the Protected Area Management Board (PAMB) and the Department of Environment and Natural Resources (DENR), ongoing conservation efforts aim to preserve its unique biodiversity. The mountain serves as a crucial habitat for endemic flora and fauna, making it a living laboratory for environmental research and a sanctuary for nature enthusiasts.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
                            <div className="flex items-center gap-2 bg-white/70 px-3 sm:px-4 py-2 rounded-lg border border-outline-variant/60">
                                <MountainSnow size={18} className="text-primary" />
                                <span className="text-xs font-semibold text-secondary">Stratovolcano</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/70 px-3 sm:px-4 py-2 rounded-lg border border-outline-variant/60">
                                <LandPlot size={18} className="text-primary" />
                                <span className="text-xs font-semibold text-secondary">1,328m ASL</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="h-75 sm:h-100 md:h-115 lg:h-130 rounded-xl overflow-hidden relative shadow-sm border border-outline-variant/30 bg-linear-to-b from-[#e3ece4] via-[#b8c7bc] to-[#748478]">
                            <img
                                src={mtMasaragaOverview}
                                alt="Mt. Masaraga Overview"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#141e18]/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                                <p className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase opacity-85 text-white/90 mb-1">Protected Landscape</p>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">Bicol Region, Philippines</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

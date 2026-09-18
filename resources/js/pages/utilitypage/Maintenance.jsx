import React from "react";
import { useNavigate } from "react-router-dom";
import {
    RefreshCw,
    ArrowLeft,
    Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLottie } from "lottie-react";
import ErrorCone from "../../components/lottiefiles/Under Maintenance.json";

export default function Maintenance() {
    const navigate = useNavigate();

    const { View } = useLottie({
        animationData: ErrorCone,
        loop: true,
        autoplay: true,
    });

    return (
        <main className="min-h-screen w-full bg-surface px-6 py-8 md:px-12 lg:px-16 font-sans flex flex-col justify-center items-center">

            <div className="w-full max-w-3xl">

                {/* Content */}
                <div className="flex flex-col items-center text-center pt-10">

                    {/* Animation */}
                    <div className="relative flex h-48 w-48 items-center justify-center sm:h-55 sm:w-55">
                        <div className="absolute inset-0 rounded-full bg-primary/40 blur-3xl" />

                        <div className="relative z-10 h-full w-full">
                            {View}
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mt-6 max-w-xl space-y-3">

                        <h1 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl">
                            System Under Maintenance
                        </h1>

                        <p className="text-sm leading-6 text-on-surface-variant sm:text-base">
                            The Mt. Masaraga Protected Landscape booking portal
                            is currently undergoing scheduled upgrades to improve
                            system reliability and security.
                        </p>

                        {/* Estimated completion */}
                        <div className="flex items-center justify-center gap-2 pt-1 text-xs font-medium text-on-surface-variant">
                            <Clock className="h-4 w-4 text-primary" />

                            <span>
                                Estimated completion:
                                <span className="ml-1 font-semibold text-on-surface">
                                    2–4 hours
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">

                        <Button
                            variant="default"
                            size="lg"
                            onClick={() => window.location.reload()}
                            className="h-11 rounded-xl px-6 font-semibold"
                        >
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Refresh Page
                        </Button>
                    </div>

                </div>
            </div>
        </main>
    );
}
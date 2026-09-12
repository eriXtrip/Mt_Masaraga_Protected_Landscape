import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ProgressNode({
    step,
    name,
    isActive,
    isCompleted,
    onClick,
    color = 'primary'
}) {
    const getColorClasses = () => {
        if (color === 'primary') {
            return {
                active: 'border-primary bg-primary text-white shadow-sm ring-4 ring-primary/20',
                completed: 'border-primary bg-primary text-white shadow-sm',
                textActive: 'font-semibold text-primary'
            };
        }
        if (color === 'secondary') {
            return {
                active: 'border-secondary bg-secondary text-on-secondary shadow-sm ring-4 ring-secondary/20',
                completed: 'border-secondary bg-secondary text-on-secondary shadow-sm',
                textActive: 'font-semibold text-secondary'
            };
        }
        // Fallback for dynamic tailwind
        return {
            active: `border-${color} bg-${color} text-white shadow-sm ring-4 ring-${color}/20`,
            completed: `border-${color} bg-${color} text-white shadow-sm`,
            textActive: `font-semibold text-${color}`
        };
    };

    const colors = getColorClasses();
    const inactiveClasses = 'border-outline-variant bg-surface-container-lowest text-outline';
    const textInactiveClasses = 'font-medium text-outline';

    return (
        <div className="relative z-10 flex flex-col items-center">
            <Button
                type="button"
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors ${isCompleted
                    ? colors.completed
                    : isActive
                        ? colors.active
                        : inactiveClasses
                    }`}
            >
                {isCompleted ? <Check className="h-4 w-4" /> : step}
            </Button>
            <span
                className={`absolute top-10 left-1/2 -translate-x-1/2 hidden whitespace-nowrap text-[11px] sm:block ${isActive || isCompleted ? colors.textActive : textInactiveClasses
                    }`}
            >
                {name}
            </span>
        </div>
    );
}

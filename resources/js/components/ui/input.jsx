import React from 'react';

export const Input = React.forwardRef(({ className = '', type = 'text', ...props }, ref) => {
    return (
        <input
            type={type}
            ref={ref}
            className={`
                w-full h-10 px-3.5 rounded-lg text-sm font-medium
                bg-surface border border-outline-variant text-on-surface
                placeholder:text-on-surface-variant/50
                focus:border-primary focus:ring-1 focus:ring-primary outline-none 
                transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed
                ${className}
            `}
            {...props}
        />
    );
});

Input.displayName = 'Input';
export default function LegalPageLayout({ title, subtitle, eyebrow, lastUpdated, children }) {
    return (
        <section className="relative w-full px-6 pt-16 pb-6 md:px-5 lg:px-10">
            <div className="mx-auto max-w-4xl pt-5">

                {/* Page Title */}
                <h1 className="text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="mt-3 text-lg font-medium text-primary">
                        {subtitle}
                    </p>
                )}

                {/* Last Updated */}
                {lastUpdated && (
                    <p className="mt-3 text-sm text-on-surface-variant">
                        Last updated: {lastUpdated}
                    </p>
                )}

                {/* Thin Divider */}
                <div className="mt-8 border-t border-outline-variant/40" />

                {/* Prose Content */}
                <div className="mt-8 space-y-8 text-on-surface">
                    {children}
                </div>

                {/* Bottom Divider */}
                <div className="mt-12 border-t border-outline-variant/40" />

                {/* Back to Top */}
                <div className="mt-8 flex justify-center pb-16">
                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="rounded-lg border border-outline-variant bg-surface-container-lowest px-5 py-2.5 text-label-md font-semibold text-on-surface transition-colors hover:bg-surface-container"
                    >
                        Back to Top
                    </button>
                </div>

            </div>
        </section>
    );
}

/* Reusable subcomponents for consistent policy sectioning */

export function PolicySection({ title, children }) {
    return (
        <div>
            {title && (
                <h2 className="mb-3 text-headline-lg font-bold text-on-surface sm:text-2xl">
                    {title}
                </h2>
            )}
            <div className="space-y-4 text-body-md leading-relaxed text-on-surface-variant">
                {children}
            </div>
        </div>
    );
}

export function PolicyList({ items }) {
    return (
        <ul className="ml-5 list-outside list-disc space-y-2 text-body-md leading-relaxed text-on-surface-variant">
            {items.map((item, i) => (
                <li key={i} className="pl-1">
                    {item}
                </li>
            ))}
        </ul>
    );
}

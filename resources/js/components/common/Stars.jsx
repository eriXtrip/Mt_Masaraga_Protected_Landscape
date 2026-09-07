const starPath =
    'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';

function Stars() {
    return (
        <div className="flex gap-1" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-primary"
                    aria-hidden="true"
                >
                    <path d={starPath} />
                </svg>
            ))}
        </div>
    );
}

export default Stars;
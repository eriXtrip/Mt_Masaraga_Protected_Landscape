import Stars from "../../components/common/Stars";
import { ExperienceCard } from "@/components/features/ExperienceCard";

import { EXPERIENCES } from '../../mockData';

export default function Experience() {
    return (
        <section className="bg-surface px-6 py-6 md:px-12 md:py-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 text-center">
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl">
                        Hiker Experiences & Feedback
                    </h2>
                    <p className="max-w-2xl text-base mx-auto font-normal text-on-surface-variant md:text-lg">
                        Discover the breathtaking beauty and biodiversity of Mt. Masaraga
                        through the stories of fellow explorers.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {EXPERIENCES.map((review) => (
                        <ExperienceCard
                            key={review.name}
                            initials={review.initials}
                            name={review.name}
                            quote={review.quote}
                            date={review.date}
                            rating={review.rating}
                            isLast={review.isLast}
                            variant="default"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

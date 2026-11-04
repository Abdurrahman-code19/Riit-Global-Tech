import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import type { Course } from "@/data/site";

export function CourseCard({ course }: { course: Course }) {
  const Icon = getIcon(course.icon);

  return (
    <Link
      to={`/academy/${course.slug}`}
      className="group relative flex h-full flex-col border border-border bg-card/40 p-6 transition-colors duration-300 hover:border-primary/50"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center border border-border bg-white/[0.03] text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="border border-primary/25 bg-primary/10 px-2 py-1 font-sans text-[9px] uppercase tracking-[0.14em] text-primary">
          {course.durationLabel}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-foreground">
        {course.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.description}</p>

      <ul className="mt-5 space-y-2">
        {course.skills.slice(0, 3).map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1 w-1 shrink-0 bg-primary" aria-hidden="true" />
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between pt-7">
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
          View programme
        </span>
        <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </div>
    </Link>
  );
}

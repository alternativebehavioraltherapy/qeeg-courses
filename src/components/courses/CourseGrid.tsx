import { courses, type Course } from "@/data/courses";
import { CourseCard } from "@/components/courses/CourseCard";

/**
 * Renders whatever is in `src/data/courses.ts`.
 * Optional `items` lets Home pass a featured subset.
 */
export function CourseGrid({ items = courses }: { items?: Course[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

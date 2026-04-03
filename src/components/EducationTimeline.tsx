"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

export type EducationTimelineItem = Readonly<{
  school: string;
  degree: string;
  location: string;
  dates: string;
  activities: string[];
  /** Optional logo; place files in /public (e.g. /schools/berkeley.png) */
  imageSrc?: string;
}>;

function useSectionScrollProgress(containerRef: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const scrollRange = vh + rect.height;
    const scrolled = vh - rect.top;
    setProgress(Math.min(1, Math.max(0, scrolled / scrollRange)));
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return progress;
}

function RingAvatar({
  school,
  imageSrc,
}: {
  school: string;
  imageSrc?: string;
}) {
  return (
    <div
      className="relative z-10 shrink-0 rounded-full bg-linear-gradient(to bottom, #f3f4f6, #e5e7eb) p-[3px] shadow-sm ring-1 ring-zinc-200/90"
      aria-hidden
    >              
      <div className="rounded-full border shadow-sm w-8 h-8 flex bg-white justify-start items-start"/>
    </div>
  );
}

export function EducationTimeline({ items }: { items: EducationTimelineItem[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionScrollProgress(sectionRef);

  const p = progress * 100;

  return (
    <section ref={sectionRef} className="relative">
      <div className="flex flex-col gap-y-10">
        {items.map((item) => (
          <article key={`${item.school}-${item.dates}-${item.degree}`} className="flex gap-4">
            <div className="pt-0.5">
              <RingAvatar school={item.school} imageSrc={item.imageSrc} />
            </div>
            <div className="flex min-w-0 flex-col gap-y-1">
              <p className="text-sm font-medium">
                {item.degree}
              </p>
              <p className="text-xs text-zinc-400">
                {item.school} · {item.location} · {item.dates}
              </p>
              <ul className="mt-2 list-inside list-disc">
                {item.activities.map((activity) => (
                  <li key={activity} className="text-xs text-zinc-600">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

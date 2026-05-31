"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCursorLabel } from "@/components/CustomCursorProvider";

export type ShowcaseProject = {
  title: string;
  category: string;
  gradient: string;
  href: string;
  image?: string;
};

const stackMotion = [
  { x: 400, y: -58, rotate: -8, scale: 0.84, zIndex: 3 },
  { x: 24, y: -78, rotate: 8, scale: 0.83, zIndex: 2 },
  { x: 346, y: -330, rotate: -5, scale: 0.85, zIndex: 1 },
  { x: 8, y: -286, rotate: 6, scale: 0.82, zIndex: 1 },
];

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const raw = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.08;
      const end = vh * 0.36;
      const progress = (start - rect.top) / (rect.height + start - end);

      raw.set(Math.min(1, Math.max(0, progress)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [raw, ref]);

  return useSpring(raw, { stiffness: 120, damping: 28, mass: 0.45 });
}

function ProjectCard({
  project,
  index,
  progress,
}: {
  project: ShowcaseProject;
  index: number;
  progress: MotionValue<number>;
}) {
  const config = stackMotion[index] ?? stackMotion[0];
  const cursorHandlers = useCursorLabel("View Project");

  const x = useTransform(progress, [0, 0.5, 0.68, 1], [config.x, config.x * 0.12, 0, 0]);
  const y = useTransform(progress, [0, 0.5, 0.68, 1], [config.y, config.y * 0.1, 0, 0]);
  const rotate = useTransform(
    progress,
    [0, 0.54, 0.7, 1],
    [config.rotate, config.rotate * 0.18, 0, 0]
  );
  const scale = useTransform(progress, [0, 0.54, 0.7, 1], [config.scale, 0.95, 1, 1]);
  const opacity = useTransform(progress, [0, 0.14, 1], [0.96, 1, 1]);
  const metaOpacity = useTransform(progress, [0, 0.45, 0.66, 1], [0, 0, 1, 1]);
  const metaY = useTransform(progress, [0, 0.45, 0.66, 1], [18, 18, 0, 0]);

  return (
    <motion.article
      className={`project-card project-stack-card project-stack-card-${index} cursor-pointer`}
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex: config.zIndex,
      }}
      {...cursorHandlers}
    >
      <Link href={project.href} className="block">
        <div
          className={
            project.image
              ? "project-media"
              : `project-media bg-gradient-to-br ${project.gradient}`
          }
        >
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover object-top transition duration-300"
            />
          ) : (
            <div className="flex h-full w-full items-end p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-white/90">
                {project.title}
              </p>
            </div>
          )}
        </div>

        <motion.div className="project-meta" style={{ opacity: metaOpacity, y: metaY }}>
          <div>
            <h3 className="font-black text-black">{project.title}</h3>
            <p>{project.category}</p>
          </div>

          <span className="project-action">
            <span>↗ View Project</span>
          </span>
        </motion.div>
      </Link>
    </motion.article>
  );
}

export function ProjectShowcase({ projects }: { projects: ShowcaseProject[] }) {
  const ref = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(ref);

  const introOpacity = useTransform(progress, [0, 0.22, 0.42], [1, 1, 0]);
  const introY = useTransform(progress, [0, 0.42], [0, -72]);
  const introScale = useTransform(progress, [0, 0.42], [1, 0.96]);

  const titleOpacity = useTransform(progress, [0.18, 0.42, 1], [0, 1, 1]);
  const titleY = useTransform(progress, [0.18, 0.52, 1], [170, 0, 0]);

  const displayProjects = projects.slice(0, 4);

  return (
    <section ref={ref} className="projects-scroll-stage [overflow-x:clip]">
      <div className="projects-sticky">
        <motion.div
          className="pointer-events-none absolute left-0 top-[clamp(26px,7vh,74px)] z-50 w-[min(48%,520px)] origin-left"
          style={{ opacity: introOpacity, y: introY, scale: introScale }}
        >
          <h2 className="text-[clamp(1.9rem,4.2vw,3.6rem)] font-black leading-[0.95] text-neutral-500">
            From Ideas to <span className="block text-black">Production</span>
          </h2>

          <p className="mt-8 text-xl font-semibold leading-snug text-neutral-600">
            <strong className="font-black text-black">
              APIs, Automation, and Agentic AI
            </strong>{" "}
            Engineered into products that are Secure, Scalable, and Ready to Ship.
          </p>
        </motion.div>

        <motion.h2
          className="pointer-events-none absolute left-0 top-0 z-40 text-[clamp(2.2rem,4.5vw,3.4rem)] font-black leading-[0.95] tracking-tight text-black"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          Latest Projects
        </motion.h2>

        <div className="projects-stack-canvas">
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

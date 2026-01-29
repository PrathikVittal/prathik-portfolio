import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function ProjectsPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-10">
            <Section
                title="Projects"
                subtitle="Each project has a Demo page you can try with dummy values."
            >
                <ProjectsGrid />
            </Section>
        </main>
    );
}

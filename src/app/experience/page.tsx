import Section from "@/components/Section";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function ExperiencePage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-10">
            <Section
                title="Experience"
                subtitle="Roles where I built features, shipped infrastructure improvements, and collaborated across teams."
            >
                <ExperienceTimeline />
            </Section>
        </main>
    );
}

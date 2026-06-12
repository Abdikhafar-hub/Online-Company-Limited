import type { Metadata } from "next";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { PROJECTS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies from corporate, school and reseller deployments.",
};

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHero kicker="Selected work" title="Projects & case studies" breadcrumb="Home / Projects">
        A look at recent ICT supply and installation projects we have delivered for businesses,
        schools and resellers.
      </PageHero>
      <section className="container-page mt-8 grid gap-5 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.slug}
            className="overflow-hidden rounded-3xl border border-beige-border bg-white"
          >
            <div className="grid-bg h-44 bg-gradient-to-br from-[oklch(0.32_0.05_260)] to-[oklch(0.15_0.04_260)]" />
            <div className="p-6">
              <p className="kicker">{project.tag}</p>
              <h3 className="mt-1 text-xl font-bold text-navy">{project.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{project.client}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy">{project.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}

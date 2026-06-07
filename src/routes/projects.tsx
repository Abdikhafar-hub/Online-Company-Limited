import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects — Online Company Limited" }, { name: "description", content: "Case studies from corporate, school and reseller deployments." }] }),
  component: () => (
    <SiteLayout>
      <PageHero kicker="Selected work" title="Projects & case studies" breadcrumb="Home / Projects">
        A look at recent ICT supply and installation projects we have delivered for businesses, schools and resellers.
      </PageHero>
      <section className="container-page mt-8 grid md:grid-cols-2 gap-5">
        {PROJECTS.map(p => (
          <article key={p.slug} className="bg-white border border-beige-border rounded-3xl overflow-hidden">
            <div className="h-44 bg-gradient-to-br from-[oklch(0.32_0.05_260)] to-[oklch(0.15_0.04_260)] grid-bg" />
            <div className="p-6">
              <p className="kicker">{p.tag}</p>
              <h3 className="text-xl font-bold text-navy mt-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.client}</p>
              <p className="text-sm text-navy mt-3 leading-relaxed">{p.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  ),
});
import { Hero } from "@/components/home/Hero";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AcademyPreview } from "@/components/home/AcademyPreview";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { WhySection } from "@/components/home/WhySection";
import { StorySection } from "@/components/home/StorySection";
import { CTASection } from "@/components/common/CTASection";
import { usePageMeta } from "@/hooks/usePageMeta";
import { faqs, site } from "@/data/site";
import { pageSeo } from "@/data/seo";

const homeSchema = [
  {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-NG",
  },
  {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function Home() {
  usePageMeta({
    ...pageSeo("/"),
    jsonLd: homeSchema,
  });

  return (
    <>
      <Hero />
      <TrustMarquee />
      <IntroSection />
      <ServicesPreview />
      <AcademyPreview />
      <ProjectsPreview />
      <WhySection />
      <StorySection />
      <CTASection />
    </>
  );
}

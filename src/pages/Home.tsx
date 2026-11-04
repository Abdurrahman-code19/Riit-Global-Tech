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
    title: "RIIT Global Tech | Your Reliable IT Partner",
    description:
      "RIIT Global Tech delivers networking, CBT/CBE centre setup, websites, UK-sourced equipment and Cisco Networking Academy training for individuals, schools and businesses in Lagos.",
    path: "/",
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

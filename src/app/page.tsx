import { Hero } from "@/components/sections/Hero";
import { SocialProofStrip } from "@/components/layout/SocialProofStrip";
import { BusinessProblems } from "@/components/sections/BusinessProblems";
import { Services } from "@/components/sections/Services";
import { WorkFormats } from "@/components/sections/WorkFormats";
import { Process } from "@/components/sections/Process";
import { Results } from "@/components/sections/Results";
import { Cases } from "@/components/sections/Cases";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Cta } from "@/components/sections/Cta";
import { Faq } from "@/components/sections/Faq";
import { ContactForm } from "@/components/sections/ContactForm";
import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { EditorialRule } from "@/components/ui/EditorialRule";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofStrip />
      <EditorialRule />
      <BusinessProblems />
      <EditorialRule />
      <Services />
      <EditorialRule />
      <WorkFormats />
      <EditorialRule />
      <Process />
      <EditorialRule />
      <Results />
      <EditorialRule />
      <Cases />
      <EditorialRule />
      <About />
      <EditorialRule />
      <Experience />
      <EditorialRule />
      <Cta />
      <EditorialRule />
      <Faq />
      <EditorialRule />
      <ContactForm />
      <CalendlyEmbed />
      <MobileStickyCta />
    </>
  );
}

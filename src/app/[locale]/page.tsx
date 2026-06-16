import { setRequestLocale } from "next-intl/server";
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
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { routing, type Locale } from "@/i18n/routing";

type Props = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: Props) {
  if (!routing.locales.includes(locale as Locale)) {
    return null;
  }

  setRequestLocale(locale);

  return (
    <>
      {/* <!-- trigger redeploy --> */}
      {/* redeploy after environment variables update */}
      <Hero />
      <SocialProofStrip />
      <BusinessProblems />
      <Services />
      <WorkFormats />
      <Process />
      <Results />
      <Cases />
      <About />
      <Experience />
      <Cta />
      <Faq />
      <ContactForm />
      <MobileStickyCta />
    </>
  );
}

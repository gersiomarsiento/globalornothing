import { Card } from 'components/card';
import { HeroSection } from '../components/hero-section';
import { WhySection } from '../components/why-section';
import { WhoSection } from '../components/who-section';
import { ServicesSection } from '../components/services-section';
import { ContactSection } from '../components/contact-section';
// import { RandomQuote } from 'components/random-quote';
// import { Markdown } from 'components/markdown';

export default function Page() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WhoSection />
      <ServicesSection />
      <WhySection />
      <ContactSection />
    </main>
  );
}

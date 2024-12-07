import { Card } from 'components/card';
import { HeroSection } from '../components/hero-section';
import { WhySection } from '../components/why-section';
import { WhoSection } from '../components/who-section';
import { ServicesSection } from '../components/services-section';
import { ContactSection } from '../components/contact-section';
// import { RandomQuote } from 'components/random-quote';
// import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';

const cards = [
  //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WhySection />
      <WhoSection />
      <ServicesSection />
      <ContactSection />
      {/* {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section> */}
      {/* !!cards?.length && <CardsGrid cards={cards} /> */}
    </main>
  );
}

function RuntimeContextCard() {
  const title = `Netlify Context: running in ${ctx} mode.`;
  if (ctx === 'dev') {
    return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
  } else {
    return <Card title={title} text="This page was statically-generated at build time." />;
  }
}

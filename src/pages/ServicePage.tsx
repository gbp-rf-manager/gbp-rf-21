import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCallButton } from "@/components/site/FloatingCallButton";
import { Contacts } from "@/sections/Contacts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageSeo } from "@/hooks/usePageSeo";
import { servicePages, type RichParagraph, type ServicePageContent } from "@/data/service-pages";

const phone = "+7 495 128 09 84";
const telHref = "tel:+74951280984";

interface ServicePageProps {
  content: ServicePageContent;
}

const renderParagraph = (segments: RichParagraph, index: number) => (
  <p key={`paragraph-${index}`} className="section-prose">
    {segments.map((segment, idx) =>
      segment.type === "link" ? (
        <Link key={`${segment.href}-${idx}`} to={segment.href} className="text-primary underline-offset-4 hover:underline">
          {segment.text}
        </Link>
      ) : (
        <span key={`text-${idx}`}>{segment.text}</span>
      )
    )}
  </p>
);

export const ServicePage = ({ content }: ServicePageProps) => {
  const canonical = `https://profix-now.ru${content.slug}`;
  usePageSeo({
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    canonical,
    ogType: "article",
  });

  const otherPages = servicePages.filter((page) => page.slug !== content.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: content.schemaServiceType,
    provider: {
      "@type": "LocalBusiness",
      name: "ProFixNow",
      telephone: "+7-495-128-09-84",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Широкая ул., 13А",
        addressLocality: "Москва",
        addressCountry: "RU",
      },
    },
    areaServed: "Москва",
    url: canonical,
  };

  return (
    <div className="will-change-auto">
      <Header />
      <main role="main">
        <section className="section pt-10 pb-12 sm:pt-14">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="text-primary hover:underline">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <span>{content.serviceName}</span>
          </nav>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">{content.h1}</h1>
              <div className="mt-4 space-y-4">{content.intro.map((paragraph, idx) => renderParagraph(paragraph, idx))}</div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg" className="min-h-[48px]">
                  <a href={telHref}>Позвонить {phone}</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#contacts">Связаться в разделе контактов</a>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border bg-card/70 p-3 shadow-elegant">
              <img
                src={content.heroImage.src}
                alt={content.heroImage.alt}
                className="aspect-[4/3] w-full rounded-xl object-cover"
                loading="lazy"
                width={640}
                height={480}
                data-image-prompt={content.heroImage.prompt}
              />
            </div>
          </div>
        </section>

        <section className="section py-10 sm:py-14">
          <h2 className="section-title">С чем работаем</h2>
          <p className="section-subtitle">Подбираем мастера под конкретную задачу и модель техники</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {content.serviceTypes.map((service) => (
              <article key={service.title} className="rounded-xl border bg-card p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section py-10 sm:py-14 bg-muted/20">
          <h2 className="section-title">Типичные ситуации и неисправности</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {content.issues.map((issue) => (
              <article key={issue.title} className="rounded-xl border bg-background p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{issue.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{issue.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section py-10 sm:py-14">
          <h2 className="section-title">Как проходит ремонт</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.steps.map((step) => (
              <article key={step.title} className="rounded-xl border bg-card p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section py-10 sm:py-14 bg-muted/20">
          <h2 className="section-title">Почему выбирают ProFixNow</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {content.benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-xl border bg-background p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section py-10 sm:py-14">
          <h2 className="section-title">Вопросы и ответы</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {content.faqs.map((faq) => (
              <article key={faq.question} className="rounded-xl border bg-card p-5 shadow-sm">
                <h3 className="text-base font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section py-10 sm:py-14 bg-muted/20">
          <div className="rounded-2xl border bg-background p-6 shadow-elegant">
            <h2 className="text-2xl font-semibold">{content.ctaTitle}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{content.ctaDescription}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <a href={telHref}>Связаться с мастером</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contacts">Написать сообщение</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="section py-10 sm:py-14">
          <h2 className="section-title">Другие услуги ProFixNow</h2>
          <p className="section-subtitle">Выберите нужное направление и узнайте детали</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherPages.map((page) => (
              <article key={page.slug} className="rounded-xl border bg-card p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{page.h1}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{page.metaDescription}</p>
                <Button asChild variant="link" className="mt-3 px-0">
                  <Link to={page.slug}>Подробнее</Link>
                </Button>
              </article>
            ))}
          </div>
        </section>

        <Contacts />
      </main>
      <Footer />
      <FloatingCallButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  );
};

export default ServicePage;

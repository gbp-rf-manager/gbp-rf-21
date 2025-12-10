import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCallButton } from "@/components/site/FloatingCallButton";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useMemo } from "react";
import { baseUrl, servicePages } from "@/data/service-pages";
import type { ServicePageContent } from "@/data/service-pages";
import { usePageSEO } from "@/hooks/usePageSEO";
import NotFound from "./NotFound";
import { SafeImage } from "@/components/SafeImage";

const phone = "+7 495 128 09 84";
const telHref = "tel:+74951280984";

interface ServicePageProps {
  slug: ServicePageContent["slug"];
}

export const ServicePage = ({ slug }: ServicePageProps) => {
  const page = useMemo(() => servicePages.find((item) => item.slug === slug), [slug]);
  const otherServices = useMemo(
    () => servicePages.filter((item) => item.slug !== slug),
    [slug],
  );

  if (!page) {
    return <NotFound />;
  }

  usePageSEO({
    title: page.title,
    description: page.description,
    canonical: `${baseUrl}${page.slug}`,
    ogTitle: page.title,
    ogDescription: page.description,
    ogImage: page.heroImage.src,
    ogType: "article",
  });

  return (
    <div className="will-change-auto">
      <Header />
      <main role="main" className="space-y-14 sm:space-y-16 lg:space-y-20">
        <section className="section pt-10 sm:pt-14 md:pt-16" id="top">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <Reveal>
                <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  {page.h1}
                </h1>
              </Reveal>
              {page.intro.map((paragraph, idx) => (
                <Reveal key={idx} delay={80 + idx * 40}>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={140}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <div className="text-sm font-semibold text-primary">Выезд по Москве</div>
                    <p className="mt-1 text-sm text-muted-foreground">30–60 минут либо в согласованное время</p>
                  </div>
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <div className="text-sm font-semibold text-primary">Бесплатная диагностика</div>
                    <p className="mt-1 text-sm text-muted-foreground">Перед согласованием работ</p>
                  </div>
                </div>
              </Reveal>
              {page.relatedLinks.length > 0 && (
                <Reveal delay={140}>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Также помогаем с{" "}
                    {page.relatedLinks.map((link, idx) => (
                      <span key={link.href}>
                        <a
                          className="font-semibold text-primary underline-offset-4 hover:underline"
                          href={link.href}
                        >
                          {link.label}
                        </a>
                        {idx < page.relatedLinks.length - 2 ? ", " : ""}
                        {idx === page.relatedLinks.length - 2 ? " и " : ""}
                      </span>
                    ))}
                    — можно оставить одну заявку на несколько задач.
                  </p>
                </Reveal>
              )}
              <Reveal delay={200}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Button
                    asChild
                    variant="hero"
                    size="xl"
                    className="min-h-[48px] w-full sm:w-auto"
                    aria-label={`Позвонить ${phone}`}
                  >
                    <a href={telHref}>Позвонить мастеру</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="xl"
                    className="min-h-[48px] w-full sm:w-auto"
                  >
                    <a href="#faq">Есть вопросы</a>
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-xl border bg-card shadow-elegant">
                <img
                  src={page.heroImage.src}
                  alt={page.heroImage.alt}
                  className="aspect-[4/3] h-full w-full object-cover sm:aspect-[3/2] lg:aspect-[4/3]"
                  loading="eager"
                  width="900"
                  height="675"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/0 to-background/10" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section space-y-6" id="subtypes">
          <Reveal>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              С чем работаем
            </h2>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.subtypes.map((item) => (
              <Reveal key={item}>
                <div className="rounded-lg border bg-card p-4 text-sm text-muted-foreground shadow-sm sm:text-base">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section space-y-6" id="issues">
          <Reveal>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Типичные неисправности
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.issues.map((issue, idx) => (
              <Reveal key={issue.title} delay={idx * 60}>
                <article className="rounded-lg border bg-card p-4 shadow-sm">
                  <h3 className="text-lg font-semibold leading-tight text-foreground">
                    {issue.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {issue.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section space-y-6" id="process">
          <Reveal>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Как проходит ремонт
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {page.steps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 70}>
                <article className="rounded-lg border bg-card p-4 shadow-sm h-full">
                  <div className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Шаг {idx + 1}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Преимущества сервиса ProFixNow
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.advantages.map((item, idx) => (
              <Reveal key={item} delay={idx * 70}>
                <article className="rounded-lg border bg-card p-4 shadow-sm h-full">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section space-y-6" id="reasons">
          <Reveal>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Почему выбирают нас для этой услуги
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.reasons.map((reason, idx) => (
              <Reveal key={reason} delay={idx * 70}>
                <article className="rounded-lg border bg-card p-4 shadow-sm h-full">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {reason}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section space-y-6">
          <div className="rounded-xl border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Связаться с мастером
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Быстрый вызов по телефону или заявка в один клик. Уточним модель, симптомы и договоримся о времени.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button
                asChild
                variant="phone"
                size="lg"
                className="min-h-[48px] w-full sm:w-auto"
                aria-label={`Позвонить ${phone}`}
              >
                <a href={telHref}>Позвонить {phone}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-[48px] w-full sm:w-auto"
              >
                <a href="#faq">Посмотреть ответы</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="section space-y-6" id="faq">
          <Reveal>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Частые вопросы
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.faq.map((item, idx) => (
              <Reveal key={item.question} delay={idx * 80}>
                <article className="rounded-lg border bg-card p-4 shadow-sm h-full">
                  <h3 className="text-lg font-semibold leading-tight text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section space-y-4">
          <div className="rounded-xl border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Готовы помочь
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {page.cta}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button
                asChild
                variant="phone"
                size="lg"
                className="min-h-[48px] w-full sm:w-auto"
                aria-label={`Позвонить ${phone}`}
              >
                <a href={telHref}>Позвонить сейчас</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-[48px] w-full sm:w-auto"
              >
                <a href="#top">К началу страницы</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="section space-y-5">
          <Reveal>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Другие услуги
            </h2>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((service) => (
              <Reveal key={service.slug}>
                <a
                  href={service.slug}
                  className="block rounded-lg border bg-card p-4 text-foreground shadow-sm transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <div className="text-base font-semibold leading-tight">
                    {service.h1}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {service.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default ServicePage;


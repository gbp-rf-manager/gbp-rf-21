import heroImg from "@/assets/hero-profixnow.jpg";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Truck, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const phone = "+7 495 128 09 84";
const telHref = "tel:+74951280984";

export const Hero = () => {
  return (
    <section id="top" className="section relative grid grid-cols-1 items-center gap-8 py-10 md:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
      <div>
        <Reveal>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Профессиональный ремонт техники в Москве
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Быстрый и надёжный ремонт с гарантией до 2 лет. Сертифицированные мастера, оригинальные запчасти, честные цены.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl" aria-label={`Вызвать мастера ${phone}`}>
              <a href={telHref}><Phone className="mr-2" /> Вызвать мастера</a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={telHref}><Wrench className="mr-2" /> Наши услуги</a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={220}>
          <ul className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
            <li className="flex items-center gap-2 rounded-md border bg-card p-3 shadow-sm">
              <Truck className="h-4 w-4 text-primary" /> Выезд за 30–60 минут
            </li>
            <li className="flex items-center gap-2 rounded-md border bg-card p-3 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-primary" /> Гарантия до 24 месяцев
            </li>
            <li className="flex items-center gap-2 rounded-md border bg-card p-3 shadow-sm">
              <Wrench className="h-4 w-4 text-primary" /> Бесплатная диагностика
            </li>
          </ul>
        </Reveal>
      </div>
      <Reveal className="relative">
        <div className="relative overflow-hidden rounded-xl shadow-elegant">
          <img src={heroImg} alt="Мастер ремонтирует стиральную машину — ProFixNow, ремонт бытовой техники в Москве" className="h-full w-full object-cover" loading="eager" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/0 to-background/10" />
        </div>
      </Reveal>
    </section>
  );
};

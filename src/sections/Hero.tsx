import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Truck, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useMemo } from "react";
import { getHeroContent } from "@/lib/hero-content";
import heroImg from "@/assets/hero-repair-gen.jpeg";

const phone = "+7 495 128 09 84";
const telHref = "tel:+74951280984";

export const Hero = () => {
  const heroContent = useMemo(() => getHeroContent(), []);
  
  return (
    <section id="top" className="section relative grid grid-cols-1 items-center gap-6 py-8 sm:gap-8 sm:py-12 md:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
      <div>
        <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl will-change-auto" style={{ contentVisibility: 'visible', containIntrinsicSize: 'auto auto' }}>
          {heroContent.h1}
        </h1>
        <Reveal delay={80}>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg sm:leading-relaxed">
            {heroContent.subtitle}
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
            <Button asChild variant="hero" size="xl" className="min-h-[48px] touch-manipulation" aria-label={`Оставить заявку ${phone}`}>
              <a href={telHref}><Phone className="mr-2 h-5 w-5" /> Оставить заявку</a>
            </Button>
            <Button asChild variant="outline" size="xl" className="min-h-[48px] touch-manipulation">
              <a href="#services"><Wrench className="mr-2 h-5 w-5" /> Смотреть услуги</a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={220}>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm sm:mt-8 sm:grid-cols-3 sm:gap-4">
            <li className="flex items-center gap-3 rounded-md border bg-card p-4 shadow-sm touch-manipulation">
              <Truck className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" /> 
              <span>Выезд за 30–60 минут</span>
            </li>
            <li className="flex items-center gap-3 rounded-md border bg-card p-4 shadow-sm touch-manipulation">
              <ShieldCheck className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" /> 
              <span>Гарантия до 24 месяцев</span>
            </li>
            <li className="flex items-center gap-3 rounded-md border bg-card p-4 shadow-sm touch-manipulation">
              <Wrench className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" /> 
              <span>Бесплатная диагностика</span>
            </li>
          </ul>
        </Reveal>
      </div>
      <Reveal className="relative">
        <div className="relative overflow-hidden rounded-xl shadow-elegant">
          <img 
            src={heroImg} 
            alt="Мастер ProFixNow выполняет ремонт стиральной машины в Москве" 
            className="aspect-[4/3] h-full w-full object-cover sm:aspect-[3/2] lg:aspect-[4/3]" 
            loading="eager"
            width="600"
            height="450"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/0 to-background/10" />
        </div>
      </Reveal>
    </section>
  );
};

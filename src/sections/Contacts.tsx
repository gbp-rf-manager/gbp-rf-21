import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const phone = "+7 495 128 09 84";
const telHref = "tel:+74951280984";

export const Contacts = () => {
  return (
    <section id="contacts" className="section scroll-mt-24 py-10 sm:py-14 md:py-16">
      <header>
        <Reveal>
          <h2 className="section-title">Контакты</h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="section-subtitle">Свяжитесь с нами удобным способом — работаем круглосуточно</p>
        </Reveal>
      </header>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-3">
        <Reveal>
          <article className="rounded-lg border bg-card p-5 shadow-sm touch-manipulation sm:p-6">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <Phone className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" /> 
              <span>Телефон</span>
            </div>
            <a href={telHref} className="mt-3 block text-xl font-bold text-primary hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              {phone}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">Консультации 24/7</p>
            <Button asChild variant="phone" size="lg" className="mt-4 w-full min-h-[48px] touch-manipulation" aria-label={`Позвонить ${phone}`}>
              <a href={telHref}><Phone className="mr-2 h-5 w-5" /> Позвонить сейчас</a>
            </Button>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="rounded-lg border bg-card p-5 shadow-sm touch-manipulation sm:p-6">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <MapPin className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" /> 
              <span>Адрес</span>
            </div>
            <address className="mt-3 not-italic">Широкая ул., 13А, Москва</address>
            <p className="mt-1 text-sm text-muted-foreground">Выезд по всему городу</p>
          </article>
        </Reveal>
        <Reveal delay={140}>
          <article className="rounded-lg border bg-card p-5 shadow-sm touch-manipulation sm:p-6">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <Clock className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" /> 
              <span>Режим работы</span>
            </div>
            <time className="mt-3 block">Ежедневно: 8:00 — 22:00</time>
            <p className="mt-1 text-sm text-muted-foreground">Выезд мастера в день обращения</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
};

import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const phone = "+7 495 128 09 84";
const telHref = "tel:+74951280984";

export const Contacts = () => {
  return (
    <section id="contacts" className="section scroll-mt-24 py-12 sm:py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold sm:text-3xl">Контакты</h2>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Reveal>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <Phone className="h-5 w-5 text-primary" /> Телефон
            </div>
            <a href={telHref} className="mt-3 block text-xl font-bold text-primary hover:underline">
              {phone}
            </a>
            <div className="mt-2 text-sm text-muted-foreground">Консультации 24/7</div>
            <Button asChild variant="phone" size="lg" className="mt-4 w-full" aria-label={`Позвонить ${phone}`}>
              <a href={telHref}><Phone className="mr-2" /> Позвонить сейчас</a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <MapPin className="h-5 w-5 text-primary" /> Адрес
            </div>
            <div className="mt-3">Широкая ул., 13А, Москва</div>
            <div className="mt-1 text-sm text-muted-foreground">Выезд по всему городу</div>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <Clock className="h-5 w-5 text-primary" /> Режим работы
            </div>
            <div className="mt-3">Ежедневно: 8:00 — 22:00</div>
            <div className="mt-1 text-sm text-muted-foreground">Выезд мастера в день обращения</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

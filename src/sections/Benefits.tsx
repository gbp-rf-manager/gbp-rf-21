import { Reveal } from "@/components/Reveal";
import { BadgeCheck, Gauge, ShieldCheck, Users } from "lucide-react";

const foundationYear = 2008;
const years = new Date().getFullYear() - foundationYear;

export const Benefits = () => {
  return (
    <section id="benefits" className="section scroll-mt-24 py-10 sm:py-14 md:py-16">
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <Reveal>
            <h2 className="section-title">Почему ProFixNow</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="section-subtitle max-w-prose">
              Работаем в Москве с 2008 года. Ставим качество и честность выше всего: используем оригинальные запчасти и даём расширенную гарантию на выполненные работы.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
              {[
                { icon: Gauge, text: "Быстрый выезд (30–60 минут)" },
                { icon: BadgeCheck, text: "Бесплатная диагностика" },
                { icon: ShieldCheck, text: "Оригинальные запчасти" },
                { icon: Users, text: "Сертифицированные мастера" },
              ].map((b, i) => (
                <li key={b.text} className="flex items-center gap-3 rounded-md border bg-card p-4 shadow-sm touch-manipulation">
                  <b.icon className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" /> 
                  <span className="text-sm font-medium sm:text-base">{b.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[
            { label: "Лет опыта", value: `${years}+` },
            { label: "Довольных клиентов", value: "5000+" },
            { label: "Успешных ремонтов", value: "98%" },
            { label: "Гарантия", value: "до 24 мес" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="rounded-lg border bg-card p-4 text-center shadow-sm touch-manipulation sm:p-6">
                <div className="text-2xl font-bold leading-none sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

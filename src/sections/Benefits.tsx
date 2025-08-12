import { Reveal } from "@/components/Reveal";
import { BadgeCheck, Gauge, ShieldCheck, Users } from "lucide-react";

const foundationYear = 2008;
const years = new Date().getFullYear() - foundationYear;

export const Benefits = () => {
  return (
    <section id="benefits" className="section scroll-mt-24 py-12 sm:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl">Почему ProFixNow</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 max-w-prose text-muted-foreground">
              Работаем в Москве с 2008 года. Ставим качество и честность выше всего: используем оригинальные запчасти и даём расширенную гарантию на выполненные работы.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { icon: Gauge, text: "Быстрый выезд (30–60 минут)" },
                { icon: BadgeCheck, text: "Бесплатная диагностика" },
                { icon: ShieldCheck, text: "Оригинальные запчасти" },
                { icon: Users, text: "Сертифицированные мастера" },
              ].map((b, i) => (
                <li key={b.text} className="flex items-center gap-2 rounded-md border bg-card p-3 shadow-sm">
                  <b.icon className="h-4 w-4 text-primary" /> {b.text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Лет опыта", value: `${years}+` },
            { label: "Довольных клиентов", value: "5000+" },
            { label: "Успешных ремонтов", value: "98%" },
            { label: "Гарантия", value: "до 24 мес" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="text-3xl font-bold">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

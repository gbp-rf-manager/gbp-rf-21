import { Reveal } from "@/components/Reveal";
import { PhoneCall, Search, Truck, Wrench } from "lucide-react";

export const Process = () => {
  const steps = [
    { icon: PhoneCall, title: "Звонок", text: "Вы звоните или оставляете заявку (1 мин)" },
    { icon: Truck, title: "Выезд", text: "Мастер выезжает к вам (30–60 мин)" },
    { icon: Search, title: "Диагностика", text: "Бесплатная диагностика и смета (15 мин)" },
    { icon: Wrench, title: "Ремонт", text: "Ремонт с гарантией (1–3 часа)" },
  ];
  return (
    <section className="section py-10 sm:py-14 md:py-16">
      <header>
        <Reveal>
          <h2 className="section-title">Как мы работаем</h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="section-subtitle">Простой и понятный процесс от звонка до готового результата</p>
        </Reveal>
      </header>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <article className="rounded-lg border bg-card p-5 shadow-sm touch-manipulation sm:p-6">
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

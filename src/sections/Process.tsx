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
    <section className="section py-12 sm:py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold sm:text-3xl">Как мы работаем</h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-primary" />
                <div className="text-lg font-semibold">{s.title}</div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

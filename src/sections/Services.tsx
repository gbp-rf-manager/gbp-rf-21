import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Radio, ShieldCheck, Snowflake, Wrench, Cog } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    icon: Wrench,
    title: "Ремонт стиральных машин",
    points: [
      "Замена подшипников и сальников",
      "Ремонт модуля управления",
      "Чистка и дезинфекция",
      "Замена ТЭНа и помпы",
    ],
  },
  {
    icon: Snowflake,
    title: "Ремонт холодильников",
    points: [
      "Заправка и замена фреона",
      "Замена компрессора",
      "Ремонт системы No Frost",
      "Замена термостата",
    ],
  },
  {
    icon: Droplets,
    title: "Ремонт посудомоечных машин",
    points: [
      "Замена циркуляционного насоса",
      "Чистка фильтров и форсунок",
      "Ремонт панели управления",
      "Устранение протечек",
    ],
  },
  {
    icon: Radio,
    title: "Ремонт микроволновых печей",
    points: [
      "Замена магнетрона",
      "Ремонт блока питания",
      "Замена слюдяной пластины",
      "Настройка мощности",
    ],
  },
  {
    icon: Cog,
    title: "Ремонт мелкой техники",
    points: [
      "Замена нагревательных элементов",
      "Ремонт электронных плат",
      "Замена кнопок и переключателей",
      "Профилактическое ТО",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Техническое обслуживание",
    points: [
      "Комплексная диагностика",
      "Чистка и смазка механизмов",
      "Замена расходных материалов",
      "Настройка и калибровка",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="section scroll-mt-24 py-10 sm:py-14 md:py-16">
      <header>
        <Reveal>
          <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">Наши услуги</h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-2 text-muted-foreground sm:mt-3">Профессиональный ремонт всех видов бытовой техники</p>
        </Reveal>
      </header>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {services.map((s, idx) => (
          <Reveal key={s.title} delay={idx * 70}>
            <article className="h-full">
              <Card className="h-full touch-manipulation">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <s.icon className="h-6 w-6 flex-shrink-0 text-primary sm:h-5 sm:w-5" aria-hidden="true" />
                    <CardTitle className="text-base font-semibold leading-tight sm:text-lg">{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground sm:space-y-1.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary"></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

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
    <section id="services" className="section scroll-mt-24 py-12 sm:py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold sm:text-3xl">Наши услуги</h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => (
          <Reveal key={s.title} delay={idx * 70}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5 text-primary" aria-hidden />
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

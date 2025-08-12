import team1 from "@/assets/team-master-1.jpg";
import team2 from "@/assets/team-master-2.jpg";
import team3 from "@/assets/team-master-3.jpg";
import { Reveal } from "@/components/Reveal";

export const About = () => {
  return (
    <section id="about" className="section scroll-mt-24 py-12 sm:py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold sm:text-3xl">О компании</h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-4 max-w-prose text-muted-foreground">
          ProFixNow — современный сервисный центр, работающий в Москве с 2008 года. Мы специализируемся на профессиональном ремонте бытовой техники всех марок и моделей. Наша команда сертифицированных мастеров использует современное диагностическое оборудование и оригинальные запчасти, что позволяет гарантировать высочайшее качество услуг.
        </p>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          { img: team1, name: "Иван Петров", role: "Главный мастер", exp: "10+ лет опыта" },
          { img: team2, name: "Анна Соколова", role: "Ведущий диагност", exp: "7+ лет опыта" },
          { img: team3, name: "Сергей Кузнецов", role: "Мастер-универсал", exp: "5+ лет опыта" },
        ].map((m, i) => (
          <Reveal key={m.name} delay={i * 80}>
            <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
              <img src={m.img} alt={`${m.name} — ${m.role} ProFixNow`} className="h-64 w-full object-cover" loading="lazy" />
              <div className="p-4">
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role} · {m.exp}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

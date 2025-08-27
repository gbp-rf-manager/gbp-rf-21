import team1 from "@/assets/team-master-1.jpg";
import team2 from "@/assets/team-master-2.jpg";
import team3 from "@/assets/team-master-3.jpg";
import { Reveal } from "@/components/Reveal";

export const About = () => {
  return (
    <section id="about" className="section scroll-mt-24 py-10 sm:py-14 md:py-16">
      <header>
        <Reveal>
          <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">О компании</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-3 max-w-prose text-base leading-relaxed text-muted-foreground sm:mt-4">
            ProFixNow — современный сервисный центр, работающий в Москве с 2008 года. Мы специализируемся на профессиональном ремонте бытовой техники всех марок и моделей. Наша команда сертифицированных мастеров использует современное диагностическое оборудование и оригинальные запчасти, что позволяет гарантировать высочайшее качество услуг.
          </p>
        </Reveal>
      </header>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {[
          { img: team1, name: "Иван Петров", role: "Главный мастер", exp: "10+ лет опыта" },
          { img: team2, name: "Анна Соколова", role: "Ведущий диагност", exp: "7+ лет опыта" },
          { img: team3, name: "Сергей Кузнецов", role: "Мастер-универсал", exp: "5+ лет опыта" },
        ].map((m, i) => (
          <Reveal key={m.name} delay={i * 80}>
            <article className="overflow-hidden rounded-lg border bg-card shadow-sm touch-manipulation">
              <img 
                src={m.img} 
                alt={`${m.name} — опытный ${m.role.toLowerCase()} сервисного центра ProFixNow с ${m.exp.toLowerCase()} работы в сфере ремонта бытовой техники`} 
                className="aspect-[4/3] w-full object-cover" 
                loading="lazy" 
                width="300"
                height="225"
              />
              <div className="p-4">
                <h3 className="font-semibold leading-tight">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role} · {m.exp}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

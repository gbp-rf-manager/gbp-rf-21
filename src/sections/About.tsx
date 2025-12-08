import { Reveal } from "@/components/Reveal";

export const About = () => {
  const teamGallery = [
    {
      name: "Иван Петров",
      role: "Главный мастер",
      exp: "10+ лет опыта",
      photo: "https://images.unsplash.com/photo-1580894906472-df8e05e3ba54?auto=format&fit=crop&w=800&q=80",
      prompt:
        "Славянский мастер по ремонту бытовой техники, в рабочем комбинезоне, улыбается и держит инструментальный ящик в современной кухне.",
    },
    {
      name: "Анна Соколова",
      role: "Ведущий диагност",
      exp: "7+ лет опыта",
      photo: "https://images.unsplash.com/photo-1599050751795-7c37e1b79c5b?auto=format&fit=crop&w=800&q=80",
      prompt:
        "Славянская женщина-мастер в светлой мастерской проверяет плату управления, мягкий дневной свет, деловой взгляд.",
    },
    {
      name: "Сергей Кузнецов",
      role: "Мастер-универсал",
      exp: "5+ лет опыта",
      photo: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=800&q=80",
      prompt:
        "Славянский техник в жилете и перчатках чинит холодильник у клиента дома, реалистичное фото.",
    },
  ];

  return (
    <section id="about" className="section scroll-mt-24 py-10 sm:py-14 md:py-16">
      <header>
        <Reveal>
          <h2 className="section-title">О компании</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="section-subtitle max-w-prose">
            ProFixNow — современный сервисный центр, работающий в Москве с 2008 года. Мы специализируемся на профессиональном ремонте бытовой техники всех марок и моделей. Наша команда сертифицированных мастеров использует современное диагностическое оборудование и оригинальные запчасти, что позволяет гарантировать высочайшее качество услуг.
          </p>
        </Reveal>
      </header>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {teamGallery.map((m, i) => (
          <Reveal key={m.name} delay={i * 80}>
            <article className="overflow-hidden rounded-lg border bg-card shadow-sm touch-manipulation">
              <img 
                src={m.photo} 
                alt={`${m.name} — славянский ${m.role.toLowerCase()} ProFixNow, ${m.exp.toLowerCase()} ремонта техники`} 
                className="aspect-[4/3] w-full object-cover" 
                loading="lazy" 
                width="300"
                height="225"
                data-image-prompt={m.prompt}
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

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { servicesData, type ServiceItem } from "@/data/services-data";
import { Link } from "react-router-dom";

const telHref = "tel:+74951280984";

export const Services = () => {
  return (
    <section id="services" className="section scroll-mt-24 py-10 sm:py-14 md:py-16">
      <header>
        <Reveal>
          <h2 className="section-title">Наши услуги</h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="section-subtitle">
            Профессиональный ремонт техники и домашние услуги по всей Москве
          </p>
        </Reveal>
      </header>

      {servicesData.map((category, categoryIdx) => (
        <div key={category.id} className="mt-10 sm:mt-12">
          <Reveal delay={categoryIdx * 50}>
            <h3 className="mb-6 text-xl font-semibold sm:text-2xl">{category.h2}</h3>
          </Reveal>

          <div className="space-y-3">
            {category.services.map((service, idx) => (
              <ServiceListItem
                key={service.id}
                service={service}
                delay={categoryIdx * 50 + idx * 40}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

interface ServiceListItemProps {
  service: ServiceItem;
  delay: number;
}

const ServiceListItem = ({ service, delay }: ServiceListItemProps) => {
  const Icon = service.icon;
  const hasDetails = Boolean(service.pageSlug);

  return (
    <Reveal delay={delay}>
      <article className="group flex flex-col gap-4 rounded-lg border bg-card p-4 shadow-sm touch-manipulation transition-all hover:shadow-elegant focus-within:ring-2 focus-within:ring-primary sm:flex-row sm:items-start sm:p-5">
        <div className="rounded-lg bg-primary/10 p-2 self-start">
          <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold leading-tight group-hover:text-primary sm:text-lg">
            {service.titleTemplate}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            {service.typicalWorks.slice(0, 3).map((work, idx) => (
              <span key={idx} className="flex items-center">
                <span className="mr-1.5 h-1 w-1 rounded-full bg-primary"></span>
                {work}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {hasDetails && service.pageSlug && (
              <Button asChild variant="secondary" size="sm">
                <Link to={service.pageSlug}>Подробнее</Link>
              </Button>
            )}
            <Button asChild variant="outline" size="sm">
              <a href={telHref}>Заказать</a>
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

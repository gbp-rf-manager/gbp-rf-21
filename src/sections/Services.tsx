import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { servicesData, type ServiceItem } from "@/data/services-data";

const phone = "+7 495 128 09 84";
const telHref = "tel:+74951280984";

export const Services = () => {
  return (
    <section id="services" className="section scroll-mt-24 py-10 sm:py-14 md:py-16">
      <header>
        <Reveal>
          <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">Наши услуги</h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-2 text-muted-foreground sm:mt-3">
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
  const handleCardClick = () => {
    if (service.slug) {
      window.location.href = service.slug;
      return;
    }
    window.location.href = telHref;
  };
  
  return (
    <Reveal delay={delay}>
      <article
        className="group flex flex-col cursor-pointer gap-4 rounded-lg border bg-card p-4 shadow-sm touch-manipulation transition-all hover:shadow-elegant focus-within:ring-2 focus-within:ring-primary sm:flex-row sm:items-center sm:p-5"
        onClick={handleCardClick}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
      >
        <div className="rounded-lg bg-primary/10 p-2 self-start">
          <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0 space-y-2">
          <h4 className="text-base font-semibold leading-tight group-hover:text-primary sm:text-lg">
            {service.titleTemplate}
          </h4>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            {service.typicalWorks.slice(0, 3).map((work, idx) => (
              <span key={idx} className="flex items-center">
                <span className="mr-1.5 h-1 w-1 rounded-full bg-primary"></span>
                {work}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-2 flex w-full flex-col gap-2 self-stretch sm:mt-0 sm:w-auto sm:flex-row sm:items-center">
          {service.slug && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="min-w-[120px] w-full sm:w-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <a href={service.slug}>Подробнее</a>
            </Button>
          )}
          <Button
            variant="secondary"
            size="sm"
            className="min-w-[120px] w-full sm:w-auto"
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = telHref;
            }}
          >
            Заказать
          </Button>
        </div>
      </article>
    </Reveal>
  );
};

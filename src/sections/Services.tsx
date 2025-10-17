import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { servicesData, type ServiceItem } from "@/data/services-data";

const phone = "+7 495 128 09 84";
const telHref = "tel:+74951280984";

export const Services = () => {

  const handleServiceClick = (e: React.MouseEvent, serviceId: string) => {
    e.preventDefault();
    // Navigate to contacts section or trigger call
    window.location.href = telHref;
  };

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
                onClick={(e) => handleServiceClick(e, service.id)}
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
  onClick: (e: React.MouseEvent) => void;
}

const ServiceListItem = ({ service, delay, onClick }: ServiceListItemProps) => {
  const Icon = service.icon;
  
  return (
    <Reveal delay={delay}>
      <article
        className="group flex cursor-pointer gap-4 rounded-lg border bg-card p-4 shadow-sm touch-manipulation transition-all hover:shadow-elegant focus-within:ring-2 focus-within:ring-primary sm:p-5"
        onClick={onClick}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(e as any);
          }
        }}
      >
        <div className="rounded-lg bg-primary/10 p-2 self-start">
          <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold leading-tight group-hover:text-primary sm:text-lg">
            {service.titleTemplate}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
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
        </div>
        <Button 
          variant="outline" 
          size="sm"
          className="hidden sm:flex self-center"
          onClick={onClick}
        >
          Заказать
        </Button>
      </article>
    </Reveal>
  );
};

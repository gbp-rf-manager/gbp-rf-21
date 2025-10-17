import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { servicesData, type ServiceCategory, type ServiceItem } from "@/data/services-data";
import { LayoutGrid, List } from "lucide-react";

type LayoutMode = "cards" | "list";

const phone = "+7 495 128 09 84";
const telHref = "tel:+74951280984";

export const Services = () => {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("cards");

  const handleServiceClick = (e: React.MouseEvent, serviceId: string) => {
    e.preventDefault();
    // Navigate to contacts section or trigger call
    window.location.href = telHref;
  };

  return (
    <section id="services" className="section scroll-mt-24 py-10 sm:py-14 md:py-16">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Reveal>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">Наши услуги</h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-2 text-muted-foreground sm:mt-3">
              Профессиональный ремонт техники и домашние услуги по всей Москве
            </p>
          </Reveal>
        </div>
        
        <Reveal delay={100}>
          <div className="flex gap-2 rounded-lg border bg-card p-1 shadow-sm">
            <Button
              variant={layoutMode === "cards" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLayoutMode("cards")}
              className="gap-2"
              aria-label="Режим карточек"
            >
              <LayoutGrid className="h-4 w-4" />
              <span className="hidden sm:inline">Карточки</span>
            </Button>
            <Button
              variant={layoutMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLayoutMode("list")}
              className="gap-2"
              aria-label="Режим списка"
            >
              <List className="h-4 w-4" />
              <span className="hidden sm:inline">Список</span>
            </Button>
          </div>
        </Reveal>
      </header>

      {servicesData.map((category, categoryIdx) => (
        <div key={category.id} className="mt-10 sm:mt-12">
          <Reveal delay={categoryIdx * 50}>
            <h3 className="mb-6 text-xl font-semibold sm:text-2xl">{category.h2}</h3>
          </Reveal>

          {layoutMode === "cards" ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {category.services.map((service, idx) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  delay={categoryIdx * 50 + idx * 60}
                  onClick={(e) => handleServiceClick(e, service.id)}
                />
              ))}
            </div>
          ) : (
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
          )}
        </div>
      ))}
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceItem;
  delay: number;
  onClick: (e: React.MouseEvent) => void;
}

const ServiceCard = ({ service, delay, onClick }: ServiceCardProps) => {
  const Icon = service.icon;
  
  return (
    <Reveal delay={delay}>
      <article className="h-full">
        <Card 
          className="group h-full cursor-pointer touch-manipulation transition-all hover:shadow-elegant focus-within:ring-2 focus-within:ring-primary"
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
          <CardHeader className="pb-3">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-base font-semibold leading-tight group-hover:text-primary sm:text-lg">
                  {service.titleTemplate}
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <ul className="space-y-1.5 text-sm leading-relaxed text-muted-foreground">
              {service.typicalWorks.map((work, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary"></span>
                  {work}
                </li>
              ))}
            </ul>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-3 w-full"
              onClick={onClick}
            >
              Оставить заявку
            </Button>
            {service.seoMicro && (
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground/80">
                {service.seoMicro}
              </p>
            )}
          </CardContent>
        </Card>
      </article>
    </Reveal>
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

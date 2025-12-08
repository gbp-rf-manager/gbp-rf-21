import { Reveal } from "@/components/Reveal";
import { servicesData } from "@/data/services-data";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const telHref = "tel:+74951280984";

export const ServiceLinks = () => {
  return (
    <section className="section py-10 sm:py-14">
      <Reveal>
        <h2 className="section-title mb-6">Быстрый доступ к услугам</h2>
      </Reveal>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((category, catIdx) => (
          <Reveal key={category.id} delay={catIdx * 80}>
            <div className="rounded-lg border bg-card p-5 shadow-sm">
              <h3 className="mb-3 text-base font-semibold">{category.title}</h3>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.id}>
                    {service.pageSlug ? (
                      <Link
                        to={service.pageSlug}
                        className="group flex items-center gap-2 rounded px-1 py-0.5 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        <ChevronRight className="h-3 w-3 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                        <span>{service.title}</span>
                        <span className="text-xs text-primary/70">Подробнее</span>
                      </Link>
                    ) : (
                      <a
                        href={telHref}
                        className="group flex items-center gap-2 rounded px-1 py-0.5 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        <ChevronRight className="h-3 w-3 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                        <span>{service.title}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      
      <Reveal delay={240}>
        <div className="mt-8 rounded-lg border bg-card p-6 text-center shadow-sm">
          <p className="text-sm text-muted-foreground">
            Не нашли нужную услугу?{" "}
            <a 
              href="#contacts" 
              className="font-medium text-primary underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              Свяжитесь с нами
            </a>
            {" "}— решим любую задачу!
          </p>
        </div>
      </Reveal>
    </section>
  );
};

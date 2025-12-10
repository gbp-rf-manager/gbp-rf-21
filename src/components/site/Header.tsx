import { Menu, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { servicePages } from "@/data/service-pages";

const phone = "+7 495 128 09 84";
const telHref = "tel:+74951280984";

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <nav className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
    <a href="#services" onClick={onClick} className="text-sm font-medium hover:underline underline-offset-4">Услуги</a>
    <a href="#benefits" onClick={onClick} className="text-sm font-medium hover:underline underline-offset-4">Преимущества</a>
    <a href="#about" onClick={onClick} className="text-sm font-medium hover:underline underline-offset-4">О компании</a>
    <a href="#contacts" onClick={onClick} className="text-sm font-medium hover:underline underline-offset-4">Контакты</a>
  </nav>
);

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="section flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2" aria-label="На главную">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary/90 text-secondary-foreground shadow-elegant">
            <Wrench className="h-5 w-5" aria-hidden />
          </div>
          <span className="text-lg font-semibold">ProFixNow</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <DesktopServicesMenu />
          <NavLinks />
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="phone" size="lg" aria-label={`Позвонить ${phone}`}>
            <a href={telHref}>
              <Phone className="mr-2" /> {phone}
            </a>
          </Button>
        </div>

      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="nav" size="icon" className="min-h-[44px] min-w-[44px]" aria-label="Открыть меню">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-6">
            <a href="/" className="flex items-center gap-2" onClick={() => setOpen(false)} aria-label="На главную">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-secondary/90 text-secondary-foreground">
                <Wrench className="h-4 w-4" />
              </div>
              <span className="text-base font-semibold">ProFixNow</span>
            </a>
            <NavLinks onClick={() => setOpen(false)} />
            <Button asChild variant="phone" size="lg" className="mt-auto min-h-[48px]" aria-label={`Позвонить ${phone}`}>
              <a href={telHref}>
                <Phone className="mr-2" /> {phone}
              </a>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
      </div>
      <ServiceSubmenu />
    </header>
  );
};

const ServiceSubmenu = () => {
  return (
    <div className="border-t bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 md:hidden">
      <div className="section flex items-center gap-3 overflow-x-auto py-2 text-xs sm:text-sm">
        {servicePages.map((service) => (
          <a
            key={service.slug}
            href={service.slug}
            className="whitespace-nowrap rounded-full border px-3 py-1 text-muted-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {service.h1}
          </a>
        ))}
      </div>
    </div>
  );
};

const DesktopServicesMenu = () => {
  return (
    <div className="relative hidden md:block">
      <div className="group relative">
        <a
          href="#services"
          className="text-sm font-medium hover:underline underline-offset-4"
          aria-label="Услуги"
        >
          Услуги
        </a>
        <div className="invisible absolute left-0 top-full z-50 mt-2 w-[540px] rounded-lg border bg-popover p-3 opacity-0 shadow-lg transition duration-200 group-hover:visible group-hover:opacity-100">
          <div className="grid grid-cols-2 gap-3 text-sm">
            {servicePages.map((service) => (
              <a
                key={service.slug}
                href={service.slug}
                className="rounded-md p-3 hover:bg-accent/60 hover:text-accent-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="text-sm font-semibold leading-tight">{service.h1}</div>
                <div className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {service.description}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

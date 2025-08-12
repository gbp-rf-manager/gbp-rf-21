import { Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const phone = "+7 495 128 09 84";
const telHref = "tel:+74951280984";

export const Footer = () => {
  return (
    <footer className="mt-12 border-t bg-background py-10">
      <div className="section flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} ProFixNow. Все права защищены.</div>
        <div className="flex gap-3">
          <Button asChild variant="phone" size="lg" aria-label={`Вызвать мастера ${phone}`}>
            <a href={telHref}><Phone className="mr-2" /> Вызвать мастера</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={telHref}><Wrench className="mr-2" /> Заказать ремонт</a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

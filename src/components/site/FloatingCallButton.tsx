import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const phone = "+7 495 128 09 84";
const telHref = "tel:+74951280984";

export const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <Button asChild variant="phone" size="icon" className="animate-phone-pulse shadow-glow min-h-[56px] min-w-[56px] sm:min-h-[64px] sm:min-w-[64px]" aria-label={`Позвонить ${phone}`}>
        <a href={telHref}>
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

interface RevealProps extends PropsWithChildren {
  className?: string;
  animation?: 'fade-up' | 'fade-in';
  delay?: number; // ms
}

export const Reveal = ({ children, className, animation = 'fade-up', delay = 0 }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      className={cn(
        !inView && 'opacity-0 translate-y-4',
        inView && (animation === 'fade-up' ? 'animate-fade-up' : 'animate-fade-in'),
        className
      )}
    >
      {children}
    </div>
  );
};

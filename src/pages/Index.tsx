import { Header } from "@/components/site/Header";
import { FloatingCallButton } from "@/components/site/FloatingCallButton";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Benefits } from "@/sections/Benefits";
import { Process } from "@/sections/Process";
import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Footer } from "@/components/site/Footer";
import { useEffect, useMemo } from "react";

const Index = () => {
  const jsonLd = useMemo(() => {
    const url = typeof window !== 'undefined' ? window.location.origin : 'https://example.com';
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "ProFixNow",
      description: "Профессиональный ремонт бытовой техники в Москве. Выезд за 30 минут, гарантия до 2 лет, бесплатная диагностика.",
      image: `${url}/favicon.ico`,
      telephone: "+7 495 128 09 84",
      url,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Широкая ул., 13А",
        addressLocality: "Москва",
        addressCountry: "RU"
      },
      areaServed: {
        "@type": "City",
        name: "Москва"
      },
      openingHours: "Mo-Su 08:00-22:00",
      sameAs: [],
      priceRange: "$$" as const,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "150",
        bestRating: "5",
        worstRating: "1"
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги по ремонту бытовой техники",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ремонт стиральных машин",
              description: "Профессиональный ремонт стиральных машин всех марок с гарантией"
            }
          },
          {
            "@type": "Offer", 
            itemOffered: {
              "@type": "Service",
              name: "Ремонт холодильников",
              description: "Качественный ремонт холодильников с выездом на дом"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service", 
              name: "Ремонт посудомоечных машин",
              description: "Быстрый ремонт посудомоечных машин на дому"
            }
          }
        ]
      }
    }
  }, []);

  useEffect(() => {
    // Single H1 is in Hero. Nothing else to do here.
  }, []);

  return (
    <div className="will-change-auto">
      <Header />
      <main role="main">
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <About />
        <Contacts />
      </main>
      <Footer />
      <FloatingCallButton />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default Index;

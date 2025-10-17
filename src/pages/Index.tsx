import { Header } from "@/components/site/Header";
import { FloatingCallButton } from "@/components/site/FloatingCallButton";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Benefits } from "@/sections/Benefits";
import { Process } from "@/sections/Process";
import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Footer } from "@/components/site/Footer";
import { ServiceLinks } from "@/components/site/ServiceLinks";
import { useEffect, useMemo } from "react";
import { servicesData } from "@/data/services-data";

const Index = () => {
  const jsonLd = useMemo(() => {
    const url = typeof window !== 'undefined' ? window.location.origin : 'https://example.com';
    
    // Generate ItemList for all services
    const allServices = servicesData.flatMap(category => 
      category.services.map(service => ({
        "@type": "Service" as const,
        name: service.titleTemplate,
        description: service.description,
        provider: {
          "@type": "LocalBusiness" as const,
          name: "ProFixNow"
        }
      }))
    );

    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "ProFixNow",
      description: "Профессиональный ремонт бытовой техники, электроники и домашние услуги в Москве. Выезд за 30 минут, гарантия до 2 лет, бесплатная диагностика.",
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
        "@type": "ItemList",
        name: "Список услуг",
        itemListElement: allServices
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
        <ServiceLinks />
        <Contacts />
      </main>
      <Footer />
      <FloatingCallButton />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default Index;

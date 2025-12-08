import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { usePageSeo } from "@/hooks/usePageSeo";

const NotFound = () => {
  const location = useLocation();

  usePageSeo({
    title: "Страница не найдена — ProFixNow",
    description: "Запрошенная страница не существует. Вернитесь на главную ProFixNow.",
  });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Страница не найдена</p>
        <a href="/" className="text-primary underline underline-offset-4">
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default NotFound;

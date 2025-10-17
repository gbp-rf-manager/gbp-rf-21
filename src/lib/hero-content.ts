// Dynamic H1 and subtitle generation with variation patterns
// Patterns: Service-focus, Value-focus, Action-focus, Location-focus, Wide-coverage

type Pattern = 'service' | 'value' | 'action' | 'location' | 'wide';

interface HeroContent {
  h1: string;
  subtitle: string;
  pattern: Pattern;
}

const city = "Москве";
const region = "Москвы";

const patterns: Record<Pattern, HeroContent> = {
  service: {
    h1: `Ремонт техники и услуги мастера в ${city}`,
    subtitle: `Восстанавливаем бытовую технику, электронику и выполняем все виды домашних работ по ${region}. Оставьте заявку для выезда мастера.`,
    pattern: 'service'
  },
  value: {
    h1: `Надёжный ремонт техники в ${city} с гарантией`,
    subtitle: `Профессиональные мастера устраняют неисправности быстро и качественно. Выезд, диагностика и широкий спектр услуг для вашего дома.`,
    pattern: 'value'
  },
  action: {
    h1: `Починим вашу технику в ${city} за один визит`,
    subtitle: `Ремонтируем стиральные машины, холодильники, ноутбуки и другую технику. Плюс электрика, сантехника и ремонтные работы любой сложности.`,
    pattern: 'action'
  },
  location: {
    h1: `Мастер на дом в ${city}: техника и услуги`,
    subtitle: `Выезжаем по всей ${region} для ремонта бытовой техники, электроники и выполнения домашних работ. Звоните или оставьте заявку онлайн.`,
    pattern: 'location'
  },
  wide: {
    h1: `Ремонт техники и домашние услуги в ${city}`,
    subtitle: `От стиральных машин до компьютеров, от электрики до сантехники — всё в одном месте. Быстрый выезд мастера и комплексное решение ваших задач.`,
    pattern: 'wide'
  }
};

// Select a random pattern or cycle based on domain/session
export function getHeroContent(): HeroContent {
  const allPatterns: Pattern[] = ['service', 'value', 'action', 'location', 'wide'];
  const randomPattern = allPatterns[Math.floor(Math.random() * allPatterns.length)];
  return patterns[randomPattern];
}

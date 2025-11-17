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

const Index = () => {
  const seoKeywords = {
    primary: "ремонт бытовой техники в москве",
    secondary: [
      "ремонт стиральных машин",
      "ремонт холодильников",
      "ремонт посудомоечных машин",
      "ремонт духовых шкафов",
      "ремонт варочных панелей",
      "ремонт электроплит",
      "ремонт кофемашин",
      "ремонт водонагревателей",
      "подключение бытовой техники",
      "ремонт ноутбуков",
      "ремонт телевизоров",
      "ремонт компьютеров",
      "ремонт пылесосов",
      "ремонт электроники москва",
      "ремонт мониторов",
      "ремонт оргтехники",
      "ремонт apple macbook iphone",
      "ремонт dyson",
    ],
    lsi: [
      "мастер по ремонту на дому",
      "срочный ремонт техники",
      "выезд мастера за 30 минут",
      "бесплатная диагностика",
      "гарантия до 2 лет",
      "диагностика неисправностей",
      "замена запчастей",
      "ремонт без вывоза",
      "оформить заявку на ремонт",
      "смета на ремонт",
      "обслуживание бытовой техники",
      "ремонт телевизоров на дому",
      "ремонт ноутбуков с выездом",
      "ремонт и установка техники",
      "контакты сервиса москва",
      "ремонт бытовых приборов",
    ],
  };

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
        {/* SEO:PFN:Article START */}
        <section className="section my-12 sm:my-16" data-test-id="pfn-article">
          <div className="rounded-2xl border bg-card/80 p-6 shadow-elegant backdrop-blur sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8">
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">Ремонт техники и услуги мастеров в Москве - ProFixNow</h1>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  ProFixNow - сервис ремонта бытовой техники и электроники в Москве. Выполняем диагностику и ремонт на дому или в мастерской, работаем с популярными моделями и узлами. На странице указаны бесплатная диагностика, быстрый выезд и гарантия до 2 лет.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Если техника не включается, появились ошибки, шум или течь - поможем выявить причину и вернуть устройство к работе. Для консультации и записи звоните:{" "}
                  <a className="font-semibold text-primary underline-offset-4 hover:underline" href="tel:+74951280984">
                    +7 495 128-09-84
                  </a>.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Что мы ремонтируем</h2>
                  <div className="space-y-4 rounded-xl border bg-background/60 p-4 sm:p-5">
                    <h3 className="text-lg font-semibold text-foreground">Бытовая техника</h3>
                    <ul className="grid gap-2 text-muted-foreground">
                      <li><strong className="text-foreground">Стиральная машина</strong> - не сливает/не отжимает, вибрация, течь, коды ошибок.</li>
                      <li><strong className="text-foreground">Посудомоечная машина</strong> - не греет, плохо моет, остаётся вода.</li>
                      <li><strong className="text-foreground">Сушильная машина</strong> - не сушит, перегрев, барабан не крутится.</li>
                      <li><strong className="text-foreground">Холодильник</strong> - не морозит, иней, щелчки реле, шум.</li>
                      <li><strong className="text-foreground">Кофемашина</strong> - нет подачи воды, ошибки, протечки.</li>
                      <li><strong className="text-foreground">Электроплита</strong> - не греют конфорки, срабатывает защита.</li>
                      <li><strong className="text-foreground">Варочная панель</strong> - не включается, сбои сенсора.</li>
                      <li><strong className="text-foreground">Духовой шкаф</strong> - не набирает температуру, проблемы с ТЭН.</li>
                      <li><strong className="text-foreground">Водонагреватель</strong> - не греет, течи, срабатывает защита.</li>
                      <li><strong className="text-foreground">Подключение бытовой техники</strong> - установка, первичный пуск, проверка узлов.</li>
                    </ul>
                  </div>

                  <div className="space-y-4 rounded-xl border bg-background/60 p-4 sm:p-5">
                    <h3 className="text-lg font-semibold text-foreground">Электроника</h3>
                    <ul className="grid gap-2 text-muted-foreground">
                      <li><strong className="text-foreground">Ноутбук / компьютер</strong> - перегрев, замена накопителей/ОЗУ, сбои загрузки.</li>
                      <li><strong className="text-foreground">Телевизор / монитор</strong> - нет изображения/звука, артефакты, подсветка.</li>
                      <li><strong className="text-foreground">Оргтехника</strong> - полосы, ошибки печати, захват бумаги.</li>
                      <li><strong className="text-foreground">Пылесос</strong> - не включается, потеря тяги, перегрев.</li>
                      <li><strong className="text-foreground">Apple (iPhone, iPad, MacBook, Watch)</strong> - базовые работы и диагностика.</li>
                      <li><strong className="text-foreground">Dyson</strong> - обслуживание и восстановление работоспособности.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">Услуги мастеров</h3>
                  <ul className="grid gap-2 rounded-xl border bg-background/60 p-4 text-muted-foreground sm:p-5">
                    <li><strong className="text-foreground">Ремонт квартир</strong> - мелкий и средний бытовой ремонт.</li>
                    <li><strong className="text-foreground">Электрика</strong> - розетки, автоматы, свет, базовый монтаж.</li>
                    <li><strong className="text-foreground">Сантехника</strong> - смесители, сифоны, устранение протечек.</li>
                    <li><strong className="text-foreground">Окно</strong> - регулировка створок, уплотнители.</li>
                    <li><strong className="text-foreground">Интернет на дачу</strong> - подбор решения, первичная настройка.</li>
                    <li><strong className="text-foreground">Столярка</strong> - доработки мебели и дверей.</li>
                    <li><strong className="text-foreground">Дезинсекция</strong> - обработка помещений.</li>
                    <li><strong className="text-foreground">Химчистка</strong> - мягкая мебель, матрасы.</li>
                  </ul>

                  <div className="space-y-3 rounded-xl border bg-background/60 p-4 sm:p-5">
                    <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Как мы работаем</h2>
                    <ol className="space-y-2 text-muted-foreground">
                      <li><strong className="text-foreground">Заявка.</strong> Звонок на <a className="font-semibold text-primary underline-offset-4 hover:underline" href="tel:+74951280984">+7 495 128-09-84</a> - уточняем модель и симптомы.</li>
                      <li><strong className="text-foreground">Диагностика.</strong> Проверяем узлы, подтверждаем неисправность; диагностика - бесплатная.</li>
                      <li><strong className="text-foreground">Согласование.</strong> Объясняем причину поломки, сроки и стоимость работ/деталей.</li>
                      <li><strong className="text-foreground">Ремонт.</strong> На дому или в мастерской - в зависимости от узла.</li>
                      <li><strong className="text-foreground">Проверка.</strong> Тестирование под нагрузкой, рекомендации по эксплуатации.</li>
                      <li><strong className="text-foreground">Гарантия.</strong> На выполненные работы - до 2 лет.</li>
                    </ol>
                  </div>

                  <div className="grid gap-4 rounded-xl border bg-background/60 p-4 sm:p-5">
                    <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Цены и диагностика</h2>
                    <p className="text-muted-foreground">Стоимость формируется после диагностики: учитываем модель, узел, трудоёмкость, необходимость запчастей и возможный вывоз. До начала работ согласовываем прозрачную смету.</p>
                    <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Гарантия и запчасти</h2>
                    <p className="text-muted-foreground">Гарантия на выполненные работы - до 2 лет. Запчасти согласуются по наличию и стоимости, выдаётся чек и гарантийные отметки.</p>
                    <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Зоны обслуживания</h2>
                    <p className="text-muted-foreground">Работаем по Москве: выезд по городу, на странице указано «выезд за 30 минут».</p>
                  </div>

                  <div className="space-y-3 rounded-xl border bg-background/60 p-4 sm:p-5">
                    <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Почему выбирают нас</h2>
                    <ul className="grid gap-2 text-muted-foreground">
                      <li><strong className="text-foreground">Быстрый выезд по Москве</strong> - за 30 минут.</li>
                      <li><strong className="text-foreground">Бесплатная диагностика</strong> - до согласования работ.</li>
                      <li><strong className="text-foreground">Гарантия до 2 лет</strong> - на выполненные работы.</li>
                      <li><strong className="text-foreground">Ремонт на дому</strong> - большинство типовых неисправностей без вывоза.</li>
                      <li><strong className="text-foreground">Чёткая смета</strong> - фиксируем перечень работ и деталей до начала.</li>
                      <li><strong className="text-foreground">Широкий профиль</strong> - бытовая техника, электроника и услуги мастеров.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                <div className="space-y-4 rounded-xl border bg-background/60 p-4 sm:p-5">
                  <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Вопросы и ответы (FAQ)</h2>
                  <dl className="grid gap-3 text-muted-foreground" data-test-id="pfn-faq">
                    <div className="rounded-lg bg-card/60 p-3">
                      <dt className="font-semibold text-foreground">Диагностика платная?</dt>
                      <dd>Диагностика - бесплатная.</dd>
                    </div>
                    <div className="rounded-lg bg-card/60 p-3">
                      <dt className="font-semibold text-foreground">Какая гарантия?</dt>
                      <dd>Гарантия на выполненные работы - до 2 лет.</dd>
                    </div>
                    <div className="rounded-lg bg-card/60 p-3">
                      <dt className="font-semibold text-foreground">Как быстро приедет мастер?</dt>
                      <dd>Заявлен выезд за 30 минут по Москве.</dd>
                    </div>
                    <div className="rounded-lg bg-card/60 p-3">
                      <dt className="font-semibold text-foreground">Как оставить заявку?</dt>
                      <dd>Позвоните по телефону +7 495 128-09-84.</dd>
                    </div>
                  </dl>
                </div>

                <div className="space-y-4 rounded-xl border bg-background/60 p-4 sm:p-5">
                  <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Заказать ремонт</h2>
                  <p className="text-muted-foreground">
                    Позвоните:{" "}
                    <a className="font-semibold text-primary underline-offset-4 hover:underline" href="tel:+74951280984">
                      +7 495 128-09-84
                    </a>{" "}
                    - ProFixNow. Быстрый выезд по Москве, бесплатная диагностика, гарантия на работы.
                  </p>
                  <a
                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-semibold text-primary-foreground shadow-elegant transition hover:opacity-90 sm:w-auto"
                    href="tel:+74951280984"
                  >
                    Оставить заявку
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SEO:PFN:Article END */}
        {/* SEO:PFN:Keywords START */}
        <script
          type="application/json"
          id="seoKeywords"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoKeywords, null, 2) }}
        />
        {/* SEO:PFN:Keywords END */}
        <Contacts />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;

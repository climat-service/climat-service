import Button from "@/components/ui/Button";
import ContentZone from "@/components/ui/ContentZone";
import Logo from "@/components/ui/icons/Logo";
import Link from "next/link";

const FooterDesktop = () => {
  const greenText = `text-[#40A74B]`;
  const categories = [
    "Для дома",
    "Для офиса",
    "Полупромышленное оборудование",
    "Промышленное оборудование",
  ];
  return (
    <ContentZone className="hidden lg:block">
      <article className="flex items-center justify-between">
        <p className="font-extrabold mb-2 lg:text-5xl lg:mb-6">
          Ты все еще не с нами? <br />
          Не пропусти выгодные предложения!
          {/* Ты еще <span className={greenText}>не</span> с нами? <br /> Столько
          всего <span className={greenText}>пропускаешь</span> */}
        </p>
        <Button color="green">Зарегистрироваться</Button>
      </article>
      <div className="mt-[120px] flex items-center justify-between">
        <div className="flex flex-col gap-14">
          {/* <Logo /> */}
          <p className="flex flex-col gap-2 font-bold mb-5 max-w-[333px]">
            {/* ECO - */}
            Климат-сервис:
            <span className="font-normal text-sm">
              “Мы управляем климатом - Вы управляете жизнью!”
            </span>
          </p>
        </div>
        <nav>
          <ul className="flex items-center justify-between mb-2">
            <li>
              <Link href="/" className="font-bold">
                Главная
              </Link>
            </li>
            <li>
              <Link href="/" className="font-bold">
                Контакты
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="font-bold">
                Каталог
              </Link>
            </li>
            {categories.map((category) => {
              return (
                <li key={category} className="text-sm">
                  <Link href="/">{category}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </ContentZone>
  );
};

export default FooterDesktop;

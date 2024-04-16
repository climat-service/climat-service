import HeaderIcons from "@/components/Header/HeaderIcons/HeaderIcons";
import ContentZone from "@/components/ui/ContentZone";
import Logo from "@/components/ui/icons/Logo";
import Link from "next/link";

const FooterMobile = () => {
  const categories = [
    "Для дома",
    "Для офиса",
    "Полупромышленное оборудование",
    "Промышленное оборудование",
  ];

  return (
    <ContentZone className="lg:hidden">
      <div className="flex items-center justify-between mb-10">
        <Logo />
        <HeaderIcons />
      </div>
      <p className="flex flex-col gap-2 font-bold mb-5">
        ECO -
        <span className="font-normal text-sm">
          Описание проекта, компании и что-то подобное в 2 или 3 строки
        </span>
      </p>
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
    </ContentZone>
  );
};

export default FooterMobile;

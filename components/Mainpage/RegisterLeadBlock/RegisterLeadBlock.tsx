import Button from "@/components/ui/Button";
import ContentZone from "@/components/ui/ContentZone";
import Image from "next/image";
import Link from "next/link";
import routes from "@/utils/routes";

const RegisterLeadBlock = () => {
  const greenText = `text-[#40A74B]`;

  return (
    <section className="lg:flex items-center justify-between gap-24">
      <Image
        src={"/images/registerLeadImage.png"}
        width={870}
        height={534}
        alt="кондиционер"
        className="w-[140px] h-[88px] md:w-[255px] md:h-[158px] lg:w-[370px] lg:h-[228px] xl:w-[870px] xl:h-[534px]"
      />
      <ContentZone className="flex items-center justify-center lg:items-start flex-col max-w-[255px] mt-3 lg:max-w-none">
        <p className="font-extrabold mb-2 lg:text-5xl lg:mb-6">
          Ты еще не с нами? <br />
          Не пропусти скидки на товары в избранном
          {/* Ты еще <span className={greenText}>не</span> с нами? <br /> Столько
          всего <span className={greenText}>пропускаешь</span> */}
        </p>
        <p className="text-xs mb-4 lg:text-xl lg:max-w-[440px] lg:mb-16">
          Зарегистрируйтесь сейчас и будьте в курсе самых выгодных предложений.
          Успейте купить товары по низким ценам!
          {/* Скорее регистрируйся, чтобы не пропустить распродажи и быстро
          оформлять покупки */}
        </p>
        <Link href={routes.register}>
          <Button color="green">Зарегистрироваться</Button>
        </Link>
      </ContentZone>
    </section>
  );
};

export default RegisterLeadBlock;

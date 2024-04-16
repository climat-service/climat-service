"use client";
import Button from "@/components/ui/Button";
import ContentZone from "@/components/ui/ContentZone";
import Overlay from "@/components/ui/Overlay";
import CrossIcon from "@/components/ui/icons/CrossIcon";
import Image from "next/image";
import IOrder from "@/interfaces/IOrder";
import routes from "@/utils/routes";

interface IProfileOrderPopupProps {
  setShown: (value: boolean) => void;
  order: IOrder;
  username: string | undefined;
}

const ProfileOrderPopup = ({
  setShown,
  order,
  username,
}: IProfileOrderPopupProps) => {
  const TwoStrings = ({
    title,
    subtitle,
  }: {
    title: string;
    subtitle: string | undefined;
  }) => {
    return (
      <div className="flex flex-col text-xs font-medium lg:flex-row lg:justify-between lg:w-full">
        <p className="text-[#979797]">{title}</p>
        <p className="lg:max-w-[224px] lg:text-right">{subtitle}</p>
      </div>
    );
  };

  const { deliveryDate, address, catalogItems } = order;

  return (
    <Overlay>
      <div className="w-full bg-[#FFF] rounded-xl py-10 max-w-[1280px] lg:rounded-[50px]">
        <ContentZone>
          <p className="flex items-center justify-between w-full lg:mb-1">
            Заказ
            <CrossIcon
              onClick={() => {
                setShown(false);
              }}
              className="cursor-pointer"
            />
          </p>
        </ContentZone>
        <ContentZone className="lg:flex items-start  lg:items-center lg:justify-center gap-20 justify-between">
          <div className="flex flex-col items-center lg:flex-row justify-center md:items-center lg:gap-11 lg:justify-start">
            <ul className="max-h-[450px] overflow-y-auto">
              {catalogItems.map((item) => {
                const { type, name, price, images } = item;
                return (
                  <li key={item.id}>
                    <Image
                      src={`${routes.backend}${images.data[0].attributes.url}`}
                      width={250}
                      height={206}
                      alt="кондиционер"
                    />
                    <div>
                      <p className="flex flex-col items-start justify-center text-xs mb-2">
                        <span className="text-sm font-semibold">{type}</span>
                        {name}
                      </p>
                      <p className="text-lg font-semibold mb-6">{price}₽</p>
                      <Button
                        color="green"
                        className="self-center mb-6 lg:max-w-[172px]"
                      >
                        Написать отзыв
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:min-w-[368px]">
            <div className="flex items-start justify-center flex-col gap-1 lg:gap-4 w-full">
              <TwoStrings title="Способ оплаты" subtitle={"Картой"} />
              <div className="flex items-start justify-center flex-col gap-1 lg:gap-4 mt-5 w-full">
                <p className="text-sm font-semibold">Способ получения</p>
                <TwoStrings title="Адрес" subtitle={address} />
                <TwoStrings title="Получатель" subtitle={username} />
                <TwoStrings title="Дата доставки" subtitle={deliveryDate} />
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 mt-4 lg:gap-6 lg:mt-10">
              <Button
                color="green"
                className="text-xs lg:text-sm lg:max-w-[172px]"
              >
                Повторить заказ
              </Button>
            </div>
          </div>
        </ContentZone>
      </div>
    </Overlay>
  );
};

export default ProfileOrderPopup;

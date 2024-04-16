"use client";
import ContentZone from "../ui/ContentZone";
import ProfileInformationCube from "./ProfileInformationCube/ProfileInformationCube";
import ProfileOrderBlock from "./ProfileOrderBlock/ProfileOrderBlock";
import { useState } from "react";
import ProfilePopup from "./ProfilePopup/ProfilePopup";
import ProfileOrderPopup from "./ProfileOrderPopup/ProfileOrderPopup";
import { useAppSelector } from "@/hooks/useReduxHooks";
import IUser from "@/interfaces/IUser";
import routes from "@/utils/routes";

const Profile = () => {
  const { user } = useAppSelector((state) => state.user);
  const [currentOrder, setCurrentOrder] = useState(null as any);
  const { username, email, phone, deliveryAddress, orders } = user as IUser;

  const deliveryAdressInformation = deliveryAddress
    ? `${deliveryAddress.city}, ${deliveryAddress.entrance}, ${deliveryAddress.apartment} ${deliveryAddress.floor}`
    : "Не указаны данные о доставке";

  const [shown, setShown] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [orderPopupShown, setOrderPopupShown] = useState(false);

  const informationCubes = [
    {
      title: "Адрес доставки",
      description: deliveryAdressInformation,
    },
    {
      title: "Личные данные",
      description: `${username}, ${email}, ${phone}`,
    },
  ];

  return (
    <main className="mb-16">
      <ContentZone>
        <h1 className="font-bold my-6 lg:text-2xl">Профиль</h1>
        <ul className="flex items-center justify-start flex-col gap-4 lg:flex-row lg:gap-2">
          {informationCubes.map((item, index) => {
            const setCurrentShown = () => {
              setData(item);
              setShown(true);
            };

            return (
              <li key={index}>
                <ProfileInformationCube
                  title={item.title}
                  description={item.description}
                  setShown={setCurrentShown}
                />
              </li>
            );
          })}
        </ul>
        <h2 className="text-sm font-medium mt-10 mb-3 lg:text-lg">Заказы</h2>
        <ul className="flex flex-col items-center justify-center gap-2">
          {orders?.map((order) => {
            return (
              <li
                className="lg:w-full cursor-pointer"
                onClick={() => {
                  setOrderPopupShown(true);
                  setCurrentOrder(order);
                }}
                key={order.id}
              >
                <ProfileOrderBlock
                  image={`${routes.backend}${order.catalogItems[0].images.data[0].attributes.url}`}
                  name={`Заказ #${order.id}`}
                  price={order.price}
                  date={order.deliveryDate}
                />
              </li>
            );
          })}
        </ul>
      </ContentZone>
      {shown && <ProfilePopup data={data} setShown={setShown} />}
      {orderPopupShown && (
        <ProfileOrderPopup
          order={currentOrder}
          setShown={setOrderPopupShown}
          username={user?.username}
        />
      )}
    </main>
  );
};

export default Profile;

"use client";
import Overlay from "@/components/ui/Overlay";
import ContentZone from "@/components/ui/ContentZone";
import CrossIcon from "@/components/ui/icons/CrossIcon";
import ProfileInformationCube from "../../ProfileInformationCube/ProfileInformationCube";
import Input from "@/components/ui/Input";
import useInput from "@/hooks/useInput";
import { useAppSelector } from "@/hooks/useReduxHooks";
import IUser from "@/interfaces/IUser";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/useReduxHooks";
import fetchCurrentUser from "@/services/actions/fetchCurrentUser";

interface ProfilePopupAddressProps {
  setShown: (value: boolean) => void;
  data: {
    title: string;
    description: string;
  };
}

const ProfilePopupAddress = ({ data, setShown }: ProfilePopupAddressProps) => {
  const { user } = useAppSelector((state) => state.user);
  const { deliveryAddress } = user as IUser;
  const [city, setCity] = useInput(deliveryAddress?.city || "");
  const [floor, setFloor] = useInput(deliveryAddress?.floor || "");
  const [entrance, setEntrance] = useInput(deliveryAddress?.entrance || "");
  const [apartment, setApartment] = useInput(deliveryAddress?.apartment || "");
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();

  const handleChangeAdressSubmit = (e: any) => {
    e.preventDefault();
    if (!user) return;
    api
      .put(`${routes.backend}/api/users/${user.id}`, {
        deliveryAddress: {
          city: city,
          entrance: entrance,
          floor: floor,
          apartment: apartment,
        },
      })
      .then((res) => {
        if (res.error) {
          setError(true);
          return;
        }
        const after = async () => {
          await dispatch(fetchCurrentUser());
          setShown(false);
        };
        after();
      });
  };

  return (
    <Overlay>
      <div className="w-full bg-[#FFF] rounded-xl py-10 max-w-[1280px] lg:rounded-[50px]">
        <ContentZone>
          <p className="flex items-center justify-between w-full mb-5 text-sm font-semibold">
            {data.title}
            <CrossIcon
              onClick={() => {
                setShown(false);
              }}
            />
          </p>
          <ul className="mb-6 flex items-center justify-center lg:justify-start">
            <li>
              <ProfileInformationCube
                title={data.title}
                description={data.description}
                type="popup"
                isActive={true}
              />
            </li>
          </ul>
          <form onSubmit={handleChangeAdressSubmit}>
            <ContentZone className="w-full flex items-center justify-center flex-col lg:gap-6 lg:items-start lg:flex-row">
              <p className="text-sm font-semibold self-start mb-6 lg:hidden">
                Новый адрес доставки
              </p>
              <Input
                label="Город, улица"
                type="text"
                onChange={setCity}
                value={city}
                required
              />
              <div className="grid grid-cols-3 gap-4 mb-6">
                <Input
                  label="Подъезд"
                  type="text"
                  className="max-w-[74px]"
                  onChange={setEntrance}
                  value={entrance}
                  required
                />
                <Input
                  label="Этаж"
                  type="text"
                  className="max-w-[74px]"
                  onChange={setFloor}
                  value={floor}
                  required
                />
                <Input
                  label="Квартира"
                  type="text"
                  className="max-w-[74px]"
                  onChange={setApartment}
                  value={apartment}
                  required
                />
              </div>
              <Button color="green" className="lg:mt-5" type="submit">
                Сохранить
              </Button>
            </ContentZone>
          </form>
        </ContentZone>
      </div>
    </Overlay>
  );
};

export default ProfilePopupAddress;

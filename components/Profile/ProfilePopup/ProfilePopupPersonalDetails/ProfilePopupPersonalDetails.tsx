"use client";
import Overlay from "@/components/ui/Overlay";
import ContentZone from "@/components/ui/ContentZone";
import CrossIcon from "@/components/ui/icons/CrossIcon";
import ProfileInformationCube from "../../ProfileInformationCube/ProfileInformationCube";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import useInput from "@/hooks/useInput";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/useReduxHooks";
import fetchCurrentUser from "@/services/actions/fetchCurrentUser";
import { useAppSelector } from "@/hooks/useReduxHooks";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

interface ProfilePopupPersonalDetailsProps {
  setShown: (value: boolean) => void;
  data: {
    title: string;
    description: string;
  };
}

const ProfilePopupPersonalDetails = ({
  data,
  setShown,
}: ProfilePopupPersonalDetailsProps) => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [username, setUsername] = useInput(user?.username);
  const [email, setEmail] = useInput(user?.email);
  const [phone, setPhone] = useInput(user?.phone);
  const [error, setError] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    api
      .put(`${routes.backend}/api/users/${user?.id}`, {
        username: username,
        email: email,
        phone: phone,
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
          <form onSubmit={handleSubmit}>
            <ContentZone className="w-full flex items-center justify-center flex-col lg:flex-row lg:gap-6">
              <p className="text-sm font-semibold self-start mb-6 lg:hidden">
                Новый получатель
              </p>
              <div className="mb-6 lg:flex items-center justify-center lg:gap-6">
                <Input
                  label="Имя и фамилия"
                  type="text"
                  onChange={setUsername}
                  value={username}
                  error={error}
                  required
                />
                <Input
                  label="Номер телефона"
                  type="tel"
                  className="lg:max-w-[150px]"
                  onChange={setPhone}
                  value={phone}
                  error={error}
                  required
                />
                <Input
                  label="Почта"
                  type="email"
                  className="lg:max-w-[150px]"
                  onChange={setEmail}
                  value={email}
                  error={error}
                  required
                />
              </div>
              <Button color="green" type="submit">
                Сохранить
              </Button>
            </ContentZone>
          </form>
        </ContentZone>
      </div>
    </Overlay>
  );
};

export default ProfilePopupPersonalDetails;

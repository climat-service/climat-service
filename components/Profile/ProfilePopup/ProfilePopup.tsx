"use state";
import ProfilePopupAddress from "./ProfilePopupAddress/ProfilePopupAddress";
import ProfilePopupPersonalDetails from "./ProfilePopupPersonalDetails/ProfilePopupPersonalDetails";

interface ProfilePopupProps {
  setShown: (value: boolean) => void;
  data: {
    title: string;
    description: string;
  };
}

const ProfilePopup = ({ setShown, data }: ProfilePopupProps) => {
  if (data.title === "Адрес доставки") {
    return <ProfilePopupAddress data={data} setShown={setShown} />;
  }

  return <ProfilePopupPersonalDetails data={data} setShown={setShown} />;
};

export default ProfilePopup;

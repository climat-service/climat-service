import { useRouter } from "next/navigation";
import { useAppDispatch } from "./useReduxHooks";
import { login } from "@/services/reducers/User";
import routes from "@/utils/routes";

const useAuth = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (res: {
    jwt: string;
    user: {
      id: number;
      username: string;
      email: string;
      phone: string;
    };
  }) => {
    const user = {
      id: res.user.id,
      username: res.user.username,
      email: res.user.email,
      phone: res.user.phone,
    };
    dispatch(login(user));
    localStorage.setItem("token", res.jwt);
    router.push(routes.profile);
  };
};

export default useAuth;

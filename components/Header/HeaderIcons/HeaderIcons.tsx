"use client";
import routes from "@/utils/routes";
import CartIcon from "../../ui/icons/CartIcon";
import SearchIcon from "../../ui/icons/SearchIcon";
import UserIcon from "../../ui/icons/UserIcon";
import HeartIcon from "@/components/ui/icons/HeartIcon";
import Link from "next/link";
import { useAppSelector } from "@/hooks/useReduxHooks";

const HeaderIcons = () => {
  const { user } = useAppSelector((state) => state.user);

  const profileRoute = user ? routes.profile : routes.login;

  return (
    <div className="flex items-center justify-center gap-4">
      <SearchIcon className="cursor-pointer lg:hidden" />
      <Link href={routes.favourites}>
        <HeartIcon className="hidden lg:block cursor-pointer" />
      </Link>
      <Link href={routes.cart}>
        <CartIcon className="cursor-pointer" />
      </Link>
      <Link
        href={profileRoute}
        className="bg-[#0C60A4] p-4 rounded-2xl cursor-pointer"
      >
        <UserIcon />
      </Link>
    </div>
  );
};

export default HeaderIcons;

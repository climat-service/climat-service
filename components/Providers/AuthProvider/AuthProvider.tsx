"use client";
import { useAppSelector, useAppDispatch } from "@/hooks/useReduxHooks";
import Loader from "@/components/ui/Loader";
import { useEffect } from "react";
import fetchCurrentUser from "@/services/actions/fetchCurrentUser";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { status, user } = useAppSelector((state) => state.user);


  useEffect(() => {
    const getData = async () => {
      dispatch(fetchCurrentUser());
    };

    if (status === "loading") getData();
  });

  if (status !== "loading") return <>{children}</>;

  return <Loader />;
};

export default AuthProvider;

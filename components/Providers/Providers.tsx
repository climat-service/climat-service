"use client";
import { Provider } from "react-redux";
import store from "@/services/store";
import AuthProvider from "./AuthProvider/AuthProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
};

export default Providers;

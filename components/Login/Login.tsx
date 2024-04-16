"use client";
import routes from "@/utils/routes";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import ContentZone from "../ui/ContentZone";
import Input from "../ui/Input";
import Logo from "../ui/icons/Logo";
import Link from "next/link";
import { useState } from "react";
import useInput from "@/hooks/useInput";
import api from "@/utils/classes/Api";
import useAuth from "@/hooks/useAuth";

const Login = () => {
  const [activeTab, setActiveTab] = useState("email");
  const [phone, setPhone] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [error, setError] = useState(false);
  const auth = useAuth();

  const tabStyles = `py-3 cursor-pointer px-6 md:px-14 rounded-xl text-xs font-semibold text-[#0C60A4]`;
  const activeTabStyles = `text-white bg-[#0C60A4]`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    api
      .post(`${routes.backend}/api/auth/local`, {
        identifier: email,
        password: password,
      })
      .then((res) => {
        if (res.error) {
          setError(true);
          return;
        }
        auth(res);
      });
  };
  return (
    <main className="flex flex-col items-center justify-start py-6 bg-[#F4F4F4] min-h-screen">
      <ContentZone className="flex flex-col items-center justify-start gap-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <Logo />
          <h1 className="text-lg font-semibold">Вход</h1>
        </div>
        <form
          className="flex flex-col gap-4 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <Input
            label={activeTab === "email" ? "Почта" : "Номер телефона"}
            placeholder={
              activeTab === "email" ? "email@email.com" : "+7 999 99 99"
            }
            type={activeTab === "email" ? "email" : "tel"}
            onChange={activeTab === "email" ? setEmail : setPhone}
            value={activeTab === "email" ? email : phone}
            error={error}
            required
          />
          <Input
            label="Пароль"
            placeholder="********"
            type="password"
            onChange={setPassword}
            value={password}
            error={error}
            required
          />
          <div className="flex items-center justify-center gap-8">
            <Checkbox label="Запомнить меня" />
            <Link
              href={routes.restorePassword}
              className="text-xs text-[#979797]"
            >
              Забыли пароль?
            </Link>
          </div>
          <Button color="green" type="submit">
            Войти
          </Button>
        </form>
        <div className="flex items-center justify-center gap-5">
          <p className="text-xs">Еще нет аккаунта?</p>
          <Link className="text-xs text-[#979797]" href={routes.register}>
            Зарегистрироваться
          </Link>
        </div>
      </ContentZone>
    </main>
  );
};

export default Login;

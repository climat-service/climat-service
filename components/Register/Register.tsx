"use client";
import Link from "next/link";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Logo from "../ui/icons/Logo";
import routes from "@/utils/routes";
import ContentZone from "../ui/ContentZone";
import useInput from "@/hooks/useInput";
import api from "@/utils/classes/Api";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";

const Register = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [phone, setPhone] = useInput("");
  const [name, setName] = useInput("");
  const [error, setError] = useState(false);
  const auth = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setError(false);
    e.preventDefault();
    api
      .post(`${routes.backend}/api/auth/local/register`, {
        username: name,
        email: email,
        phone: phone,
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
      <ContentZone className="flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <h1 className="text-lg font-semibold">Регистрация</h1>
        </div>
        <form
          className="flex items-center justify-center flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            label="ФИО"
            placeholder="Иванов Иван Иванович"
            type="tel"
            onChange={setName}
            value={name}
            required
            error={error}
          />
          <Input
            label="Номер телефона"
            placeholder="+7 (999) 999-99-99"
            type="tel"
            onChange={setPhone}
            value={phone}
            required
            error={error}
          />
          <Input
            label="Email"
            placeholder="email@email.com"
            type="email"
            onChange={setEmail}
            value={email}
            required
            error={error}
          />
          <Input
            label="Пароль"
            placeholder="*******"
            type="password"
            onChange={setPassword}
            value={password}
            required
            error={error}
          />
          <Button type="submit" color="green">
            Зарегистрироваться
          </Button>
        </form>
        <div className="flex items-center justify-between w-[255px] lg:w-[400px] mt-4">
          <p className="text-xs">Есть аккаунт?</p>
          <Link href={routes.login} className="text-xs text-[#979797]">
            Войти
          </Link>
        </div>
      </ContentZone>
    </main>
  );
};

export default Register;

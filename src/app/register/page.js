"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { Card, Input, Button, Typography } from "@material-tailwind/react";

import { useLanguage } from "../../../context/LanguageProvider";
import { useAlert } from "../../../context/alertContext";
import { signIn } from "../api/auth";
import { login } from "../../../redux/authSlice";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  const { t } = useLanguage();
  const { showAlert } = useAlert();
  const dispatch = useDispatch();
  const router = useRouter();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      showAlert("请输入所有详情");
      return;
    }
    try {
      setIsLoading(true);
      const result = await signIn(username, password);
      if (result) {
        showAlert("已成功登录系统", "success");
        dispatch(login({ token: result.token, user: result.user }));
        router.push("/");
      } else {
        showAlert("账号无效，请重试");
      }
    } catch (error) {
      console.log("error", error);
      showAlert("账号无效，请重试");
    } finally {
      setIsLoading(false);
    }
  };

  if (!t) return <p className="text-white">Loading translations...</p>;
  return (
    <div className="w-full h-full flex justify-center items-center bg-cover bg-fixed">
      <Image
        src="/log.png"
        alt="log"
        width={300}
        height={120}
        className="absolute top-0 left-8"
      />
      <Card
        color="transparent"
        shadow={true}
        className="p-6 shadow-xl shadow-gray-400"
      >
        <Typography variant="h4" color="blue-gray">
          Welcome to our system
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Please enter your account and password to continue
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Phone Number
            </Typography>
            <Input
              value={username}
              placeholder="Phone Number"
              onChange={(e) => setUserName(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <div className="relative flex justify-end items-center">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={isShowPassword ? "text" : "password"}
                placeholder="Password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div
                className="absolute cursor-pointer mr-4"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <BsEyeSlash /> : <BsEye />}
              </div>
            </div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Confirm Password
            </Typography>
            <div className="relative flex justify-end items-center">
              <Input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={isShowConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div
                className="absolute cursor-pointer mr-4"
                onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              >
                {isShowConfirmPassword ? <BsEyeSlash /> : <BsEye />}
              </div>
            </div>
          </div>
          <Button
            loading={isLoading}
            type="submit"
            color="red"
            onClick={handleSubmit}
            onSubmit={handleSubmit}
            className="mt-6 flex justify-center"
            fullWidth
          >
            Signup
          </Button>
        </form>
        <div className="flex justify-center items-center">
          <Typography color="gray" className="font-normal">
            If you already have an account, please
          </Typography>
          <a
            color="red"
            onClick={() => router.push("/login")}
            className="flex justify-center ml-2 text-red-500 cursor-pointer underline"
            fullWidth
          >
            Login
          </a>
        </div>
      </Card>
    </div>
  );
}

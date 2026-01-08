"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { Card, Input, Button, Typography } from "@material-tailwind/react";

import { useLanguage } from "../../../context/LanguageProvider";
import { useAlert } from "../../../context/alertContext";
import { signIn } from "../api/auth";
import { login } from "../../../redux/authSlice";
import { Bs0CircleFill, BsEyeSlash, BsEye } from "react-icons/bs";
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
      <div className="p-6 shadow-gray-400 flex flex-col items-center">
        <Typography variant="h6" color="blue-gray" className="mb-2 text-center">
          We have sent a verification code to your phone number
        </Typography>
        <Typography color="gray" className="font-normal text-center">
          Please enter the verification code to continue
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Verification Code
            </Typography>
            <Input
              value={username}
              placeholder="Verification Code"
              onChange={(e) => setUserName(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
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
            Verify
          </Button>
        </form>
      </div>
    </div>
  );
}

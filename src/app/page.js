"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button, Input, Typography } from "@material-tailwind/react";
import { BsArrowLeft } from "react-icons/bs";

import { useLanguage } from "../../context/LanguageProvider";
import { useAlert } from "../../context/alertContext";
import { getProfile } from "./api/user";
import { logout, updateUser } from "../../redux/authSlice";
import { isValidActiveDetect } from "./helper";
import { uploadRequest } from "./api/service";

export default function Home() {
  const { t } = useLanguage();
  const { showAlert } = useAlert();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [taskName, setTaskName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDetect = async () => {
    const validCheck = isValidActiveDetect(taskName, file);
    if (!validCheck.valid) {
      showAlert(validCheck.message);
      return;
    }
    try {
      setIsLoading(true);
      const result = await uploadRequest({
        taskName,
        file,
      });
      if (result) {
        if (result.RES == "100") {
          showAlert("已成功上传", "success");
          router.push("/detectlist");
        } else {
          showAlert(result.ERR);
        }
      } else {
        showAlert("出了点问题，请重试");
      }
    } catch (error) {
      showAlert("出了点问题，请重试");
    } finally {
      setIsLoading(false);
    }
  };

  const fetUserProfile = async () => {
    const result = await getProfile();
    if (result) {
      dispatch(updateUser({ user: result.user }));
    } else {
      dispatch(logout());
      router.push("/login");
    }
  };

  useEffect(() => {
    fetUserProfile();
  }, []);

  if (!t) return <p className="text-white">Loading translations...</p>;
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full flex justify-between items-center p-4">
        <Typography variant="h6">{t("addActiveDetection")}</Typography>
        <Link href="/detectlist" className="flex items-center gap-2">
          <BsArrowLeft strokeWidth={1.5} />
          <Typography variant="h6">{t("goBack")}</Typography>
        </Link>
      </div>
      <hr />
      <div className="w-full mt-4 p-4 flex flex-col gap-12">
        <div className="w-full flex gap-2">
          <Input
            readOnly
            variant="static"
            value={user ? Math.round(user.balance) : 0}
            label={t("currentPoint")}
          />
          <Input
            readOnly
            value={process.env.NEXT_PUBLIC_PHONE_ACTIVE_SELL_PRICE}
            variant="static"
            label={t("price")}
            placeholder={t("price")}
          />
        </div>
        <Input
          variant="static"
          value={taskName}
          label={t("taskName")}
          placeholder={t("taskName")}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Input
          type="file"
          variant="static"
          className="file:hidden"
          label={t("uploadFiles")}
          onChange={handleChangeFile}
        />
        <div>
          <Button color="red" loading={isLoading} onClick={handleDetect}>
            {t("detectActivePhone")}
          </Button>
        </div>
      </div>
    </div>
  );
}

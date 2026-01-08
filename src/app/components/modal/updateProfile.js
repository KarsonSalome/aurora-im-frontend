"use client";
import React, { useState } from "react";
import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";
import { useLanguage } from "../../../../context/LanguageProvider";
import { isValidCredit } from "@/app/helper";
import { updateUserCredit } from "@/app/api/user";
import { useAlert } from "../../../../context/alertContext";
import EditableAvatar from "../editableAvatar";

const UpdateProfileModal = ({ open, setOpen }) => {
  const { showAlert } = useAlert();
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { t } = useLanguage();
  if (!t) return <p className="text-white">Loading translations...</p>;

  const handleOpen = () => setOpen(!open);

  const handleUpdatePassword = async () => {
    const checkValid = isValidCredit({
      name: newUserName,
      oldPassword,
      newPassword,
      confirmPassword,
    });
    if (!checkValid.valid) {
      setAlertMessage(checkValid.message);
      return;
    }
    try {
      setIsLoading(true);
      const result = await updateUserCredit({
        newUserName,
        oldPassword,
        newPassword,
      });
      console.log(result);
      if (result.success) {
        showAlert(result.data.message, "success");
      } else {
        showAlert(result.data.message);
      }
    } catch (error) {
      console.log("error while changing credit", error);
    } finally {
      setIsLoading(false);
      setOpen(!open);
    }
  };

  return (
    <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
      <DialogHeader className="relative m-0 block">
        <Typography variant="h4" color="blue-gray">
          Edit Profile
        </Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-3.5 top-3.5"
          onClick={handleOpen}
        >
          <AiOutlineClose className="h-4 w-4 stroke-2" />
        </IconButton>
      </DialogHeader>
      <DialogBody className="space-y-4 flex flex-col items-center">
        <Typography color="red" variant="small">
          {alertMessage}
        </Typography>
        <EditableAvatar />
        <Input
          size="lg"
          value={phoneNumber}
          label="Phone Number"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          size="lg"
          value={userName}
          label="User Name"
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </DialogBody>
      <DialogFooter className="flex items-end gap-2">
        <Button color="blue-gray" onClick={handleOpen}>
          {t("cancel")}
        </Button>
        <Button color="red" loading={isLoading} onClick={handleUpdatePassword}>
          {t("submit")}
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default UpdateProfileModal;

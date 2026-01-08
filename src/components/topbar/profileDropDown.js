import {
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlinePoweroff, AiTwotoneSetting } from "react-icons/ai";
import { BsPersonPlus } from "react-icons/bs";
import { useLanguage } from "../../../context/LanguageProvider";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/authSlice";
import { useRouter } from "next/navigation";
import AddNewFriendModal from "@/app/components/modal/addNewFriend";
import UpdateProfileModal from "@/app/components/modal/updateProfile";

const ProfileDropDown = () => {
  const [updatePasswordModalShow, setUpdatePasswordModalShow] = useState(false);
  const [addNewFriendModalShow, setNewFriendModalShow] = useState(false);
  const { t } = useLanguage();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  if (!t) return <p className="text-white">Loading translations...</p>;

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <Menu>
      <AddNewFriendModal
        open={addNewFriendModalShow}
        setOpen={setNewFriendModalShow}
      />
      <UpdateProfileModal
        open={updatePasswordModalShow}
        setOpen={setUpdatePasswordModalShow}
      />
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="User"
          className="cursor-pointer w-10 h-10"
          src="/avatar.jpg"
        />
      </MenuHandler>
      <MenuList>
        <div className="py-2 outline-none">
          <Typography variant="small" className="font-medium font-bold">
            {t("welcome")} {user?.realname}
          </Typography>
        </div>
        <MenuItem
          onClick={() => setNewFriendModalShow(true)}
          className="flex items-center gap-2"
        >
          <BsPersonPlus />
          <Typography variant="small" className="font-medium">
            Add friend
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => setUpdatePasswordModalShow(true)}
          className="flex items-center gap-2"
        >
          <AiTwotoneSetting />
          <Typography variant="small" className="font-medium">
            Profile
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2" onClick={handleLogout}>
          <AiOutlinePoweroff />
          <Typography variant="small" className="font-medium">
            Log out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default ProfileDropDown;

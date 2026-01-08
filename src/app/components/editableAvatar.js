import { useEffect, useRef, useState } from "react";
import { Avatar } from "@material-tailwind/react";
import { updateAvatar } from "../api/user";
import { useAlert } from "../../../context/alertContext";
import { updateUser } from "../../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function EditableAvatar() {
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    console.log("Avatar URL", user.avatar);
    const { showAlert } = useAlert();
    const [avatar, setAvatar] = useState("");

    const FILE_BASE_URL = process.env.NEXT_PUBLIC_SERVER_FILE || "";

    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const result = await updateAvatar({file});
        if (result.url) {
            dispatch(updateUser({ url: result.url }));
        }
        else {
            showAlert("Upload Failed");
        }

        const previewUrl = URL.createObjectURL(file);
        setAvatar(previewUrl);

    };

    useEffect(() => {
        setAvatar(user.avatar);
    }, [user])

    return (
        <div className="relative inline-block cursor-pointer">
            <Avatar
                src={`${FILE_BASE_URL}${avatar}`}
                alt="avatar"
                size="xxl"
                onClick={handleAvatarClick}
            />

            <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
}

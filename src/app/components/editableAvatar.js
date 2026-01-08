import { useRef, useState } from "react";
import { Avatar } from "@material-tailwind/react";

export default function EditableAvatar() {
    const fileInputRef = useRef(null);
    const [avatar, setAvatar] = useState(
        "https://docs.material-tailwind.com/img/face-2.jpg"
    );

    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const previewUrl = URL.createObjectURL(file);
        setAvatar(previewUrl);

    };

    return (
        <div className="relative inline-block cursor-pointer">
            <Avatar
                src={avatar}
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

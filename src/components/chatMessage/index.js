import React from "react";
import { BsCheck2, BsCheck2All, BsClock } from "react-icons/bs";


const ChatMessage = ({ text, sender }) => {
    const isMe = sender === "me";
    return (
        <div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-2`}>
            <div
                className={`max-w-[70%] p-2 rounded-lg ${isMe ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
                    }`}
            >
                <div className="flex items-end gap-2">
                    <p className="text-sm">{text}</p>
                    {/* {isMe && <BsCheck2 />} */}
                    {isMe && <BsCheck2All />}
                    {/* {isMe && <BsClock />} */}
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;

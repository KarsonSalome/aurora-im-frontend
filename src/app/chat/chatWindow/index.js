import React, { useState } from "react";
import ChatHistory from "../chatHistory";
import InputPanel from "../inputPanel";

const ChatWindow = ({messages}) => {
    // const [messages, setMessages] = useState([
    //     { text: "Hi there!", sender: "other" },
    //     { text: "Hello! How are you?", sender: "me" },
    //     { text: "I'm good, thanks!", sender: "other" },
    // ]);

    const handleSend = (text) => {
        setMessages([...messages, { text, sender: "me" }]);
    };

    return (
        <div className="w-full h-full flex flex-col bg-blue-100/30 rounded-lg shadow-md">
            <ChatHistory messages={messages} />
            <InputPanel onSend={handleSend} />
        </div>
    );
};

export default ChatWindow;
import React from "react";

const InputPanel = ({ onSend }) => {
    const [input, setInput] = React.useState("");

    const handleSend = () => {
        if (input.trim() !== "") {
            onSend(input);
            setInput("");
        }
    };

    return (
        <div className="p-4 bg-white flex items-center gap-2 border-t border-gray-200">
            <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
                onClick={handleSend}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
                Send
            </button>
        </div>
    );
};


export default InputPanel;
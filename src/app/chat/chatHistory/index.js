import React, { useEffect, useRef } from "react";
import ChatMessage from "@/components/chatMessage";

const ChatHistory = ({ messages }) => {
    const scrollRef = useRef(null);

    // Custom smooth scroll function
    const smoothScrollToBottom = (element, duration = 1000) => {
        if (!element) return;

        const start = element.scrollTop;
        const end = element.scrollHeight;
        const change = end - start;
        const startTime = performance.now();

        // Ease function
        const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            element.scrollTop = start + change * easeInOutQuad(progress);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    // Scroll to bottom whenever messages change
    useEffect(() => {
        smoothScrollToBottom(scrollRef.current, 4000); // 1 second scroll
    }, [messages]);

    return (
        <div
            ref={scrollRef}
            className="flex-1 overflow-y-hidden p-4 space-y-2 flex flex-col justify-end transition transition-all transition-1500"
        >
            {messages.map((msg, idx) => (
                <ChatMessage key={idx}   text={msg.text} sender={msg.sender} />
            ))}
        </div>
    );
};

export default ChatHistory;
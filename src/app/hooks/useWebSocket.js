"use client";
import { useEffect, useRef, useState } from "react";

export default function useWebSocket(token) {
    const wsRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState("disconnected");

    useEffect(() => {
        if (!token) return;

        const ws = new WebSocket(
            `ws://localhost:8080/ws?token=${token}`
        );

        wsRef.current = ws;

        ws.onopen = () => {
            console.log("✅ WebSocket connected");
            setStatus("connected");
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, data]);
        };

        ws.onerror = (err) => {
            console.error("❌ WebSocket error:", err);
        };

        ws.onclose = () => {
            console.log("🔌 WebSocket closed");
            setStatus("disconnected");
        };

        return () => {
            ws.close();
        };
    }, [token]);

    const sendMessage = (msg) => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
            console.log("Now sending Message", msg);
            wsRef.current.send(JSON.stringify(msg));
        }
    };

    return { messages, sendMessage, status };
}

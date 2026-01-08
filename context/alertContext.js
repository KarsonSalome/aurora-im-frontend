"use client";
import { Alert } from "@material-tailwind/react";
import { createContext, useState, useContext } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type = "info") => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {alert && (
        <div className="absolute top-4 right-4 px-4 py-4">
          <Alert
            animate={{
              mount: { x: -10, top: 64 },
              unmount: { x: 500, top: 64 },
            }}
            icon={<BsFillInfoCircleFill className="mt-3" />}
            className={`px-4 py-2 rounded shadow-lg text-white ${
              alert.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {alert.message}
          </Alert>
        </div>
      )}
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  return useContext(AlertContext);
}

"use client"; // ✅ Ensure it's a client component

import { useRef } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

export default function ReduxProvider({ children }) {

    return (
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
        </Provider>
    );
}

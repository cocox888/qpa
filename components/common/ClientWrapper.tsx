"use client";

import { ReactNode } from "react"

import { SessionProvider } from "next-auth/react";
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import store from "@/store";

interface Props {
    children?: ReactNode
}


function ClientWrapper({ children }: Props) {
    return (
        <Provider store={store}>
            <SessionProvider>
                {children}
            </SessionProvider>
        </Provider>
    )
}

export default ClientWrapper
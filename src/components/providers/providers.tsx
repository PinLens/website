"use client";

import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nProvider } from "@/lib/i18n";

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {

    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <I18nProvider>
                {children}
            </I18nProvider>
        </QueryClientProvider>
    )
};

export default Providers

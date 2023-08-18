"use client"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
const queryClient = new QueryClient()

export default function ProductQueryProvider({ children }) {

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
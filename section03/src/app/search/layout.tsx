"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Searchbar from "./searchbar";
import React, { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Searchbar />
        {children}
      </QueryClientProvider>
    </div>
  );
}

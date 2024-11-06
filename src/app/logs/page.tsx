"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { LogsTable } from "./LogsTable";
import LogsHistogram from './LogsHistogram';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Logs() {
  return (
    // TODO: Move this provider out of here
    <QueryClientProvider client={queryClient}>
      <LogsHistogram />
      <LogsTable />
    </QueryClientProvider>
  );
}

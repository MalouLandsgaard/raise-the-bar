import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactNode} from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // cache data for 5 minutes
    },
  },
});

export const QueryProvider = ({children}: {children: ReactNode}) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

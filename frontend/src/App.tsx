import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HelpCenter from './page/HelpCenter'
import { Toaster } from 'react-hot-toast'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelpCenter />
      <ReactQueryDevtools />
      <Toaster/>
    </QueryClientProvider>
  )
}
export default App

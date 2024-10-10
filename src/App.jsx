import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import '@styles/font.css'
import Layout from '@pages/Layout'

const queryClient = new QueryClient()
const mode = import.meta.env.MODE

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {mode === 'development' && (
        <ReactQueryDevtools
          initialIsOpen={false}
          position="bottom-right"
          style={{ top: '0px', position: 'absolute' }}
        />
      )}
      <Layout />
    </QueryClientProvider>
  )
}

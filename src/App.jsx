import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import '@styles/font.css'
import Layout from '@pages/Layout'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools
        initialIsOpen={false}
        position="bottom-right"
        style={{ top: '0px', position: 'absolute' }}
      />
      <Layout />
    </QueryClientProvider>
  )
}

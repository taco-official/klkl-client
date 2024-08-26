import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageLayout from './pages/PageLayout'
import LoadingPage from './pages/LoadingPage'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ReviewPage = lazy(() => import('./pages/ReviewPage/ReviewPage'))
const SubmitPage = lazy(() => import('./pages/SubmitPage/SubmitPage'))
const FeedPage = lazy(() => import('./pages/FeedPage/FeedPage'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'loading',
        element: <LoadingPage />,
      },
      {
        path: '/products/:id',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ReviewPage />
          </Suspense>
        ),
      },
      {
        path: 'submit',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <SubmitPage />
          </Suspense>
        ),
      },
      {
        path: 'feed',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <FeedPage />
          </Suspense>
        ),
      },
      {
        path: '/*',
        element: <ErrorPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)

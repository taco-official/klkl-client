import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageLayout from './PageLayout'

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
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'review/:id',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ReviewPage />
          </Suspense>
        ),
      },
      {
        path: 'submit',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SubmitPage />
          </Suspense>
        ),
      },
      {
        path: 'feed',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
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

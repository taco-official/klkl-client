import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageLayout from './pages/PageLayout'
import LoadingPage from './pages/LoadingPage'
import productLoader from './loader/productLoader'
import userLoader from './loader/userLoader'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ReviewPage = lazy(() => import('./pages/ReviewPage/ReviewPage'))
const SubmitPage = lazy(() => import('./pages/SubmitPage/SubmitPage'))
const UserPage = lazy(() => import('./pages/UserPage/UserPage'))
const UserEditPage = lazy(() => import('./pages/UserEditPage/UserEditPage'))
const FeedPage = lazy(() => import('./pages/FeedPage/FeedPage'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <ErrorPage />,
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
        loader: productLoader,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ReviewPage />
          </Suspense>
        ),
      },
      {
        path: 'products/:id/edit',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <SubmitPage />
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
        path: 'users/:id',
        loader: userLoader,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <UserPage />
          </Suspense>
        ),
      },
      {
        path: 'user/edit',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <UserEditPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)

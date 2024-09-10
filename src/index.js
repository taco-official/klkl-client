import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PageLayout from './pages/PageLayout'
import * as pages from './pages/index'
import * as loader from './loader/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <pages.ErrorPage />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<pages.LoadingPage />}>
            <pages.HomePage />
          </Suspense>
        ),
      },
      {
        path: 'loading',
        element: <pages.LoadingPage />,
      },
      {
        path: '/products/:id',
        loader: loader.productLoader,
        element: (
          <Suspense fallback={<pages.LoadingPage />}>
            <pages.ReviewPage />
          </Suspense>
        ),
      },
      {
        path: 'products/:id/edit',
        element: (
          <Suspense fallback={<pages.LoadingPage />}>
            <pages.SubmitPage />
          </Suspense>
        ),
      },
      {
        path: 'submit',
        element: (
          <Suspense fallback={<pages.LoadingPage />}>
            <pages.SubmitPage />
          </Suspense>
        ),
      },
      {
        path: 'feed',
        element: (
          <Suspense fallback={<pages.LoadingPage />}>
            <pages.FeedPage />
          </Suspense>
        ),
      },
      {
        path: 'users/:id',
        loader: loader.userLoader,
        element: (
          <Suspense fallback={<pages.LoadingPage />}>
            <pages.UserPage />
          </Suspense>
        ),
      },
      {
        path: 'user/edit',
        element: (
          <Suspense fallback={<pages.LoadingPage />}>
            <pages.UserEditPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <pages.ErrorPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)

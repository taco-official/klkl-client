import React, { Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import * as pages from './pages/index'
import * as loader from './loader/index'
import LoadingPage from './pages/LoadingPage'
import ErrorPage from './pages/ErrorPage'

const routes = [
  {
    path: '',
    loader: loader.homeLoader,
    element: <pages.HomePage />,
  },
  {
    path: 'products/:id',
    loader: loader.productLoader,
    element: <pages.ReviewPage />,
  },
  {
    path: 'products/:id/edit',
    loader: loader.productEditLoader,
    element: <pages.SubmitPage />,
  },
  {
    path: 'submit',
    element: <pages.SubmitPage />,
  },
  {
    path: 'feed',
    loader: loader.feedLoader,
    element: <pages.FeedPage />,
  },
  {
    path: 'me',
    element: <pages.MyPage />,
  },
  {
    path: 'me/edit',
    element: <pages.MyEditPage />,
  },
  {
    path: 'users/:id',
    loader: loader.userLoader,
    element: <pages.UserPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: routes,
  },
])

export default router

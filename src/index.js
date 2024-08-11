import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageLayout from './PageLayout'
import ErrorPage from './pages/ErrorPage'
import Home from './components/Home/Home'
import ReviewDetailPage from './components/Review/ReviewDetailPage'
import SubmitPage from './components/SubmitPage/SubmitPage'
import FeedPage from './pages/FeedPage/FeedPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'review',
        element: <ReviewDetailPage />,
      },
      {
        path: 'submit',
        element: <SubmitPage />,
      },
      {
        path: 'feed',
        element: <FeedPage />,
      },
    ],
  },
  {
    path: '/*',
    element: <ErrorPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()

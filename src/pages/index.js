import { lazy } from 'react'

const HomePage = lazy(() => import('./HomePage/HomePage'))
const ReviewPage = lazy(() => import('./ReviewPage/ReviewPage'))
const SubmitPage = lazy(() => import('./SubmitPage/SubmitPage'))
const UserPage = lazy(() => import('./UserPage/UserPage'))
const UserEditPage = lazy(() => import('./UserEditPage/UserEditPage'))
const FeedPage = lazy(() => import('./FeedPage/FeedPage'))
const LoadingPage = lazy(() => import('./LoadingPage'))
const ErrorPage = lazy(() => import('./ErrorPage'))

export {
  HomePage,
  ReviewPage,
  SubmitPage,
  UserPage,
  UserEditPage,
  FeedPage,
  LoadingPage,
  ErrorPage,
}

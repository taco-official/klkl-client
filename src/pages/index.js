import { lazy } from 'react'

const HomePage = lazy(() => import('./HomePage/HomePage'))
const ReviewPage = lazy(() => import('./ReviewPage/ReviewPage'))
const SubmitPage = lazy(() => import('./SubmitPage/SubmitPage'))
const FeedPage = lazy(() => import('./FeedPage/FeedPage'))
const MyPage = lazy(() => import('./UserPage/MyPage'))
const MyEditPage = lazy(() => import('./UserEditPage/UserEditPage'))
const UserPage = lazy(() => import('./UserPage/UserPage'))
const LogoutPage = lazy(() => import('./LogoutPage/LogoutPage'))

export {
  HomePage,
  ReviewPage,
  SubmitPage,
  FeedPage,
  MyPage,
  MyEditPage,
  UserPage,
  LogoutPage,
}

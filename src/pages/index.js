import { lazy } from 'react'

const HomePage = lazy(() => import('./HomePage/HomePage'))
const ReviewPage = lazy(() => import('./ReviewPage/ReviewPage'))
const SubmitPage = lazy(() => import('./SubmitPage/SubmitPage'))
const MyPage = lazy(() => import('./UserPage/MyPage'))
const UserPage = lazy(() => import('./UserPage/UserPage'))
const MyEditPage = lazy(() => import('./UserEditPage/UserEditPage'))
const FeedPage = lazy(() => import('./FeedPage/FeedPage'))

export {
  HomePage,
  ReviewPage,
  SubmitPage,
  UserPage,
  MyPage,
  MyEditPage,
  FeedPage,
}

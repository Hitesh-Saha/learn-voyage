import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CourseContentPage from "./pages/CourseContentPage/CourseContentPage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainLayout from "./pages/MainLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SavedPage from "./pages/SavedPage/SavedPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Navigate to='/welcome' />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/mycourses" element={<CoursesPage />} />
          <Route path="/mycourses/:courseId" element={<CoursesPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/saved/:courseId" element={<SavedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/course/:courseId" element={<CourseContentPage />} />
          <Route path="*" element={<Navigate to='/welcome' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
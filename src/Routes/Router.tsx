
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import LoginPage from '@/pages/Login';
import SignupPage from '@/pages/SignUp';
import LandingPage from '@/pages/Landing';
import NotFoundPage from '@/pages/NotFoundPage';
import AIQuestions from '@/pages/AIQuestions';
import TalentHub from '@/pages/TalentHub';
import CoachChannel from "@/pages/CoachChannel";
import Contact from '@/pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/talent-hub',
    element: <TalentHub />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: "/coach-channel",
    element: <CoachChannel />,
  },
  {
    path: '/suggest',
    element: <AIQuestions />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

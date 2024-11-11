import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import LoginPage from "@/pages/Login";
import SignupPage from "@/pages/SignUp";
import LandingPage from "@/pages/Landing";
import NotFoundPage from "@/pages/NotFoundPage";
import AIQuestions from "@/pages/AIQuestions";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/suggest",
    element: <AIQuestions />,
  }
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

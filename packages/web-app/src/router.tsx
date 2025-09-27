import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import SignInPage from './features/auth/pages/SignInPage';
import DashboardPage from './features/dashboard/pages/DashboardPage';
import AuthLayout from './layouts/AuthLayout';

const router = createBrowserRouter([
  {
    path: '/',
    // Use MainLayout as the parent route component. 
    // It contains the <Outlet> where nested routes render.
    element: <MainLayout />, 
    errorElement: <NotFoundPage />,
    children: [
      {
        // This is rendered into MainLayout's <Outlet> at "/"
        index: true, 
        element: <HomePage />,
      },
      // Nested Layout Example: Auth routes use a simpler layout
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'signin',
            element: <SignInPage />,
          },
        ],
      },
      // Protected/Feature Route Example
      {
        path: 'dashboard',
        element: <DashboardPage />,
        // You could add loaders/guards here for auth checks
      },
    ],
  },
]);

export default router;
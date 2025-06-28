import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Flights from "../pages/Flights";
import Staff from "../pages/Staff";
import Logs from "../pages/Logs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Signin />} />
      <Route path="signup" element={<Signup />} />

      {/* 👇 Dashboard layout ichida */}
      <Route path="dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="flights" element={<Flights />} />
        <Route path="staff" element={<Staff />} />
        <Route path="logs" element={<Logs />} />
      </Route>
    </Route>
  )
);

const Router = () => <RouterProvider router={router} />;
export default Router;

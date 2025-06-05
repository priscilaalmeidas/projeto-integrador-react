import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from "./pages/home";
import ListRecentProducts from "./pages/list-recent-products";
import Details from "./pages/details";
import SearchProducts from "./pages/search-result";
import NotFound from "./pages/not-found";
import About from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";
import ContactUs from "./pages/contact-us";
import Dashboard from "./pages/dashboard";
import UserProducts from "./pages/user-products";
import FormProducts from "./pages/form-products";
import ListAllProducts from "./pages/list-all-products";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/all-recent-products",
      element: <ListRecentProducts />,
    },
    {
      path: "/all-products",
      element: <ListAllProducts />,
    },
    {
      path: "/products/details/:id",
      element: <Details />,
    },
    {
      path: "/products/search/:product",
      element: <SearchProducts />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/my-products",
      element: <UserProducts />,
    },
    {
      path: "/form-products",
      element: <FormProducts />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

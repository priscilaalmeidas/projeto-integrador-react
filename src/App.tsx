import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from "./pages/home";
import ListProducts from "./pages/list-products";
import Details from "./pages/details";
import SearchProducts from "./pages/search-result";
import NotFound from "./pages/not-found";
import About from "./pages/about";

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
      path: "/products",
      element: <ListProducts />,
    },
    {
      path: "/products/details",
      element: <Details />,
    },
    {
      path: "/products/search",
      element: <SearchProducts />,
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

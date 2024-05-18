import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Users from "../pages/users/Users";
import Products from "../pages/products/Products";
import Books from "../pages/books/Books";
import UserDetails from "../pages/user-details/UserDetails";
import BookDetails from "../pages/book-details/BookDetails";
import NotFound from "../pages/note-found/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/users", element: <Users /> },
      { path: "/user/:id", element: <UserDetails /> },
      { path: "/products", element: <Products /> },
      { path: "/books", element: <Books /> },
      { path: "/book/:id", element: <BookDetails /> },
      
    ],
  },{path: "*" ,element:<NotFound/>}
]);

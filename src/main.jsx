import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./component/About/About";
import BookDetails from "./component/BookDetails/BookDetails";
import Books from "./component/Books/Books";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import LodingSpiner from "./component/LodingSpiner/LodingSpiner";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:id",
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path: "about",
        element: <About></About>,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);

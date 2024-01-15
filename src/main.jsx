import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InputFieldEffect } from "./InputField/InputFieldEffect.jsx";
import { Menu } from "./nav.jsx";
import { Hello } from "./Hello.jsx";
import { Cards } from "./Card/Cards.jsx";
import { VacCards } from "./VacCard/VacCards.jsx";
import { Converter } from "./Converter/Converter.jsx";
import { SearchInput } from "./SearchInput/months.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/links",
        element: <Cards />,
      },
      {
        path: "/multiplier",
        element: <InputFieldEffect />,
      },
      {
        path: "/helloworld",
        element: <Hello name={"World"} frage={"wie gehts?"} />,
      },
      {
        path: "/vacation",
        element: <VacCards />,
      },
      {
        path: "/converter",
        element: <Converter />,
      },
      {
        path: "/Search",
        element: <SearchInput />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

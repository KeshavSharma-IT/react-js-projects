import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Calculator from "./components/Calculator.jsx";
import Crypto from "./components/Crypto.jsx";
import Todo from "./components/Todo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/crypto" element={<Crypto />} />
      <Route path="/todo" element={<Todo />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

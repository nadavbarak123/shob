import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Classes from "./components/Classes/Classes";
import Students from "./Pages/StudentsPage/StudentsPage";
import Create from "./Pages/CreatePage/CreatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

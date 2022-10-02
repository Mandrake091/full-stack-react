import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import {BrowserRouter, Router, Route, Routes, Link, Switch} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import NewEmployee from "./pages/NewEmployee";
import Axios from "axios";
import AllEmployee from "./pages/AllEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewEmployee />} />
        <Route path="/all" element={<AllEmployee />} />
        <Route path="/update/:id" element={<UpdateEmployee />} />
      </Routes>
    </>
  );
}

export default App;

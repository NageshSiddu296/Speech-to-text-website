import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Error from "./Error";
import MainHeader from "./MainHeader";
import "./styles.css";

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

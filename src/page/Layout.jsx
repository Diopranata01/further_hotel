import React from "react";
import { Outlet } from "react-router-dom";
import BookingEngine from "../partial/BookingEngine";
import Navbar from "../partial/Navbar";

export const Layout = () => {
  return (
    <>
      <div className="app">
        <Navbar />
            <Outlet />
        <BookingEngine />
      </div>
    </>
  );
};

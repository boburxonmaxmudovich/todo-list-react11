import React from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "../footer"
const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="w-[90%] m-auto">
        <Outlet />
        <Toaster />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;

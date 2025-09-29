import React from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="w-[90%] m-auto">
        <Outlet />
        <Toaster />
      </main>
    </>
  );
};

export default MainLayout;

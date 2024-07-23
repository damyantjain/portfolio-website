import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Contact from "../Contact";

const BlogLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar nav={[]} />
      <div className="flex-grow md:pt-32 mb-20 mt-6 dark:bg-[#121212]">
        <Outlet />
      </div>
      <div className="mx-5 mt-auto mb-5 lg:mx-44">
        <Contact />
      </div>
    </div>
  );
};

export default BlogLayout;

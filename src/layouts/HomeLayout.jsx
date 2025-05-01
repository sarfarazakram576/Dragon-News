import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router";
import LatestNews from "../components/lastesNews/LatestNews";
import Navbar from "../components/navbar/Navbar";
import LeftAside from "../components/LeftAside/LeftAside";
import RightAside from "../components/RightAside/RightAside";

const HomeLayout = () => {
  return (
    <div className="md:container mx-auto">
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
        <div className="mt-4">
          <Navbar></Navbar>
        </div>{" "}
      </header>
      <main className="grid grid-cols-12 gap-8 my-12">
        <aside className="col-span-3 sticky h-fit top-0">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <section className="col-span-3 sticky h-fit top-0">
          <RightAside></RightAside>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;

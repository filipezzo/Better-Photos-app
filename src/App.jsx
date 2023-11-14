import { Engine, Image, Star } from "@phosphor-icons/react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="w-[1240px] h-[900px]  bg-white shadow-lg  text-gray grid grid-cols-grid-area grid-rows-grid-area ">
      <Header />
      <Sidebar />
      <section className=" bg-[#111315] grid grid-cols-3 grid-rows-3">
        <div className="cursor-pointer ">
          <img
            className="object-cover h-full w-full cursor-pointer"
            src="https://images.unsplash.com/photo-1605752540112-17e90481f4d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery image"
          />{" "}
          cursor-pointer
        </div>
        <div className=" row-span-2 cursor-pointer ">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1495462911434-be47104d70fa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery image"
          />
        </div>
        <div className=" cursor-pointer ">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1598003012998-15743b9f8283?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery image"
          />
        </div>
        <div className="  cursor-pointer">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1602335679991-66dee1b06117?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery image"
          />
        </div>
        <div className=" cursor-pointer ">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1482424917728-d82d29662023?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery image"
          />
        </div>
        <div className="cursor-pointer">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery image"
          />
        </div>
        <div className=" cursor-pointer  ">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1508251755193-d2e9caa5de02?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery image"
          />
        </div>
        <div className=" cursor-pointer ">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1620362544844-21a89ca9d93c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery image"
          />
        </div>
      </section>

      <section className="bg-white grid grid-cols-3 place-items-center p-2">
        <div className="flex flex-col justify-center text-center gap-2 ">
          <div className="mx-auto">
            <Image size={24} />
          </div>
          <h3>Upload Photos</h3>
          <p>upload and relive precious moments with a simple click.</p>
        </div>

        <div className="flex flex-col text-center gap-2 ">
          <div className="mx-auto">
            <Star size={24} />
          </div>
          <h3>Get feedback</h3>
          <p>
            Provide feedback effortlessly and help us improve with just a few
            clicks
          </p>
        </div>

        <div className="flex flex-col text-center gap-2 ">
          <div className="mx-auto">
            <Engine size={24} />
          </div>
          <h3>Improve your skill</h3>
          <p>Elevate your skills through your app for immediate improvement.</p>
        </div>
      </section>
    </div>
  );
}

export default App;

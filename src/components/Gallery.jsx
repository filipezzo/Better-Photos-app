function Gallery() {
  return (
    <>
      <section className=" order-3 sm:hidden h-screen">
        <div className="  cursor-pointer block ">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1495462911434-be47104d70fa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery image"
          />
        </div>
      </section>
      <section className=" hidden sm:grid bg-[#111315]  sm:grid-cols-1 sm:row-span-2 lg:row-auto md:grid-cols-2 xl:grid-cols-3 grid-rows-3 sm:overflow-hidden">
        <div className="cursor-pointer ">
          <img
            className="object-cover h-full w-full cursor-pointer"
            src="https://images.unsplash.com/photo-1605752540112-17e90481f4d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery image"
          />{" "}
        </div>
        <div className=" xl:row-span-2 cursor-pointer hidden md:block ">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1495462911434-be47104d70fa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery image"
          />
        </div>
        <div className=" cursor-pointer hidden xl:block  ">
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
        <div className=" cursor-pointer  ">
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
        <div className=" cursor-pointer hidden xl:block ">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1620362544844-21a89ca9d93c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery image"
          />
        </div>
      </section>
    </>
  );
}

export default Gallery;

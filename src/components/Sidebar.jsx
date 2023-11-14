import { ArrowRight, UploadSimple } from "@phosphor-icons/react";

function Sidebar() {
  return (
    <aside className=" row-span-2  bg-zinc-950 text-white flex flex-col order-1 sm:order-2 md:order-none">
      <section className="py-8 px-6">
        <h1 className="text-3xl uppercase ">
          How good are your{" "}
          <span className="text-blue-500 font-bold">photos?</span>
        </h1>
        <p className="my-4">
          Improve your photography skill by getting
          <a href="#"> feedback</a> from a jury and the community
        </p>

        <div className="flex items-center">
          <div className="flex mr-4">
            <img
              className="w-8 h-8 object-cover rounded-full border-2 border-solid border-blue-500 -mr-2"
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=70&q=100"
              alt="User"
            />
            <img
              className="w-8 h-8 object-cover rounded-full border-2 border-solid border-blue-500 -mr-2"
              src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=70&q=100"
              alt="User"
            />
            <img
              className="w-8 h-8 object-cover rounded-full border-2 border-solid border-blue-500 -mr-2"
              src="https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&&w=70&q=100"
              alt="User"
            />
            <img
              className="w-8 h-8 object-cover rounded-full border-2 border-solid border-blue-500 -mr-2"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=70&q=100"
              alt="User"
            />
            <img
              className="w-8 h-8 object-cover rounded-full border-2 border-solid border-blue-500 -mr-2"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w=70&q=100"
              alt="User"
            />
          </div>
          <div>
            <strong>+180.000</strong>
            <p>already joined</p>
          </div>
        </div>
        <button className="flex gap-2 items-center my-4 w-full justify-center bg-blue-500 px-4 py-2 rounded-md hover:opacity-50">
          sign me up <ArrowRight />
        </button>
        <p>
          Already a member?{" "}
          <a href="#" className="text-blue-400">
            Sign in
          </a>
        </p>
      </section>
      <div className="w-full bg-white h-[1px] my-4 hidden md:block" />
      <section className="flex-1 p-4 justify-center items-center flex ">
        <div className="flex flex-col w-full  justify-center items-center border border-dashed h-full cursor-pointer p-20 sm:p-0">
          <UploadSimple size={28} />
          <p>Drag and drop photo</p>
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;

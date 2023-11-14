import { Engine, Image, Star } from "@phosphor-icons/react";
function About() {
  return (
    <section className="hidden bg-white lg:grid  lg:grid-cols-3 place-items-center p-2 ">
      <div className="flex flex-col justify-center text-center gap-2 cursor-pointer ">
        <div className="mx-auto w-14 h-14 flex justify-center items-center bg-blue-500 rounded-full">
          <Image size={24} />
        </div>
        <h3 className="text-gray-500 hidden lg:block">Upload Photos</h3>
        <p className="text-gray-500 text-xs lg:text-base">
          upload and relive precious moments with a simple click.
        </p>
      </div>

      <div className="flex flex-col text-center gap-2 pt-4 xl:pt-0 cursor-pointer ">
        <div className="mx-auto w-14 h-14 flex justify-center items-center bg-blue-500 rounded-full">
          <Star size={24} />
        </div>
        <h3 className="text-gray-500 hidden lg:block">Get feedback</h3>
        <p className="text-gray-500 text-xs lg:text-base  ">
          Provide feedback effortlessly and help us improve with just a few
          clicks
        </p>
      </div>

      <div className=" flex-col text-center gap-2 cursor-pointer hidden lg:flex ">
        <div className="mx-auto w-14 h-14 flex justify-center items-center bg-blue-500 rounded-full">
          <Engine size={24} />
        </div>
        <h3 className="text-gray-500">Improve your skill</h3>
        <p className="text-gray-500 ">
          Elevate your skills through your app for immediate improvement.
        </p>
      </div>
    </section>
  );
}

export default About;

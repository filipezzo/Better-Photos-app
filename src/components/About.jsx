import { Engine, Image, Star } from "@phosphor-icons/react";
function About() {
  return (
    <section className="bg-white grid grid-cols-3 place-items-center p-2 ">
      <div className="flex flex-col justify-center text-center gap-2 cursor-pointer ">
        <div className="mx-auto w-14 h-14 flex justify-center items-center bg-blue-500 rounded-full">
          <Image size={24} />
        </div>
        <h3 className="text-gray-500">Upload Photos</h3>
        <p className="text-gray-500">
          upload and relive precious moments with a simple click.
        </p>
      </div>

      <div className="flex flex-col text-center gap-2 cursor-pointer ">
        <div className="mx-auto w-14 h-14 flex justify-center items-center bg-blue-500 rounded-full">
          <Star size={24} />
        </div>
        <h3 className="text-gray-500">Get feedback</h3>
        <p className="text-gray-500">
          Provide feedback effortlessly and help us improve with just a few
          clicks
        </p>
      </div>

      <div className="flex flex-col text-center gap-2 cursor-pointer ">
        <div className="mx-auto w-14 h-14 flex justify-center items-center bg-blue-500 rounded-full">
          <Engine size={24} />
        </div>
        <h3 className="text-gray-500">Improve your skill</h3>
        <p className="text-gray-500">
          Elevate your skills through your app for immediate improvement.
        </p>
      </div>
    </section>
  );
}

export default About;

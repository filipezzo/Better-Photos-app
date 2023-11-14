import { Engine, Image, Star } from "@phosphor-icons/react";
function About() {
  return (
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
  );
}

export default About;

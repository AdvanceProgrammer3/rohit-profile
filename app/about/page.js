import React from "react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-2xl p-4 font-bold text-pink-700">
        About Me
      </h2>
      <hr className="via-lime-600 " />
      <div className="p-2">
        <p className="font-semibold text-xl">
          Welcome to 100 JS Projects, a website dedicated to helping developers
          learn and master JavaScript through practical projects. Our goal is to
          provide you with the tools and resources you need to improve your
          skills and build real-world projects that demonstrate your expertise.
        </p>
        <p className=" italic py-4">
          If you are new to web development, we recommend starting with our 50
          HTML CSS JS Projects course, which will walk you through building 50
          small projects using HTML, CSS, and JavaScript.
        </p>
        <p className="font-serif py-2">
          These projects will give you a solid foundation in web development and
          prepare you for more advanced topics like frameworks, libraries, and
          server-side programming.
        </p>
        <p className="py-3 font-thin text-red-500 pb-72">
          Once you have completed the course, you can come back to 100 JS
          Projects to continue learning and exploring new concepts in
          JavaScript. We regularly add new projects and resources to help you
          stay up-to-date and expand your knowledge. Thanks for visiting, and we
          hope you enjoy learning with us!
        </p>
      </div>
    </div>
  );
}

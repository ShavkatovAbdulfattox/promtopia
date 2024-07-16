import Feed from "@components/Feed";
import React from "react";

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center ">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered Promts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
        dignissimos natus possimus placeat consectetur error repellendus sequi
        voluptates.
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
}

export default Home;

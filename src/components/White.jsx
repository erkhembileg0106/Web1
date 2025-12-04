import React from "react";
const White = () => {
  return (
    <section className="w-full bg-white p-16 grid grid-cols-2 gap-10">
      <h2 className="font-semibold">Tech Blog</h2>
      <div className="space-y-6 text-sm">
        <article>
          <h3 className="font-semibold">This Is Your Brain On Helium</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate mollitia voluptates iure harum autem facere aut cum. Dolorem, molestias animi nisi esse quam quo optio! Quidem nobis inventore voluptatum.</p>
          <p className="text-xs mt-1">May 19, 2025</p>
        </article>
        <article>
          <h3 className="font-semibold">In Search Of Intelligence</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate mollitia voluptates iure harum autem facere aut cum. Dolorem, molestias animi nisi esse quam quo optio! Quidem nobis inventore voluptatum.</p>
          <p className="text-xs mt-1">June 12, 2025</p>
        </article>
        <article>
          <h3 className="font-semibold">Should Public Transit Be Free?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate mollitia voluptates iure harum autem facere aut cum. Dolorem, molestias animi nisi esse quam quo optio! Quidem nobis inventore voluptatum.</p>
          <p className="text-xs mt-1">March 17, 2025</p>
        </article>
      </div>
    </section>
  );
};
export default White;
import React from "react";
const Hazel = () => {
return (
    <section className="w-full p-10 text-white"  style={{backgroundColor: "#f08e80"}}>
      <h1 className="text-5xl max-w-2xl">
        I’m a <i>Scientist</i> and <i>Speaker</i> who is interested in the psychology of greed.
      </h1>
      <div className="rid grid-cols-2 gap-10 mt-16">
        <div className="flex justify-around">
          <h2 className="font-semibold mb-2">My Mission</h2>
          <p className="text-sm leading-relaxed max-w-md">
            This is my mission. Maecenas a varius odio egestas auctor. Praesent facilisis, ex a gravida
            ultricies, quam sed magna placerat eros, et vehicula lectus ligula id dui. Aliquam ut cursus velit
            ut eros lorem ipsum ullamcorper iaculis.
          </p>
        </div>
        <div className="flex flex-row justify-around">
          <h2 className="font-semibold mb-2">Specialties</h2>
          <div className="flex gap-10">
            <ul>
            <li>Public Speaking</li>
            <li>Data Analysis</li>
            <li>Strategic Planning</li>
            <li>User Interviews</li>
          </ul>
          <ul>
            <li>Writing & Editing</li>
            <li>Analytics & Data</li>
            <li>Front-End Dev</li>
            <li>Programming</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};
export default Hazel;
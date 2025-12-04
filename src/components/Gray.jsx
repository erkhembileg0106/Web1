import React from "react";
const Gray = () => {
  return (
    <section className="w-full bg-orange-50 p-16 grid grid-cols-2 gap-10" style={{backgroundColor: "#fdf0e6"}}>
      <h2 className="font-semibold">Speaking Events</h2>
      <div className="text-sm space-y-6">
        <div>
          <h3>NY Economics Forum</h3>
          <p>New York, NY</p>
          <p className="text-xs">August 25th 2025, 7:00pm</p>
        </div>
        <div>
          <h3>Emerging Tech Meet-Up</h3>
          <p>San Francisco, CA</p>
          <p className="text-xs">August 25th 2025, 7:00pm</p>
        </div>
        <div>
          <h3>Creative Code Meetup</h3>
          <p>Denver, CO</p>
          <p className="text-xs">August 25th 2025, 7:00pm</p>
        </div>
      </div>
    </section>
  );
};
export default Gray;
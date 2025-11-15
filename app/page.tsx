import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import React from "react";
import { events } from "@/lib/constants";
const page = () => {
  return (
    <section>
      <h1 className="text-center">
        Welcome to TrueEvent – Marriage Registration Portal
      </h1>
      <p className="text-center mt-5">
        Complete your marriage registration easily and securely from the comfort
        of your home. Upload documents, schedule appointments, and receive
        official confirmation — all in one trusted platform.
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
              
      </div>
    </section>
  );
};

export default page;

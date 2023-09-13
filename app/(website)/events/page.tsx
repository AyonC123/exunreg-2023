"use client";

import { fetchEvents } from "@/util/data/Events";
import EventDescription from "@/components/EventDescription";

export default async function EventsPage() {
  const Events = await fetchEvents();

  return (
    <div className="my-[4rem] mx-[2rem] md:mx-[9rem]">
      <div className="text-main text-5xl md:text-6xl font-bold">Events</div>
      <div>
        {Events.map(
          (
            {
              name,
              classes,
              participants,
              teams,
              independent,
              registrations,
              image,
              description,
            },
            i
          ) => (
            <EventDescription
              key={i}
              name={name}
              classes={classes}
              participants={participants}
              teams={teams}
              independent={independent}
              registrations={registrations}
              image={image}
              description={description}
            />
          )
        )}
      </div>
    </div>
  );
}

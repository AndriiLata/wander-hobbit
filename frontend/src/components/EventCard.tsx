import React from 'react';
import { EventData } from '../types/EventTypes'; // or define inline

interface EventCardProps {
  event: EventData;
  onClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <div
      className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow 
                 cursor-pointer inline-block"
      onClick={onClick}
    >
      {/* 1) Top-right: Participant Count */}
      <div className="flex justify-end p-2">
        <div className="badge badge-primary text-xs md:text-sm whitespace-nowrap">
          {event.currentParticipants}/{event.maxParticipants}
        </div>
      </div>

      {/* 2) Event Image + Title */}
      <figure>
        <img
          src={event.image}
          alt={event.name}
          className="w-full object-cover"
        />
      </figure>
      <div className="card-body pt-1 pb-2">
        <h3 className="card-title text-sm md:text-base whitespace-nowrap">
          {event.name}
        </h3>
      </div>

      {/* 3) Single-row Info Section: Start, Distance/Elevation, Creator */}
      <div className="px-4 pb-4">
        <div className="divider my-2" />

        <div
          className="
            flex 
            flex-row 
            flex-nowrap 
            items-center 
            gap-4 
            whitespace-nowrap
          "
        >
          {/* Start */}
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-500">Start</span>
            <span className="text-sm md:text-base font-semibold">
              {event.startTime}
            </span>
          </div>

          {/* Vertical divider */}
          <div className="divider divider-horizontal m-0 p-0" />

          {/* Distance / Elevation */}
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-500">Distance / Elevation</span>
            <span className="text-sm md:text-base font-semibold">
              {event.distance} km / {event.elevationGain} hm
            </span>
          </div>

          {/* Vertical divider */}
          <div className="divider divider-horizontal m-0 p-0" />

          {/* Creator Info */}
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-500">Creator</span>
            <div className="mt-1 flex items-center gap-2">
              <img
                src={event.creator.profilePic}
                alt={event.creator.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm md:text-base font-semibold">
                {event.creator.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

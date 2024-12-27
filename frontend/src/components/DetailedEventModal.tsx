import React from 'react';
import { EventData } from '../types/EventTypes';

interface DetailedEventModalProps {
  event: EventData;
  onClose: () => void;
}

const DetailedEventModal: React.FC<DetailedEventModalProps> = ({ event, onClose }) => {
  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        {/* Event Title */}
        <h2 className="font-bold text-xl mb-3">{event.name}</h2>

        {/* Stats (daisyUI) */}
        <div className="stats shadow bg-base-200 mb-4">
          <div className="stat">
            <div className="stat-title">Start</div>
            <div className="stat-value text-base">{event.startTime}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Difficulty</div>
            <div className="stat-value text-base">{event.difficulty}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Distance</div>
            <div className="stat-value text-base">{event.distance} km</div>
          </div>
          <div className="stat">
            <div className="stat-title">Elevation</div>
            <div className="stat-value text-base">{event.elevationGain} m</div>
          </div>
          <div className="stat">
            <div className="stat-title">Participants</div>
            <div className="stat-value text-base">
              {event.currentParticipants}/{event.maxParticipants}
            </div>
          </div>
        </div>

        {/* Creator Info */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={event.creator.profilePic}
            alt={event.creator.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{event.creator.name}</p>
          </div>
        </div>

        {/* Big general description */}
        <p className="mb-4">{event.description}</p>

        {/* Embedded map (placeholder) */}
        <div className="w-full h-64 mb-4">
          <iframe
            title="Hike Meeting Location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8436007789606!2d144.96305381531968!3d-37.81421757975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1df5f43%3A0x77af9c0991c4b789!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1691681814623!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Modal actions */}
        <div className="modal-action">
          <button className="btn btn-primary">Request To Join</button>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedEventModal;

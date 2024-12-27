import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import DetailedEventModal from '../components/DetailedEventModal';
import { EventData } from '../types/EventTypes';

// Example data – later load from a backend
const MOCK_EVENTS: EventData[] = [
  {
    id: 1,
    name: 'Sunrise Mountain Hike',
    image: 'https://placekitten.com/400/200',
    startDate: '2024-12-12T06:00:00Z',
    startTime: '6:00 AM',
    difficulty: 'T3',
    distance: 20,
    elevationGain: 1000,
    currentParticipants: 10,
    maxParticipants: 15,
    creator: { name: 'Alice', profilePic: 'https://placekitten.com/50/50' },
    description:
      'A beautiful early-morning hike to catch the sunrise. Bring warm clothes and a camera!',
  },
  {
    id: 2,
    name: 'Rocky Ridge Trail',
    image: 'https://placekitten.com/400/201',
    startDate: '2024-12-12T08:00:00Z',
    startTime: '8:00 AM',
    difficulty: 'T2',
    distance: 12,
    elevationGain: 800,
    currentParticipants: 3,
    maxParticipants: 3,
    creator: { name: 'Bob', profilePic: 'https://placekitten.com/51/51' },
    description:
      'A moderate hike with some rocky sections. Perfect for a half-day trip!',
  },
  {
    id: 3,
    name: 'Moonlight Forest Walk',
    image: 'https://placekitten.com/400/203',
    startDate: '2024-12-13T19:00:00Z',
    startTime: '7:00 PM',
    difficulty: 'T1',
    distance: 5,
    elevationGain: 200,
    currentParticipants: 5,
    maxParticipants: 10,
    creator: { name: 'Charlie', profilePic: 'https://placekitten.com/52/52' },
    description:
      'A magical night walk under the full moon. Headlamps will be provided.',
  },
];

// Helper to group events by their date label
function groupEventsByDate(events: EventData[]): Record<string, EventData[]> {
  const groups: Record<string, EventData[]> = {};

  events.forEach((event) => {
    // e.g. "Thursday, December 12"
    const dateObj = new Date(event.startDate);
    const dateLabel = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

    if (!groups[dateLabel]) {
      groups[dateLabel] = [];
    }
    groups[dateLabel].push(event);
  });

  return groups;
}

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  // 1) Group and sort events
  const groupedEvents = groupEventsByDate(MOCK_EVENTS);
  const sortedDates = Object.keys(groupedEvents).sort((a, b) => {
    const firstEventA = groupedEvents[a][0];
    const firstEventB = groupedEvents[b][0];
    return (
      new Date(firstEventA.startDate).getTime() -
      new Date(firstEventB.startDate).getTime()
    );
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Upcoming Hikes</h1>

      {sortedDates.map((dateLabel) => {
        const eventsOnThisDate = groupedEvents[dateLabel];
        return (
          <div key={dateLabel} className="mb-8">
            {/* Date label */}
            <h2 className="text-lg font-semibold mb-4">{dateLabel}</h2>

            {/* Grid of EventCards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {eventsOnThisDate.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Detailed Modal */}
      {selectedEvent && (
        <DetailedEventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Events;

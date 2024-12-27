export interface EventCreator {
    name: string;
    profilePic: string;
  }
  
  export interface EventData {
    id: number;
    name: string;
    image: string;
    startDate: string;          // e.g. "2024-12-12T06:00:00Z"
    startTime: string;          // e.g. "6:00 AM"
    difficulty: string;         // e.g. "T3"
    distance: number;           // e.g. 20 (km)
    elevationGain: number;      // e.g. 1000 (m)
    currentParticipants: number;
    maxParticipants: number;
    creator: EventCreator;
    description: string;
  }
  
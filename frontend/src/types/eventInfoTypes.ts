interface EventCardProps {
  eventbanner: string;
  title: string;
  start_timing: string;
  roomname: string;
  attendeesCount: number;
  isStarted: boolean;
  isEnded: boolean;
  eventId: string;
  eventCategory: EventCategory;
}
enum EventCategory {
  AUDIO = "Audio",
  STREAMING = "Streaming",
}
enum EventType {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}

export { EventCategory, EventType };
export type { EventCardProps };

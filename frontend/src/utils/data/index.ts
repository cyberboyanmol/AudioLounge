import { EventCardProps, EventCategory } from "@/types/eventInfoTypes";
import { RoomType, roomCardDataProps } from "@/types/roomInfoTypes";

export const roomData: roomCardDataProps[] = [
  {
    roomId: "1",
    roomname: "Byte-By-Byte Brainstorming Hub",
    roomType: RoomType.SOCIAL,
    members: 25,
  },
  {
    roomId: "2",
    roomname: "Public Discussion",
    roomType: RoomType.PUBLIC,
    members: 10,
  },
  {
    roomId: "3",
    roomname: "Private Meeting",
    roomType: RoomType.PRIVATE,
    members: 5,
  },
  {
    roomId: "4",
    roomname: "Public Discussion",
    roomType: RoomType.PUBLIC,
    members: 10,
  },
  {
    roomId: "5",
    roomname: "Private Meeting",
    roomType: RoomType.PRIVATE,
    members: 5,
  },
  {
    roomId: "6",
    roomname: "Public Discussion",
    roomType: RoomType.PUBLIC,
    members: 10,
  },
  {
    roomId: "7",
    roomname: "Private Meeting",
    roomType: RoomType.PRIVATE,
    members: 5,
  },
  {
    roomId: "8",
    roomname: "Public Discussion",
    roomType: RoomType.PUBLIC,
    members: 10,
  },
  {
    roomId: "9",
    roomname: "Private Meeting",
    roomType: RoomType.PRIVATE,
    members: 5,
  },
];

export const RoomTabName = {
  ANNOUNCEMENTS: "Announcements",
  BROWSE: "Browse channels",
  EVENTS: "Events",
  HANGOUTS: "Hangouts",
};

export const RoomTabData: { tabText: string }[] = [
  {
    tabText: RoomTabName.ANNOUNCEMENTS,
  },
  {
    tabText: RoomTabName.BROWSE,
  },
  {
    tabText: RoomTabName.EVENTS,
  },
  {
    tabText: RoomTabName.HANGOUTS,
  },
];
export const EventTabName = {
  UPDATES: "Updates",
  DESCRIPTION: "Description",
  ATTENDEES: "Attendees",
};

export const EventTabData: { tabText: string }[] = [
  {
    tabText: EventTabName.DESCRIPTION,
  },
  {
    tabText: EventTabName.UPDATES,
  },
  {
    tabText: EventTabName.ATTENDEES,
  },
];

export const eventData: EventCardProps[] = [
  {
    eventbanner: "https://i.imgur.com/2chX21m.jpg",
    title: "Tech Conference 2023 - Exploring the Future of AI and Robotics",
    start_timing: "2023-08-15 10:00 AM",
    roomname: "Conference Room A",
    attendeesCount: 250,
    isStarted: true,
    isEnded: false,
    eventId: "event001",
    eventCategory: EventCategory.AUDIO,
  },
  {
    eventbanner: "https://i.imgur.com/j2O3d6m.jpg",
    title: "Web Development Workshop - Building Modern Web Apps",
    start_timing: "2023-08-20 2:00 PM",
    roomname: "Workshop Room B",
    attendeesCount: 100,
    isStarted: false,
    isEnded: false,
    eventId: "event002",
    eventCategory: EventCategory.STREAMING,
  },
  {
    eventbanner: "https://i.imgur.com/mfwtMBv.jpg",
    title: "Marketing Seminar - Strategies for Effective Digital Marketing",
    start_timing: "2023-09-05 11:30 AM",
    roomname: "Seminar Hall C",
    attendeesCount: 150,
    isStarted: true,
    isEnded: false,
    eventId: "event003",
    eventCategory: EventCategory.AUDIO,
  },
  {
    eventbanner: "https://i.imgur.com/2chX21m.jpg",
    title: "Data Science Conference - Advancements in Big Data Analytics",
    start_timing: "2023-09-10 9:00 AM",
    roomname: "Conference Room D",
    attendeesCount: 300,
    isStarted: true,
    isEnded: true,
    eventId: "event004",
    eventCategory: EventCategory.AUDIO,
  },
  {
    eventbanner: "https://i.imgur.com/YtYgbdO.jpg",
    title: "Product Launch Event - Introducing Exciting New Gadgets",
    start_timing: "2023-09-20 3:30 PM",
    roomname: "Product Showroom",
    attendeesCount: 50,
    isStarted: false,
    isEnded: false,
    eventId: "event005",
    eventCategory: EventCategory.STREAMING,
  },
  {
    eventbanner: "https://i.imgur.com/WiNKV9Y.jpg",
    title: "Art Exhibition - A Showcase of Creative Masterpieces",
    start_timing: "2023-10-01 10:00 AM",
    roomname: "Art Gallery",
    attendeesCount: 80,
    isStarted: true,
    isEnded: true,
    eventId: "event006",
    eventCategory: EventCategory.AUDIO,
  },
  {
    eventbanner: "https://i.imgur.com/mfwtMBv.jpg",
    title: "Startup Pitch Day - Presenting Innovative Business Ideas",
    start_timing: "2023-10-15 1:00 PM",
    roomname: "Conference Room E",
    attendeesCount: 120,
    isStarted: false,
    isEnded: false,
    eventId: "event007",
    eventCategory: EventCategory.STREAMING,
  },
  {
    eventbanner: "https://i.imgur.com/0lhAHon.jpg",
    title: "Fashion Show - Unveiling the Latest Fashion Trends",
    start_timing: "2023-11-05 6:30 PM",
    roomname: "Fashion Runway",
    attendeesCount: 200,
    isStarted: true,
    isEnded: false,
    eventId: "event008",
    eventCategory: EventCategory.AUDIO,
  },
  {
    eventbanner: "https://i.imgur.com/xhlJdk4.jpg",
    title: "Educational Webinar - Enhancing Remote Learning Techniques",
    start_timing: "2023-11-10 11:00 AM",
    roomname: "Virtual Classroom",
    attendeesCount: 500,
    isStarted: true,
    isEnded: true,
    eventId: "event009",
    eventCategory: EventCategory.AUDIO,
  },
  {
    eventbanner: "https://i.imgur.com/hZsesRq.jpg",
    title: "Health and Wellness Seminar - Prioritizing Mental Health",
    start_timing: "2023-11-20 2:30 PM",
    roomname: "Wellness Center",
    attendeesCount: 70,
    isStarted: false,
    isEnded: false,
    eventId: "event010",
    eventCategory: EventCategory.STREAMING,
  },
  {
    eventbanner: "https://i.imgur.com/yYN8qlt.jpg",
    title: "Book Launch - Introducing a New Bestselling Novel",
    start_timing: "2023-12-01 4:00 PM",
    roomname: "Bookstore",
    attendeesCount: 40,
    isStarted: true,
    isEnded: false,
    eventId: "event011",
    eventCategory: EventCategory.AUDIO,
  },
  {
    eventbanner: "https://i.imgur.com/JZNpdDa.jpg",
    title: "Culinary Workshop - Mastering the Art of Gourmet Cooking",
    start_timing: "2023-12-10 3:00 PM",
    roomname: "Cooking Studio",
    attendeesCount: 90,
    isStarted: true,
    isEnded: true,
    eventId: "event012",
    eventCategory: EventCategory.AUDIO,
  },
  {
    eventbanner: "https://i.imgur.com/llzj7yZ.jpg",
    title: "Fitness Challenge - Achieving Personal Fitness Goals",
    start_timing: "2023-12-20 6:00 AM",
    roomname: "Fitness Center",
    attendeesCount: 300,
    isStarted: false,
    isEnded: false,
    eventId: "event013",
    eventCategory: EventCategory.STREAMING,
  },
  {
    eventbanner: "https://i.imgur.com/BMZCaGa.jpg",
    title: "Investment Seminar - Maximizing Your Financial Growth",
    start_timing: "2024-01-05 9:30 AM",
    roomname: "Investment Hall",
    attendeesCount: 180,
    isStarted: true,
    isEnded: false,
    eventId: "event014",
    eventCategory: EventCategory.AUDIO,
  },
  {
    eventbanner: "https://i.imgur.com/4qlTRFJ.jpg",
    title: "Charity Fundraiser - Empowering Underprivileged Communities",
    start_timing: "2024-01-15 1:00 PM",
    roomname: "Community Center",
    attendeesCount: 120,
    isStarted: false,
    isEnded: false,
    eventId: "event015",
    eventCategory: EventCategory.STREAMING,
  },
  {
    eventbanner: "https://i.imgur.com/NUM18eQ.jpg",
    title: "Technology Expo - Showcasing Innovations in Tech Industry",
    start_timing: "2024-02-01 10:00 AM",
    roomname: "Tech Convention Center",
    attendeesCount: 400,
    isStarted: true,
    isEnded: true,
    eventId: "event016",
    eventCategory: EventCategory.AUDIO,
  },
  {
    eventbanner: "https://i.imgur.com/PwG4d60.jpg",
    title: "Art and Craft Fair - Celebrating Artistic Creativity",
    start_timing: "2024-02-10 2:30 PM",
    roomname: "Craft Exhibition Hall",
    attendeesCount: 60,
    isStarted: true,
    isEnded: false,
    eventId: "event017",
    eventCategory: EventCategory.AUDIO,
  },
  {
    eventbanner: "https://i.imgur.com/utfKmpM.jpg",
    title: "Entrepreneurship Summit - Nurturing Business Ideas",
    start_timing: "2024-02-20 11:00 AM",
    roomname: "Business Conference Hall",
    attendeesCount: 220,
    isStarted: false,
    isEnded: false,
    eventId: "event018",
    eventCategory: EventCategory.STREAMING,
  },
  {
    eventbanner: "https://i.imgur.com/mzR3t9d.jpg",
    title: "Science Exhibition - Exploring Scientific Discoveries",
    start_timing: "2024-03-05 9:00 AM",
    roomname: "Science Museum",
    attendeesCount: 180,
    isStarted: true,
    isEnded: false,
    eventId: "event019",
    eventCategory: EventCategory.AUDIO,
  },
  {
    eventbanner: "https://i.imgur.com/LbzmZ82.jpg",
    title: "Music Concert - An Evening of Melodies and Rhythms",
    start_timing: "2024-03-15 6:30 PM",
    roomname: "Concert Arena",
    attendeesCount: 800,
    isStarted: false,
    isEnded: false,
    eventId: "event020",
    eventCategory: EventCategory.STREAMING,
  },
];

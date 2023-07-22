interface roomCardDataProps {
  roomId: string;
  roomname: string;
  roomType: RoomType;
  members: number;
}

enum RoomType {
  SOCIAL = "SOCIAL",
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}

export { RoomType };
export type { roomCardDataProps };

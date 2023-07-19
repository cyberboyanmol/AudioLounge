export type roomCardDataProps = {
  roomId: string;
  roomname: string;
  roomType: RoomType;
  members: number;
};

export enum RoomType {
  SOCIAL = "SOCIAL",
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}

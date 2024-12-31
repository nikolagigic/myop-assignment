export type TicketType = "local" | "tourist";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  userType: TicketType;
}

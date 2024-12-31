export type TicketType = "Local" | "Tourist";

export interface Event {
  id: string;
  name: string;
  date: string; // ISO 8601 format
  location: string;
  description: string;
  tickets: Ticket[];
}

export interface Ticket {
  id: string;
  type: TicketType;
  price: number; // in USD
  availableQuantity: number;
  soldQuantity: number;
}

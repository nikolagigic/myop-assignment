import { type Ticket } from "@/types/tickets";

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <div className="border rounded-lg p-4 w-64 aspect-square">
      <h1>{ticket.title}</h1>
      <p>{ticket.description}</p>
    </div>
  );
}

import { type Ticket } from "@/types/tickets";

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  const formattedDate = new Date(ticket.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="border rounded-lg p-4 w-64 aspect-square flex flex-col justify-between">
      <div className="space-y-1">
        <h1 className="font-bold uppercase">{ticket.userType}</h1>
        <h2>{ticket.title}</h2>
        <p className="text-sm">{ticket.description}</p>
      </div>
      <div className="w-full flex items-center justify-between text-xs">
        <span className="font-bold">{ticket.location}</span>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
}

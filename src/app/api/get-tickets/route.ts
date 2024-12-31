import { NextRequest } from "next/server";
import { tickets } from "@/mock/tickets";
import { MAX_PAGE_SIZE } from "@/constants/data-fetching";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userType = searchParams.get("userType") || "all";
  const page = Number(searchParams.get("page")) || 1;
  const searchQuery = searchParams.get("search")?.toLowerCase();

  console.log("searchParams", searchParams);

  if (isNaN(page) || page < 1) {
    return new Response(
      JSON.stringify({ status: 400, error: "Invalid page number" }),
      { status: 400 }
    );
  }

  let filteredTickets = tickets;

  if (userType !== "all") {
    filteredTickets = filteredTickets.filter(
      (ticket) => ticket.userType.toLowerCase() === userType.toLowerCase()
    );
  }

  if (searchQuery) {
    filteredTickets = filteredTickets.filter(
      (ticket) =>
        ticket.title.toLowerCase().includes(searchQuery) ||
        ticket.description.toLowerCase().includes(searchQuery)
    );
    console.log("filteredTickets", filteredTickets);
  }

  const ticketsCount = filteredTickets.length;
  const slicedTickets = filteredTickets.slice(
    (page - 1) * MAX_PAGE_SIZE,
    page * MAX_PAGE_SIZE
  );

  return new Response(
    JSON.stringify({
      status: 200,
      data: { tickets: slicedTickets, ticketsCount },
    }),
    { status: 200 }
  );
}

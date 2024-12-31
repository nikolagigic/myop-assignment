import { NextRequest } from "next/server";
import { tickets } from "@/mock/tickets";
import { MAX_PAGE_SIZE } from "@/constants/data-fetching";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userType = searchParams.get("userType");
  const page = Number(searchParams.get("page")) ?? 1;

  if (isNaN(page)) {
    return Response.json({ status: 400, error: "Invalid page number" });
  }

  const filteredTickets = tickets
    .filter((ticket) => {
      if (userType) {
        return ticket.userType === userType.toLowerCase();
      }
      return true;
    })
    .slice((page - 1) * MAX_PAGE_SIZE, page * MAX_PAGE_SIZE);

  return Response.json({ status: 200, data: filteredTickets });
}

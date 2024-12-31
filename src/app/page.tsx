import PaginatedComponent from "@/components/paginated-component";

import { type Ticket } from "@/types/tickets";
import { API_URL } from "@/constants/data-fetching";

type PageProps = {
  searchParams: Promise<{
    userType: string;
    page: number;
    search: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { userType = "all", page = 1, search = "" } = await searchParams;

  let ticketsData: { tickets: Ticket[]; ticketsCount: number } = {
    tickets: [],
    ticketsCount: 0,
  };

  try {
    const res = await fetch(
      `${API_URL}/get-tickets?userType=${userType}&page=${page}&search=${search}`
    );
    if (!res.ok) throw new Error(`Failed to fetch tickets: ${res.statusText}`);
    const jsonData = await res.json();
    ticketsData = jsonData.data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
  }

  return (
    <div className="p-8">
      <div>Tickets</div>
      <PaginatedComponent
        tickets={ticketsData.tickets}
        ticketsCount={ticketsData.ticketsCount}
      />
    </div>
  );
}

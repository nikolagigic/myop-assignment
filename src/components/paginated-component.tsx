"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import TicketCard from "@/components/ticket-card";
import { Ticket } from "@/types/tickets";
import { MAX_PAGE_SIZE } from "@/constants/data-fetching";
import { debounce } from "@/utils/debounce";

type PaginatedComponentProps = {
  tickets: Ticket[];
  ticketsCount: number;
};

export default function PaginatedComponent({
  tickets,
  ticketsCount,
}: PaginatedComponentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? "1");
  const userType = searchParams.get("userType") ?? "all";
  const searchQuery = searchParams.get("search") ?? "";

  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [currentTickets, setCurrentTickets] = useState<Ticket[]>(tickets);

  const nextPageRoute = `/?page=${
    Number(page) + 1
  }&userType=${userType}&search=${searchQuery}`;
  const prevPageRoute = `/?page=${
    Number(page) - 1
  }&userType=${userType}&search=${searchQuery}`;
  const lastPage = Math.ceil(ticketsCount / MAX_PAGE_SIZE);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      router.push(
        `/?page=1&userType=${userType}&search=${encodeURIComponent(query)}`
      );
    }, 500),
    [router, userType]
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
    debouncedSearch(query);
  };

  useEffect(() => {
    setCurrentTickets(tickets);
  }, [tickets]);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          className="border rounded-lg p-2 w-full bg-black ring-0 outline-none"
          placeholder="Search tickets..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {ticketsCount > 0 ? (
        <>
          <div className="flex flex-wrap gap-4">
            {currentTickets?.length === 0 ? (
              <div>No tickets match your search criteria</div>
            ) : (
              currentTickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))
            )}
          </div>

          <div className="flex space-x-4 items-center">
            <button
              className="rounded-lg border p-1"
              onClick={() => router.push(prevPageRoute)}
              disabled={page === 1}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <div>
              {page} / {lastPage}
            </div>
            <button
              className="rounded-lg border p-1"
              onClick={() => router.push(nextPageRoute)}
              disabled={page >= lastPage}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </>
      ) : (
        <div>No tickets available</div>
      )}
    </div>
  );
}

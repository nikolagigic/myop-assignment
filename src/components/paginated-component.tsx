"use client";

import { useSearchParams } from "next/navigation";
import { Ticket } from "@/types/tickets";

type PaginatedComponentProps = {
  tickets: Ticket[];
};

export default function PaginatedComponent({
  tickets,
}: PaginatedComponentProps) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;

  return (
    <div>
      <div>Paginated Component</div>
    </div>
  );
}

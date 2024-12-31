import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  console.log(request.nextUrl.searchParams);
  return Response.json({ status: 200 });
}

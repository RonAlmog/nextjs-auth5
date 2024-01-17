import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const role = await currentRole();
  // allow for admins
  if (role === UserRole.ADMIN) {
    return new NextResponse(null, { status: 200 });
  }
  // forbidden for non admins
  return new NextResponse(null, { status: 403 });
}

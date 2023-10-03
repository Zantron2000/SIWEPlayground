import { NextRequest, NextResponse } from "next/server";
import ssx from "../_ssx";

export async function POST(req: NextRequest) {
  return NextResponse.json({ 
    success: await ssx.logout() ?? true
  }, { status: 200 });
}
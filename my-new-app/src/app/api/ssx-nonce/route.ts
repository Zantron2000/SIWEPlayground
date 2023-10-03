import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import ssx from "../_ssx";

export function GET(req: NextRequest) {
  console.log(ssx)
  const nonce = ssx.generateNonce();
  cookies().set('nonce', nonce);
  return NextResponse.json(nonce, { status: 200 });
}
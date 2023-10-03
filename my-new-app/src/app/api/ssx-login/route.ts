import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import ssx from "../_ssx";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const nonce = cookies().get('nonce')?.value || "";

  

  const data = await ssx.login(
    body.siwe,
    body.signature,
    body.daoLogin,
    body.resolveEns,
    nonce,
    body.resolveLens,
  );
  console.log(ssx)
  
  return NextResponse.json(data);
}
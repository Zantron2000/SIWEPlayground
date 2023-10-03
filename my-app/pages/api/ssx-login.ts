import { NextApiRequest, NextApiResponse } from "next";
import ssx from "./_ssx";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const nonce = req.cookies.nonce;
  console.log(body.siwe, "next", body.signature, body.daoLogin, body.resolveEns, "nonce", nonce, body.resolveLens);

  res.status(200).json(
    await ssx.login(
      req.body.siwe,
      req.body.signature,
      req.body.daoLogin,
      req.body.resolveEns,
      req.cookies.nonce || "",
      req.body.resolveLens,
    )
  );
}
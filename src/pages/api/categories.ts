// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

initializeApp({
  credential: applicationDefault(),
});
const db = getFirestore();

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log(req.body);
    const docRef = db.collection("users");
    async () => docRef.set(req.body);
    res.status(200).json({ name: "ciao" });
  } else {
  }
  res.status(200).json({ name: "John Doe" });
}

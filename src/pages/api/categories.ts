// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { DocumentData, addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";

interface Response {
  ok: boolean;
  code: number;
  data: DocumentData[] | string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "POST") {
    const categoriesCollection = collection(db, "categories");
    await addDoc(categoriesCollection, JSON.parse(req.body));
    const response = {
      ok: true,
      code: 200,
      data: "categoria aggiunta",
    };
    res.status(200).json(response);
  } else {
    const categoriesCollection = collection(db, "categories");
    const categorySnapshot = await getDocs(categoriesCollection);
    const categoryList = categorySnapshot.docs.map(doc => doc.data());
    const response = {
      ok: true,
      code: 200,
      data: categoryList,
    };
    res.status(200).json(response);
  }
}

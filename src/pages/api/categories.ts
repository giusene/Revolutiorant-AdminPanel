// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  DBApiResponse,
  addRecord,
  getRecords,
} from "../../../firebase/firebase.methods";

interface CategoryItem {
  name: string;
  order: number;
  status: boolean;
}

const bodyStructure: CategoryItem = { name: "", order: 0, status: false };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DBApiResponse>
) {
  switch (req.method) {
    case "GET":
      const recordsList = await getRecords("categories");
      res.status(recordsList.code).json(recordsList);
      break;
    case "POST":
      const record = await addRecord(
        "categories",
        req.body,
        bodyStructure,
        "name"
      );
      res.status(record.code).json(record);
      break;
  }
}

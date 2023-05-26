// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  DBApiResponse,
  addRecord,
  deleteRecord,
  getRecords,
  putRecord,
} from "../../../firebase/firebase.methods";
import { defaultErrorResponse } from "../../../utils/lib";

interface CategoryPostItem {
  name: string;
  order: number;
  status: boolean;
}

interface CategoryPutItem {
  id: string;
  name: string;
  order: number;
  status: boolean;
}

const postBodyStructure: CategoryPostItem = {
  name: "",
  order: 0,
  status: false,
};

const putBodyStructure: CategoryPutItem = {
  id: "",
  name: "",
  order: 0,
  status: false,
};

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
      const addItem = await addRecord(
        "categories",
        JSON.parse(req.body),
        postBodyStructure,
        "name"
      );
      res.status(addItem.code).json(addItem);
      break;
    case "DELETE":
      const deleteItem = await deleteRecord("categories", JSON.parse(req.body));
      res.status(deleteItem.code).json(deleteItem);
      break;
    // case "DELETE-MANY":
    //   const deleteAllItem = await deleteRecord(
    //     "categories",
    //     JSON.parse(req.body)
    //   );
    //   res.status(deleteAllItem.code).json(deleteAllItem);
    //   break;
    case "PUT":
      // DA PROVARE
      const putItem = await putRecord(
        "categories",
        JSON.parse(req.body),
        putBodyStructure,
        "name"
      );
      res.status(putItem.code).json(putItem);
      break;
    default:
      res.status(404).json(defaultErrorResponse(req.method as string));
  }
}

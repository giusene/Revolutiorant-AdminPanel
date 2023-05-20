import { checkObjectStructure } from "../utils/lib";
import { db } from "./firebase.config";
import {
  DocumentData,
  CollectionReference,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export interface DBApiResponse {
  ok: boolean;
  code: number;
  data?: DocumentData[];
  message?: string;
}

type CollectionName = "categories" | "products";

export const getCollection = (
  collectionName: CollectionName
): CollectionReference<DocumentData> => {
  return collection(db, collectionName);
};

export const addRecord = async <T>(
  collectionName: CollectionName,
  item: string,
  structure: T,
  checkKey: string
): Promise<DBApiResponse> => {
  let checkValue;
  let collection;

  if (!checkObjectStructure(JSON.parse(item), structure)) {
    return {
      ok: false,
      code: 400,
      message: `Errore nella struttura dell'elemento da aggiungere`,
    };
  }

  try {
    checkValue = JSON.parse(item)[checkKey];
  } catch {
    return {
      ok: false,
      code: 400,
      message: "Errore nella struttura dell'elemento che si vuole aggiungere",
    };
  }

  try {
    collection = getCollection(collectionName);
  } catch {
    return {
      ok: false,
      code: 404,
      message: `Errore nella connessione alla collection: ${collectionName}`,
    };
  }

  const querySearch = await getDocs(
    query(collection, where(checkKey, "==", checkValue))
  );
  if (querySearch.empty) {
    try {
      await addDoc(collection, JSON.parse(item));
      return {
        ok: true,
        code: 200,
        message: "Elemento aggiunto con successo",
      };
    } catch {
      return {
        ok: false,
        code: 500,
        message: "Errore nell'aggiunzione dell'elemento",
      };
    }
  } else {
    return {
      ok: false,
      code: 409,
      message: `Un documento con lo stesso "${checkKey}" esiste già nella collezione: ${collectionName}`,
    };
  }
};

export const getRecords = async (
  collectionName: CollectionName
): Promise<DBApiResponse> => {
  let collection;
  let collectionSnapshot;
  try {
    collection = getCollection(collectionName);
  } catch {
    return {
      ok: false,
      code: 404,
      message: `Errore nella connessione alla collection: ${collectionName}`,
    };
  }
  try {
    collectionSnapshot = await getDocs(collection);
  } catch {
    return {
      ok: false,
      code: 500,
      message: `Errore nella lettura dei dati della collection: ${collectionName}`,
    };
  }
  return {
    ok: true,
    code: 200,
    data: collectionSnapshot.docs.map(doc => doc.data()),
  };
};

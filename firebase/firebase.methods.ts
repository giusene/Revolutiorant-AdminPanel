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
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export interface DBApiResponse {
  ok: boolean;
  code: number;
  data?: DocumentData[];
  message?: string;
}

interface DeleteItem {
  id: string;
}

interface PutItem {
  id: string;
  [key: string]: any;
}

type CollectionName = "categories" | "products";

export const getCollection = (
  collectionName: CollectionName
): CollectionReference<DocumentData> => {
  return collection(db, collectionName);
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
    data: collectionSnapshot.docs.map(doc => {
      const data = doc.data();
      const id = doc.id;
      return { id, ...data };
    }),
  };
};

export const addRecord = async <T>(
  collectionName: CollectionName,
  item: Object,
  structure: T,
  checkKey?: string
): Promise<DBApiResponse> => {
  let checkValue;
  let collection;

  if (!checkObjectStructure(item, structure)) {
    return {
      ok: false,
      code: 400,
      message: `Errore nella struttura dell'elemento da aggiungere`,
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

  if (checkKey) {
    checkValue = (item as any)[checkKey];
    if (checkValue === undefined) {
      return {
        ok: false,
        code: 404,
        message: `La chiave "${checkKey}" per il confronto non esiste`,
      };
    }

    const querySearch = await getDocs(
      query(collection, where(checkKey, "==", checkValue.toLowerCase()))
    );
    if (querySearch.empty) {
      try {
        await addDoc(collection, {
          ...item,
          [checkKey]: (item as any)[checkKey].toLowerCase(),
        });
        return {
          ok: true,
          code: 200,
          message: "Elemento aggiunto con successo",
        };
      } catch (error) {
        return {
          ok: false,
          code: 500,
          message: `Errore nell'aggiunzione dell'elemento: ${error}`,
        };
      }
    } else {
      return {
        ok: false,
        code: 409,
        message: `Un documento con lo stesso "${checkKey}" esiste già nella collezione: ${collectionName}`,
      };
    }
  } else {
    try {
      await addDoc(collection, item);
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
  }
};

export const deleteRecord = async (
  collectionName: CollectionName,
  record: DeleteItem
): Promise<DBApiResponse> => {
  let recordRef;
  let recordSnapshot;
  const { id } = record;

  if (id === undefined) {
    return {
      ok: false,
      code: 400,
      message: `Errore nella struttura dell'elemento da rimuovere: {id: string}`,
    };
  }

  try {
    recordRef = doc(db, collectionName, id);
  } catch {
    return {
      ok: false,
      code: 404,
      message: `Il record con id: ${id} non esiste nella collection: ${collectionName}`,
    };
  }

  try {
    recordSnapshot = await getDoc(recordRef);
  } catch (error) {
    return {
      ok: false,
      code: 500,
      message: `Errore durante l'eliminazione: ${error}`,
    };
  }

  if (recordSnapshot.exists()) {
    try {
      await deleteDoc(recordRef);
    } catch (error) {
      return {
        ok: false,
        code: 500,
        message: `Errore durante l'eliminazione: ${error}`,
      };
    }
  } else {
    return {
      ok: false,
      code: 404,
      message: `Il record con id: ${id} non esiste nella collection: ${collectionName}`,
    };
  }

  return {
    ok: true,
    code: 200,
    message: `Record id: ${id} eliminato correttamente`,
  };
};

export const putRecord = async <T>(
  collectionName: CollectionName,
  item: PutItem,
  structure: T,
  checkKey?: string
): Promise<DBApiResponse> => {
  let checkValue;
  let collection;
  let recordRef;

  if (!checkObjectStructure(item, structure)) {
    return {
      ok: false,
      code: 400,
      message: `Errore nella struttura dell'elemento da modificare`,
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

  if (checkKey) {
    checkValue = (item as any)[checkKey];
    if (checkValue === undefined) {
      return {
        ok: false,
        code: 404,
        message: `La chiave "${checkKey}" per il confronto non esiste`,
      };
    }

    const querySearch = await getDocs(
      query(collection, where(checkKey, "==", checkValue.toLowerCase()))
    );
    if (querySearch.empty) {
      recordRef = doc(db, collectionName, item.id);

      try {
        const itemWithoutId = (({ id, ...rest }) => rest)(item);
        await updateDoc(recordRef, {
          ...itemWithoutId,
          [checkKey]: (itemWithoutId as any)[checkKey].toLowerCase(),
        });

        return {
          ok: true,
          code: 200,
          message: "Elemento modificato con successo",
        };
      } catch (error) {
        return {
          ok: false,
          code: 500,
          message: `Errore nella modifica dell'elemento: ${error}`,
        };
      }
    } else {
      return {
        ok: false,
        code: 409,
        message: `Un documento con lo stesso "${checkKey}" esiste già nella collezione: ${collectionName}`,
      };
    }
  } else {
    try {
      await addDoc(collection, item);
      return {
        ok: true,
        code: 200,
        message: "Elemento modificato con successo",
      };
    } catch {
      return {
        ok: false,
        code: 500,
        message: "Errore nella modifica dell'elemento",
      };
    }
  }
};

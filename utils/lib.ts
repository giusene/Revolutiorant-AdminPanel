export const checkObjectStructure = <T>(obj: any, structure: T): obj is T => {
  const objKeys = Object.keys(obj);
  const structureKeys = Object.keys(structure as object);

  if (objKeys.length !== structureKeys.length) {
    return false;
  }

  for (const key of structureKeys) {
    if (!(key in obj) || typeof obj[key] !== typeof (structure as any)[key]) {
      return false;
    }
  }

  return true;
};

export const defaultErrorResponse = (method: string) => {
  return {
    ok: false,
    code: 404,
    message: `Il metodo ${method} non è implementato per questo endpoint`,
  };
};

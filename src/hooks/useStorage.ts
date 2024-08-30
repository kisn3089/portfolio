import { StorageKeyType } from "@/types/storageKey.type";
import { useState } from "react";

export const useStorage = (key: StorageKeyType) => {
  const storage = localStorage.getItem(key);

  const [isFirst, setIsFirst] = useState(Boolean(storage));

  const onSetStorage = (key: StorageKeyType) => {
    localStorage.setItem(key, "true");
    setIsFirst(true);
  };

  const onDeleteStorage = (key: StorageKeyType) => {
    localStorage.removeItem(key);
    setIsFirst(false);
  };

  return { isFirst, onSetStorage, onDeleteStorage };
};

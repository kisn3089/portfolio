import { StorageKeyType } from "@/types/storageKey.type";
import { useState } from "react";

export const useStorage = (key: StorageKeyType) => {
  const storage = localStorage.getItem("image");

  const [isFirst, setIsFirst] = useState(storage === key);

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

import AsyncStorage from "@react-native-async-storage/async-storage";
import { IBookSummary } from "../api/constants";

export const storeData = async (key: string, item: IBookSummary) => {
  try {
    const prevArrayParsed: [IBookSummary] | undefined = await getData(key);
    const alreadyExists = prevArrayParsed?.filter(
      (book) => book.book_id === item.book_id
    );
    if (alreadyExists && alreadyExists?.length > 0) {
      return "";
    } else {
      const newArray =
        prevArrayParsed!?.length > 0 ? [...prevArrayParsed!, item] : [item];
      await AsyncStorage.setItem(key, JSON.stringify(newArray));
    }
  } catch (err) {
    console.log(err);
  }
};

export const getData = async (
  key: string
): Promise<[IBookSummary] | undefined> => {
  try {
    const prevArray: string | null = await AsyncStorage.getItem(key);
    const prevArrayParsed: [IBookSummary] = JSON.parse(prevArray!);
    return prevArrayParsed;
  } catch (err) {
    console.log(err);
  }
};

export const resetData = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

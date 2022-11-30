import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { IBookDetails } from "../utils/api/constants";
import { getBookDetails } from "../utils/api/getters";

interface IHookDetailsValues {
  bookDetails: IBookDetails | undefined;
  err: string;
}
export const useBookDetails = (id: string) => {
  const [bookDetails, setBookDetails] = useState<IBookDetails>();
  const [err, setErr] = useState<string>("");
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const fetchedDetails = await getBookDetails(id);
        setBookDetails(fetchedDetails);
      } catch (err) {
        console.log(err);
        setErr("Too many API request. Enjoy this placeholder info");
      }
    };
    fetchBookDetails();
  }, []);

  return { bookDetails, err };
};

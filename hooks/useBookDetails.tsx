import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { IBookDetails } from "../utils/api/constants";
import { getBookDetails } from "../utils/api/getters";
import MockBookDetails from "../data/bookDetailsMockData.json";
interface IHookDetailsValues {
  bookDetails: IBookDetails | undefined;
  err: string;
}

export const useBookDetails = (id: string): IHookDetailsValues => {
  const [bookDetails, setBookDetails] = useState<IBookDetails>();
  const [err, setErr] = useState<string>("");
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const fetchedDetails = await getBookDetails(id);
        console.log(fetchedDetails);
        if (!fetchedDetails?.authors) throw new Error("Too many api requests");
        setBookDetails(fetchedDetails);
      } catch (err) {
        console.log(err);
        setErr("Too many API request. Enjoy this placeholder info");
        setBookDetails(MockBookDetails);
        setTimeout(() => setErr(""), 3000);
      }
    };
    fetchBookDetails();
  }, []);

  return { bookDetails, err };
};

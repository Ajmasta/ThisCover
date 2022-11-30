import { useEffect, useState } from "react";
import { IBookSummary } from "../utils/api/constants";
import { getPopularBooks } from "../utils/api/getters";
import BooksArray from "../data/booksMockData.json";

interface IHookSummariesValues {
  books: IBookSummary[] | undefined;
  err: string;
}
export const useBookSummaries = (genre: string): IHookSummariesValues => {
  const [books, setBooks] = useState<IBookSummary[]>();
  const [err, setErr] = useState<string>("");
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const fetchedBooks = await getPopularBooks(genre);
        setBooks(fetchedBooks?.slice(0, 30));
      } catch (err) {
        setBooks(BooksArray);
        console.log(err);
        setErr("Too Many API Requests. Enjoy our offline collection");
        setTimeout(() => setErr(""), 3000);
      }
    };
    fetchBooks();
  }, [genre]);
  return { books, err };
};

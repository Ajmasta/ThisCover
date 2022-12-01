import { useEffect, useState } from "react";
import { IBookSummary } from "../utils/api/constants";
import { getPopularBooks } from "../utils/api/getters";
import BooksArray from "../data/booksMockData.json";

interface IHookSummariesValues {
  books: IBookSummary[] | undefined;
  err: string;
  loading: boolean;
}
export const useBookSummaries = (genre: string): IHookSummariesValues => {
  const [books, setBooks] = useState<IBookSummary[]>();
  const [err, setErr] = useState<string>("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const fetchedBooks = await getPopularBooks(genre);
        setBooks(fetchedBooks?.slice(0, 25));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setBooks(BooksArray);
        setErr("Error: Too Many API Requests. This is our offline collection");
        setLoading(false);
        setTimeout(() => setErr(""), 3000);
      }
    };
    fetchBooks();
  }, [genre]);
  return { books, loading, err };
};

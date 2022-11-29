import { REACT_APP_API_KEY } from "@env";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  },
};

export interface IBookSummary {
  book_id: number;
  name: string;
  author: string;
  votes: number;
  cover: string;
  url: string;
}
export const BASE_URL = "test"; //"https://hapi-books.p.rapidapi.com/";

export const getPopularBooks = async (): Promise<IBookSummary[]> => {
  const books = await (await fetch(BASE_URL + "week/horror", options)).json();

  return books;
};

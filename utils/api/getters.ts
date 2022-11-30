import { BASE_URL, IBookDetails, IBookSummary } from "./constants";
// @ts-ignore: issue with dotenv module
import { REACT_APP_API_KEY } from "@env";
const options = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  },
};
export const getPopularBooks = async (
  genre: string
): Promise<IBookSummary[] | undefined> => {
  try {
    const books = await /* 
      @ts-ignore: issue with headers typing */
    (await fetch(BASE_URL + "week/" + genre, options)).json();

    return books;
  } catch (err) {
    console.log(err);
  }
};

export const getBookDetails = async (
  bookID: string
): Promise<IBookDetails | undefined> => {
  try {
    const bookDetails = await /* 
          @ts-ignore: issue with headers typing */
    (await fetch(BASE_URL + "book/" + bookID, options)).json();

    return bookDetails;
  } catch (err) {
    console.log(err);
  }
};

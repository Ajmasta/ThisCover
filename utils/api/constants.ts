export interface IBookSummary {
  book_id: number;
  name: string;
  author: string;
  votes: number;
  cover: string;
  url: string;
}
export interface IBookDetails {
  book_id: number;
  name: string;
  authors: [string];
  rating: number;
  cover: string;
  pages: number;
  published_date: string;
  url: string;
  synopsis: string;
}
export const BASE_URL = "https://hapi-books.p.rapidapi.com/";

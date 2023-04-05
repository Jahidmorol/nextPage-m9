import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "../Book/Book";
import LodingSpiner from "../LodingSpiner/LodingSpiner";

const Books = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LodingSpiner></LodingSpiner>;
  }
  const booksData = useLoaderData();
  const { books } = booksData;
  console.log(books);

  return (
    <div className="my-container grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
      {books.map((book) => (
        <Book key={book.isbn13} book={book}></Book>
      ))}
    </div>
  );
};

export default Books;

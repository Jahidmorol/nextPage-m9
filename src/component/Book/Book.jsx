import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`../book/${book.isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl ">
        <div>
          <img
            src={book.image}
            alt="img"
            className="object-cover w-full h-56 md:h-64 xl:h-80"
          />
        </div>
        <div className="absolute p-5 inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 text-gray-300 text-center rounded-md flex flex-col">
          <p>{book.title}</p>
          <br />
          <p>{book.subtitle}</p>
          <br />
          <p className="mt-auto">{book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;

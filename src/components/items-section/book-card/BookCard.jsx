import React from 'react'

const BookCard = ({book}) => {
  return (
    <div className="card shadow cursor-pointer group h-full">
      <div className="img overflow-hidden h-40">
        <img
          className="w-full rounded group-hover:scale-110 transition-all"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
      </div>
      <div className="info px-1 py-3">
        <h3 className="text-lg font-medium text-purple-600 mb-1">
          {book.volumeInfo.title}
        </h3>
        <p>
          {/* If Description Length is More than 100 characters than using Slice */}
          {book.volumeInfo.description.length > 100
            ? book.volumeInfo.description.slice(0, 100) + "..."
            : book.volumeInfo.description}
        </p>

        <p>
          <span className="font-semibold pt-3">
            {book.volumeInfo.authors && "Authors:"}
          </span>{" "}
          {Array.isArray(book.volumeInfo.authors) &&
            book.volumeInfo.authors.join(", ")}
          {/* There are Multiple Author in Array that's why join method is used to convert into String */}
        </p>
      </div>
    </div>
  );
}

export default BookCard
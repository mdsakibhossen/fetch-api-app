import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../loading/Loading";

const BookDetails = () => {
  const { id } = useParams();

  const url = `https://api.freeapi.app/api/v1/public/books/${id}`;
  const { data: book, isLoading, errorMsg } = useFetch(url, {});

  //   console.log(book);
  if (isLoading) {
    return <Loading />;
  }
  if (errorMsg) {
    //    console.log(errorMsg);
    return <h1>errorMsg</h1>;
  }
  return (
    <section>
      <div className="container mx-auto px-3 py-10">
        <div className="img mb-10 flex justify-center md:justify-start">
          <img
            className="min-w-40  min-h-48"
            src={book.data?.volumeInfo.imageLinks.thumbnail}
            alt={book.data?.volumeInfo.title}
          />
        </div>
        <div className="info">
          <h2 className="text-2xl mb-3 font-semibold">
            {book.data?.volumeInfo.title.toUpperCase()}
          </h2>
          
          <h4 className="text-slate-400 italic mb-5">
            {" "}
            - {book.data?.volumeInfo.authors.join(", ")}
          </h4>
          <p className="text-justify">{book.data?.volumeInfo.description}</p>
          <div className="flex justify-end mt-5 font-medium">
            <address className="flex flex-col items-end text-slate-600">
              Published By {book.data?.volumeInfo.publisher} <br />{" "}
              <span className="text-slate-400 text-end">
                {book.data?.volumeInfo.publishedDate}
              </span>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;

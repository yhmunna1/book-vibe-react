import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBookList, saveWishList } from "../Utility/localStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);

  //   console.log(id);
  //   console.log(book);

  const {
    bookName,
    author,
    image,
    rating,
    tags,
    category,
    review,
    bookTotalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleReadBook = () => {
    saveBookList(idInt);
    toast("Added in Read Book List");
  };
  const handleWishList = () => {
    saveWishList(idInt);
    toast("Added in Wishlist");
  };

  return (
    <div className="max-w-7xl mx-auto my-24">
      <div className="card lg:card-side bg-base-100 border-2">
        <figure className="w-1/3 bg-base-200">
          <img src={image} alt="Album" className="m-20" />
        </figure>
        <div className="card-body w-2/3">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <h3 className="text-md font-semibold">By: {author}</h3>
          <div className="my-2">
            <hr />
          </div>
          <p className="font-semibold">{category}</p>
          <div className="my-2">
            <hr />
          </div>
          <p>
            <span className="font-bold">Review:</span> {review}
          </p>
          <p>
            <span className="font-bold pe-3">Tags:</span>
            <div className="badge badge-outline bg-blue-500 text-white py-3">
              {tags[0]}
            </div>
            <div className="badge badge-outline bg-[#9774FF] text-white py-3">
              {tags[1]}
            </div>
          </p>
          <div className="my-2">
            <hr />
          </div>
          <div className=" space-y-3">
            <p>
              <span className="font-bold">Number of Pages:</span>{" "}
              {bookTotalPages}
            </p>
            <p>
              <span className="font-bold">Publisher:</span> {publisher}
            </p>
            <p>
              <span className="font-bold">Year of Publishing:</span>{" "}
              {yearOfPublishing}
            </p>
            <p>
              <span className="font-bold">Rating:</span> {rating}
            </p>
          </div>
          <div className="card-actions">
            <div>
              <button
                onClick={handleReadBook}
                className="btn bg-blue-500 text-white"
              >
                Read
              </button>
              <ToastContainer />
            </div>
            <div>
              <button
                onClick={handleWishList}
                className="btn bg-[#9774FF] text-white"
              >
                Wishlist
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

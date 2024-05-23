import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, tags, category } = book;

  return (
    <div>
      <Link to={`/book/${bookId}`}>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="mx-10 mt-10 rounded-xl bg-base-200">
            <img src={image} alt="Shoes" className="py-6" />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-start">
              <div className="badge badge-outline bg-blue-500 text-white py-3">
                {tags[0]}
              </div>
              <div className="badge badge-outline bg-[#9774FF] text-white py-3">
                {tags[1]}
              </div>
            </div>
            <h2 className="text-2xl font-bold">{bookName}</h2>
            <h3 className="text-md font-semibold">By: {author}</h3>
            <div className="my-2">
              <hr />
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">{category}</p>
              <div className="flex items-center gap-2">
                {rating} <FaRegStar />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;

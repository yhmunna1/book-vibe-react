import PropTypes from "prop-types";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";

const ListedBook = ({ book }) => {
  const {
    bookName,
    author,
    image,
    rating,
    tags,
    category,
    bookTotalPages,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div>
      <div className="card card-side border-2 my-8">
        <figure>
          <img
            src={image}
            alt="Company"
            className="px-20 py-10 w-[300px] bg-base-200"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <h3 className="text-md font-semibold">By: {author}</h3>
          <p className="flex items-center gap-3">
            <span className="font-bold">Tags:</span>
            <div className="badge badge-outline bg-blue-500 text-white py-3">
              {tags[0]}
            </div>
            <div className="badge badge-outline bg-[#9774FF] text-white py-3">
              {tags[1]}
            </div>
            <div className="flex items-center gap-3">
              <FaCalendarAlt />
              <p className="font-medium">
                Year of Publishing: {yearOfPublishing}
              </p>
            </div>
          </p>
          <p className="flex items-center space-x-2">
            <span>
              <FaUserAlt />
            </span>
            <span>Publisher: {publisher}</span>
            <span>
              <IoNewspaper />
            </span>
            <span>Page: {bookTotalPages}</span>
          </p>
          <div className="py-3">
            <hr />
          </div>
          <div className="flex gap-5 w-[500px] text-center">
            <p className="bg-blue-400 p-2 rounded-full font-semibold text-white">
              Category: {category}
            </p>
            <p className="bg-green-400 p-2 rounded-full font-semibold text-white">
              Rating: {rating}
            </p>
            <p className="bg-purple-400 p-2 rounded-full font-semibold text-white">
              View Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ListedBook.propTypes = {
  book: PropTypes.object.isRequired,
};

export default ListedBook;

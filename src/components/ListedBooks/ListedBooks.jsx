import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookList, getStoredWishList } from "../Utility/localStorage";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
  const [wishLists, setWishLists] = useState([]);
  const [readList, setReadList] = useState([]);
  const [activeTab, setActiveTab] = useState("wishList");

  const listedBooks = useLoaderData();

  //   Wish List
  useEffect(() => {
    const storedListBookIds = getStoredWishList();
    if (listedBooks.length > 0) {
      const wishList = [];
      for (const id of storedListBookIds) {
        const listedBook = listedBooks.find(
          (listedBook) => listedBook.bookId === id
        );
        if (listedBook) {
          wishList.push(listedBook);
        }
      }
      setWishLists(wishList);
    }
  }, [listedBooks]);

  //   Read List
  useEffect(() => {
    const storedReadBookIds = getStoredBookList();
    if (listedBooks.length > 0) {
      const readList = [];
      for (const id of storedReadBookIds) {
        const listedBook = listedBooks.find(
          (listedBook) => listedBook.bookId === id
        );
        if (listedBook) {
          readList.push(listedBook);
        }
      }
      setReadList(readList);
    }
  }, [listedBooks]);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-6xl font-bold text-center mb-10">Listed Books</h1>
      <div className="tabs tabs-lifted">
        <a
          className={`tab tab-bordered font-bold text-xl ${
            activeTab === "wishList" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("wishList")}
        >
          Wish List
        </a>
        <a
          className={`tab tab-bordered font-bold text-xl ${
            activeTab === "readList" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("readList")}
        >
          Read List
        </a>
      </div>

      <div className="mt-4">
        {activeTab === "wishList" && (
          <div>
            <h2 className="text-2xl text-center font-semibold mb-4">
              Wish List
            </h2>
            <ul>
              {wishLists.map((book) => (
                <ListedBook key={book.bookId} book={book}></ListedBook>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "readList" && (
          <div>
            <h2 className="text-2xl text-center font-semibold mb-4">
              Read List
            </h2>
            <ul>
              {readList.map((book) => (
                <ListedBook key={book.bookId} book={book}></ListedBook>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedBooks;

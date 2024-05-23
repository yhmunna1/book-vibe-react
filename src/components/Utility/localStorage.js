const getStoredWishList = () => {
  const storedWishList = localStorage.getItem("wish-list");
  if (storedWishList) {
    return JSON.parse(storedWishList);
  }
  return [];
};

const saveWishList = (id) => {
  const storedWishLists = getStoredWishList();
  const exists = storedWishLists.find((bookId) => bookId === id);
  if (!exists) {
    storedWishLists.push(id);
    localStorage.setItem("wish-list", JSON.stringify(storedWishLists));
  }
};

const getStoredBookList = () => {
  const storedBookList = localStorage.getItem("book-list");
  if (storedBookList) {
    return JSON.parse(storedBookList);
  }
  return [];
};

const saveBookList = (id) => {
  const storedBookLists = getStoredBookList();
  const exists = storedBookLists.find((bookId) => bookId === id);
  if (!exists) {
    storedBookLists.push(id);
    localStorage.setItem("book-list", JSON.stringify(storedBookLists));
  }
};

export { saveWishList, getStoredWishList, saveBookList, getStoredBookList };

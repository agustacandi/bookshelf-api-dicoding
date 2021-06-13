const {
  getIndex,
  addBook,
  showAllBooks,
  getBookById,
  editBookById,
  deleteBookById,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: getIndex,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookById,
  },
];

module.exports = routes;
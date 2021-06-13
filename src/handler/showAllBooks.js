const books = require('../books');

const showAllBooks = (request, h) => {
  const { name, reading, finished } = request.query;

  if (name !== undefined) {
    const book = books.filter((b) => new RegExp(name, 'i').test(b.name));

    if (book.length > 0) {
      const response = h.response({
        status: 'success',
        data: {
          books: book.map((b) => ({
            id: b.id,
            name: b.name,
            publisher: b.publisher,
          })),
        },
      });
      response.code(200);
      return response;
    }

    const response = h.response({
      status: 'fail',
      message: `Hasil pencarian berdasarkan nama ${books} tidak ditemukan`,
    });
    response.code(404);
    return response;
  }

  if (reading !== undefined) {
    const book = books.filter((b) => b.reading === Boolean(Number(reading)));

    if (book.length > 0) {
      const response = h.response({
        status: 'success',
        data: {
          books: book.map((b) => ({
            id: b.id,
            name: b.name,
            publisher: b.publisher,
          })),
        },
      });
      response.code(200);
      return response;
    }
    const response = h.response({
      status: 'fail',
      message: 'Hasil pencarian berdasarkan reading query params tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  if (finished !== undefined) {
    const book = books.filter((b) => b.finished === Boolean(Number(finished)));

    if (book.length > 0) {
      const response = h.response({
        status: 'success',
        data: {
          books: book.map((b) => ({
            id: b.id,
            name: b.name,
            publisher: b.publisher,
          })),
        },
      });
      response.code(200);
      return response;
    }
    const response = h.response({
      status: 'fail',
      message: 'Hasil pencarian berdasarkan finished query params tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  if (books.length > 0) {
    const response = h.response({
      status: 'success',
      data: {
        books: books.map((myBook) => ({
          id: myBook.id,
          name: myBook.name,
          publisher: myBook.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'success',
    data: {
      books: [],
    },
  });
  response.code(200);
  return response;
};

module.exports = showAllBooks;
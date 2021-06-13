const getIndex = (request, h) => {
  const response = h.response({
    status: 'success',
    message: 'Bookself API Dicoding Submission',
    data: {
      name: 'Candi Agusta Islami Ano',
      dateOfBirth: 'July 13th, 2002',
      place: 'Bondowoso',
      status: 'Student',
      school: 'SMKN 1 Bondowoso',
    },
  });

  response.code(200);
  return response;
};

module.exports = getIndex;
const Pagination = (data) => {
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < data.length) {
      results.next = {
        limit: limit,
        page: page + 1,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        limit: limit,
        page: page - 1,
      };
    }

    results.result = data.slice(startIndex, endIndex);

    res.paginatedResults = results;
    next();
  };
};

module.exports = Pagination;

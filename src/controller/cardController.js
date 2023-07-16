exports.getAllColumn = (req, res, next) => {
  Detail.findAll({})
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};

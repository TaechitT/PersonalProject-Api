const { Comment } = require("../models");

exports.createComment = (req, res, next) => {
  const { userId, message, columnId } = req.body;
  Comment.create({
    userId: userId,
    message: message,
    columnId: columnId,
  })
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};

exports.getCommentById = (req, res, next) => {
  const { id } = req.params;
  Comment.findOne({
    attributes: ["message"],
    where: { id: id },
  })
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};

exports.deleteComment = (req, res, next) => {
  const { id } = req.params;
  Comment.destroy({
    where: { id: id },
  })
    .then((rs) => {
      if (rs === 0) {
        throw new Error("Can not delete!!");
      }
      res.status(200).json(rs);
    })
    .catch(next);
};

exports.updateComment = (req, res, next) => {
  const { id } = req.params;
  const { userId, title, image } = req.body;
  Comment.update(
    { ...req.body, userId: req.user.id },
    {
      where: { id: id },
    }
  )
    .then((rs) => {
      res.status(200).json(rs);
    })
    .catch(next);
};

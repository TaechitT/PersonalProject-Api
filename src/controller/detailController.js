// const { Detail } = require("../models");

// exports.createDetail = (req, res, next) => {
//   const { userId, title, image, step } = req.body;
//   Detail.create({
//     userId: userId,
//     title: title,
//     image: image,
//     step: step,
//   })
//     .then((rs) => {
//       res.json(rs);
//     })
//     .catch(next);
// };

// exports.getDetailById = (req, res, next) => {
//   const { id } = req.params;
//   Detail.findOne({
//     attributes: ["title"],
//     where: { id: id },
//   })
//     .then((rs) => {
//       res.json(rs);
//     })
//     .catch(next);
// };

// exports.deleteDetailById = (req, res, next) => {
//   const { id } = req.params;
//   Detail.destroy({
//     where: { id: id },
//   })
//     .then((rs) => {
//       if (rs === 0) {
//         throw new Error("Can not delete!!");
//       }
//       res.status(200).json(rs);
//     })
//     .catch(next);
// };

// exports.updateDetail = (req, res, next) => {
//   const { id } = req.params;
//   const { title, image, step } = req.body;
//   Detail.update(
//     { ...req.body, userId: req.user.id },
//     {
//       where: { id: id },
//     }
//   )
//     .then((rs) => {
//       res.status(200).json(rs);
//     })
//     .catch(next);
// };

const { Column } = require("../models");
const cloudinary = require("../config/cloudinary");

exports.getAllColumn = (req, res, next) => {
  Column.findAll({})
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};

exports.createColumn = async (req, res, next) => {
  try {
    const { userId, title, step1, step2, step3 } = req.body;
    let image = [];
    for (let file of req.files) {
      const result = await cloudinary.uploader.upload(file.path);
      image.push(result.secure_url);
      console.log(result, "");
    }
    const rs = await Column.create({
      userId: userId,
      title: title,
      coverImage: image[0],
      step1: step1,
      step2: step2,
      step3: step3,
      image1: image[1],
      image2: image[2],
      image3: image[3],
    });
    res.json(rs);
    // .then((rs) => {
    //   res.json(rs);
    // })
    // .catch((err) => {
    //   console.log(err);
    //   next(err);
    // });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getColumnById = (req, res, next) => {
  const { id } = req.params;
  console.log("first");
  Column.findOne({
    // attributes: ["title"],
    where: { id: id },
  })
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};

exports.deleteColumn = (req, res, next) => {
  const { id } = req.params;
  Column.destroy({
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

exports.updateColumn = async (req, res, next) => {
  const { id } = req.params;
  // const { userId, title, step1, step2, step3 } = req.body;

  let image = [];
  for (let file of req.files) {
    const result = await cloudinary.uploader.upload(file.path);
    image.push(result.secure_url);
    console.log(result, "");
  }
  Column.update(
    {
      userId: req.body.userId,
      title: req.body.title,
      coverImage: image[0],
      step1: req.body.step1,
      step2: req.body.step2,
      step3: req.body.step3,
      image1: image[1],
      image2: image[2],
      image3: image[3],
    },
    {
      where: { id: id },
    }
  )
    .then((rs) => {
      res.status(200).json(rs);
    })
    .catch(next);
};

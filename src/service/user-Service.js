const userRepository = require("../repositories/user-repository");

exports.getUserByEmail = async (email) => {
  const user = await userRepository.getUserByEmail(email);
  return user;
};

exports.createUser = (user) => userRepository.createUser(user);

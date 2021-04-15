const { default: axios } = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => {
    return null;
  },
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Aniket" };
    user["lastName"] = "Biswas";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return "error";
      }),
};

module.exports = functions;

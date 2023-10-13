const jwt = require("jsonwebtoken");
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";

const auth = (token, roles) => {
  jwt.verify(token, jwtSecrectKey, (err, decoded) => {
    console.log(roles,'roles');
    if (err || !roles.find((ele) => ele === decoded.role)) {
      throw Error("You dont have permission");
    }
  });
};

module.exports = {
  auth,
};

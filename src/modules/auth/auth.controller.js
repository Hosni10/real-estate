import adminModel from "../../../models/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    let user = await adminModel.findOne({ email });
    if (user) {
      let match = bcrypt.compareSync(password, user.password);
      if (match) {
        let token = jwt.sign(
          { id: user._id, roleId: user.roleId },
          "MyNameIsOsha"
        );
        res.json({ message: "Success", user, token });
      } else {
        res.status(401).json({ message: "Incorrect Password" });
      }
    } else {
      res.status(401).json({ message: "Wrong Credentials" });
    }
  } catch (err) {
    next(err);
  }
};

export { signin };

import adminModel from "../../../models/admin.model.js";
import bcrypt from "bcrypt";

let addAdmin = async (req, res, next) => {
  try {
    const { name, password, email, roleId } = req.body;
    const hash = bcrypt.hashSync(password, 8);
    await adminModel.insertMany({ name, password: hash, email, roleId });
    res.json({ message: "Admin created successfully" });
  } catch (err) {
    next(err);
  }
};

let getSingleAdmin = async (req, res, next) => {
  try {
    const { Id } = req.params;
    if (!Id) {
      res.json({ message: "Admin not found" });
    } else {
      let admin = await adminModel.findById(Id);
      res.json({ message: "Success", admin });
    }
  } catch (err) {
    next(err);
  }
};

let deleteAdmin = async (req, res, next) => {
  try {
    const { Id } = req.params;
    if (!Id) {
      res.json({ message: "Admin not found" });
    } else {
      await adminModel.findByIdAndDelete(Id);
      res.json({ message: "Admin Deleted Successfully" });
    }
  } catch (err) {
    next(err);
  }
};

let getAllAdmins = async (req, res, next) => {
  try {
    let admins = await adminModel.find({});
    res.json({ message: "Success", admins });
  } catch (err) {
    next(err);
  }
};

let updateAdmin = async (req, res, next) => {
  try {
    const { Id } = req.params;
    const { name, email, password } = req.body;
    if (!Id) {
      res.json({ message: "Admin not found" });
    } else {
      const hash = bcrypt.hashSync(password, 8);
      await adminModel.findByIdAndUpdate(Id, { name, email, password: hash });
      res.json({ message: "Success" });
    }
  } catch (err) {
    next(err);
  }
};

export { addAdmin, deleteAdmin, getAllAdmins, updateAdmin, getSingleAdmin };

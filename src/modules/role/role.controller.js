import roleModel from "../../../models/role.model.js";

let addRole = async (req, res) => {
  const { name } = req.body;
  await roleModel.insertMany({ name });
  res.json({ message: "Success" });
};

let deleteRole = async (req, res) => {
  const { Id } = req.body;
  if (!Id) {
    res.json({ message: "Role not found" });
  } else {
    await roleModel.findByIdAndDelete(Id);
    res.json({ message: "Role Deleted Successfully" });
  }
};

let getAllRoles = async (req, res) => {
  let roles = await roleModel.find({});
  res.json({ message: "Success", roles });
};

let updateRole = async (req, res) => {
  const { Id } = req.params;
  const { name } = req.body;

  if (!Id) {
    res.json({ message: "role not found" });
  } else {
    await roleModel.findByIdAndUpdate(Id, { name });
    res.json({ message: "Success" });
  }
};

export { addRole, deleteRole, getAllRoles, updateRole };

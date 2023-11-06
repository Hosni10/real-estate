import unitModel from "../../../models/units.model.js";

let addUnit = async (req, res, next) => {
  try {
    const { type, area, price, description } = req.body;
    await unitModel.create({ type, area, price, description });
    res.json({ message: "Unit added successfully" });
  } catch (err) {
    next(err);
  }
};

let deleteUnit = async (req, res, next) => {
  try {
    const { id } = req.params;
    await unitModel.findByIdAndDelete(id);
    res.json({ message: "Unit Deleted Successfully" });
  } catch (err) {
    next(err);
  }
};

let updateUnit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { type, area, price, description } = req.body;
    let unit = await unitModel.findById(id);
    if (unit) {
      await unitModel.updateOne(
        { _id: id },
        { type, area, price, description }
      );
      res.json({ message: "Unit updated successfully" });
    } else {
      res.json({ message: "Unit not found" });
    }
  } catch (err) {
    next(err);
  }
};

let getAllUnits = async (req, res, next) => {
  try {
    let units = await unitModel.find({});
    res.json({ message: "Success", units });
  } catch (err) {
    next(err);
  }
};

let getUnit = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      let unit = await unitModel.findById(id);
      if (unit) {
        res.json({ message: "Success", unit });
      } else {
        res.json({ message: "Unit not found" });
      }
    } else {
      res.json({ message: "Unit not found" });
    }
  } catch (err) {
    next(err);
  }
};

export { getAllUnits, getUnit, addUnit, updateUnit, deleteUnit };

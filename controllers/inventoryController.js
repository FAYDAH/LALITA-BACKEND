const Inventory = require('../models/inventoryModel');

exports.addInventory = async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();
    res.status(201).send(inventory);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find().populate('customer').populate('product');
    res.send(inventory);
  } catch (error) {
    res.status(500).send(error);
  }
};

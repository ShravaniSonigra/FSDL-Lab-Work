const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// Add to cart
router.post("/", async (req, res) => {
  const item = new Cart(req.body);
  await item.save();
  res.json(item);
});

// Get cart items
router.get("/", async (req, res) => {
  const items = await Cart.find();
  res.json(items);
});

// Delete item
router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed" });
});

module.exports = router;
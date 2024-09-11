/*const express = require("express");
const router = express.Router();
const Express = require("../models/Expense");
const Expense = require("../models/Expense");

//ADD Expense

router.post("/", async (req, res) => {
  console.log(req.body)
  try {
    const newExpense = await Expense(req.body);
    const expense = await newExpense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL Expenses

router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE Expense

router.put("/:id", async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE Expense

router.delete("/:id", async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(201).json("Deleted Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
*/
const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");
const Express = require("../models/Expense");

// ADD Expense
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newExpense = new Expense(req.body);
    const expense = await newExpense.save(); // Await the save method
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL Expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 }); // Await the find method
    res.status(200).json(expenses); // No need for the additional object wrapper
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE Expense
router.put("/:id", async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(expense); // Use status 200 for successful updates
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE Expense
router.delete("/:id", async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted Successfully"); // Use status 200 for successful deletions
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

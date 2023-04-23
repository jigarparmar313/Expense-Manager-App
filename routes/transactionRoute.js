const express = require("express");
const { addTransaction, getAllTransaction, editTransaction , deleteTransaction } = require("../controller/transactionCtrl");

// router object
const router = express.Router();


// routes
// add transaction POST METHOD 
router.post('/add-transaction', addTransaction)

// Edit transaction POST METHOD 
router.post('/edit-transaction', editTransaction)

// Delete transaction POST METHOD 
router.post('/delete-transaction', deleteTransaction)


// get transaction 
router.post('/get-transaction', getAllTransaction)


module.exports = router;

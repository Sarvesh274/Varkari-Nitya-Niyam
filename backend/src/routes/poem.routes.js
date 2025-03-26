const express = require("express");
const { getAllPoems, addPoem } = require("../controllers/poem.controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/poems", getAllPoems);
router.post("/poems", authMiddleware, addPoem);

module.exports = router;

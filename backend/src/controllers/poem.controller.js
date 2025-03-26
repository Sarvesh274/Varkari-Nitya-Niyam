const Poem = require("../models/poem.model");

exports.getAllPoems = async (req, res) => {
  try {
    const poems = await Poem.findAll();
    res.json(poems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPoem = async (req, res) => {
  try {
    const { title, content, chapter } = req.body;
    const newPoem = await Poem.create({ title, content, chapter });
    res.status(201).json(newPoem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

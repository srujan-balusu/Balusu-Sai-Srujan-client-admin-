const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
  try {
    console.log(3)
    const { name, email, password, phone, role } = req.body;
    console.log(`${role}`)
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, phone, role });
    await user.save();

    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: '3d' });
    res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  console.log("Login attempt...");
  comsole.log(process.env.JWT_SECRET)
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log("Generating token...");
    const token = jwt.sign({ id: user._id, role: user.role },process.env.JWT_SECRET, { expiresIn: '3d' });
    res.json({ token, role: user.role });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
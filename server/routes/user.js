// const router = require('express').Router();
// const User = require('../models/User');
// const { auth } = require('../middleware/auth');
// const bcrypt = require('bcryptjs');

// router.get('/me', auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.put('/', auth, async (req, res) => {
//   try {
//     const { name, email, phone, password } = req.body;
//     const updates = { name, email, phone };
    
//     if (password) {
//       updates.password = await bcrypt.hash(password, 10);
//     }

//     const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;
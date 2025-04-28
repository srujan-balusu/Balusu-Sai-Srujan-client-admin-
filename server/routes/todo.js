// const router = require('express').Router();
// const Todo = require('../models/Todo');
// const { auth } = require('../middleware/auth');

// router.post('/', auth, async (req, res) => {
//   try {
//     const todo = new Todo({ ...req.body, userId: req.user.id });
//     await todo.save();
//     res.status(201).json(todo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.get('/', auth, async (req, res) => {
//   try {
//     const todos = await Todo.find({ userId: req.user.id });
//     res.json(todos);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.get('/admin', auth, async (req, res) => {
//   try {
//     const todos = await Todo.find()
    
//     const count = await Todo.countDocuments();
//     res.json({ todos, totalPages: Math.ceil(count / limit), currentPage: page });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;
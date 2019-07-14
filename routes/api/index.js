
const router = require('express').Router();
const bookRoutes = require('./books');

router.use('/books', bookRoutes);

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

module.exports = router;
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Thought route working!');
});

module.exports = router;

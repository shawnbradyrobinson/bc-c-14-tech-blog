const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("hi from api/blog");
});

module.exports = router; 
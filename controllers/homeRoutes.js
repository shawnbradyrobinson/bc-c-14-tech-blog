const router = require('express').Router();
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    res.send("hi");
})

module.exports = router; 
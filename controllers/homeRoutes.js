const router = require('express').Router();
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    res.render("blogs_list");
})

module.exports = router; 
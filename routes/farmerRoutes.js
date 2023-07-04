const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Vendor = require('')

const farmerList = (req, res) => {
res.send("FarmerList accessed");
}

router.get('/FarmerList', farmerList);


module.exports = router;
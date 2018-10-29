const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'fruits were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'fruits were created'
    });
});

router.get('/:fruitId', (req, res, next) => {
    res.status(200).json({
        message: 'fruit details',
        orderId: req.params.fruitId
    });
});

router.delete('/:fruitId', (req, res, next) => {
    res.status(200).json({
        message: 'fruit deleted',
        orderId: req.params.fruitId
    });
});


module.exports = router;
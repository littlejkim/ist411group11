const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'vegetables were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'vegetables were created'
    });
});

router.get('/:vegetableId', (req, res, next) => {
    res.status(200).json({
        message: 'vegetable details',
        orderId: req.params.vegetableId
    });
});

router.delete('/:vegetableId', (req, res, next) => {
    res.status(200).json({
        message: 'vegetable deleted',
        orderId: req.params.vegetableId
    });
});


module.exports = router;
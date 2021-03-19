import express from'express';

const router = express.Router();

router.get('/product', (req, res) => {
    
    res.json({
        message: "successfully"
    })
});

module.exports = router;
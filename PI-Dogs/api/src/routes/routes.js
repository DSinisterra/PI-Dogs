const {Router} = require('express');
const {dogsBddConTemp, getById} = requiere("../controllers/controllers");

router.get('/', (req, res) => {
    const { name } = req.query;

    try {
    } catch (error) {
        return res.status(400).send(error)
    }
});
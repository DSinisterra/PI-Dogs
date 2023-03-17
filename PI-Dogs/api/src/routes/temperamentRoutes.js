const {Router} = require('express');
const {getTemperament} = require("../controllers/controllers");
const {Temperament} = require("../db.js")

const router = Router();

/////////////// Ruta para traer temperamentos //////////////////

router.get('/', async (req, res) => {

    try {
        await getTemperament();
        const byTemperament = await Temperament.findAll();
        res.status(200).send(byTemperament)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})



module.exports = router;
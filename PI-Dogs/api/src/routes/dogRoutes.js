const {Router} = require('express');
const {getAllDogs, getByName, getById, createDog, getTemperament, getDogsFromApi} = require("../controllers/controllers");

//////////////// Ruta para traer todos los perros o por nombre/////////////////////////////////////////////

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;
    
    try {
        // getTemperament();
        if (name) {
            const byName = await getByName(name);
            res.status(200).send(byName)
        } else {
            const allDogs = await getAllDogs();
            res.status(200).send(allDogs)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});


////////////////// Ruta para traer perros por ID ////////////////////////////////////////


router.get('/:id', async (req, res) => {
    const id = req.params;

    try {
        const byId = await getById(id);
        res.status(200).send(byId)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


////////////////// Ruta para postear un perro //////////////

router.post('/dogs', async (req, res) => {
    const {name, minWeight, maxWeight, minHeight, maxHeight, minLifeSpan, maxLifeSpan, image, temperament} = req.body;

    try {
        const newDog = await createDog(name, minWeight, maxWeight, minHeight, maxHeight, minLifeSpan, maxLifeSpan, image, temperament);

        res.status(200).send(newDog)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


/////////////// Ruta para traer temperamentos //////////////////

router.get('/temperaments', (req, res) => {
    const {temperament} = req.query;
    try {
        const byTemperament = getTemperament(temperament);
        res.status(200).send(byTemperament)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


module.exports = router;
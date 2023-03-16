const {Router} = require('express');
const {dogsBddConTemp, getById} = requiere("../controllers/controllers");

//////////////// Ruta para traer todos los perros o por nombre/////////////////////////////////////////////

router.get('/', async (req, res) => {
    const { name } = req.query;
    
    try {
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


router.get('/:id', (req, res) => {
    try {
        const id = req.params;
        
    } catch (error) {
        
    }
})

const axios = require("axios");
const { Dog, Temperament } = require("../db.js");

/////////////////// Traer todos los perros de la Api a la BDD /////////////////////////////////////////////////////////

const getDogsFromApi = async () => {
    try {
        let api = await axios.get('https://api.thedogapi.com/v1/breeds');
        api = api.data?.map((dog) => {
            return {
                id: dog.id,
                name: dog.name,
                minWeight: parseInt(dog.minWeight.metric.split("-")[0].trim()),
                maxWeight: parseInt(dog.maxWeight.metric.split("-")[1].trim()),
                minHeight: parseInt(dog.minHeight.metric.split("-")[0].trim()),
                maxHeight: parseInt(dog.maxHeight.metric.split("-")[1].trim()),
                minLifeSpan: parseInt(dog.minLifeSpan.split("-")[0].trim()),
                maxLifeSpan: parseInt(dog.maxLifeSpan.split("-")[1].trim()),
                image: dog.image.url,
                temperament: dog.temperament
            }
        });
        const bdd = await Dog.findAll();
        if (!bdd) {
            await Dog.findOrCreate(api)
        }
        return bdd
    } catch (error) {
        throw new Error("Not information found")
    }
}


/////// Traer todos los perros de la BDD con temperamentos ///////////////////////////////////////////////////////


const getAllDogs = async () => {
    try {

        const dogsBdd = await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        })
    
        const dogsBddConTemp = dogsBdd.map((dog) => {
            return {
                id: dog.id,
                name: dog.name,
                minWeight: dog.minWeight,
                maxWeight: dog.maxWeight,
                minHeight: dog.minHeight,
                maxHeight: dog.maxHeight,
                minLifeSpan: dog.minLifeSpan,
                maxLifeSpan: dog.maxLifeSpan,
                image: dog.image,
                temperament: dog.temperament.map(temp => { return temp.name}).join(', ')
            }
        })
        return dogsBddConTemp;
    } catch (error) {
        throw new Error("Not information found")
    }
}


///////////////// Traer perros por ID ///////////////////////////////////////////////////////


const getById = async (id) => {
    try {
        const allDogs = await getAllDogs();
        const filtroId = allDogs.filter((dog) => dog.id == id);

        if(filtroId.length > 0){
            return filtroId[0]
        } 
    } catch (error) {
        throw new Error(`Dog with ID ${id} not found`)
    }

}



///////////////// Traer perros por nombre ///////////////////////////////////////////////////////


const getByName = async(name) => {
    try {
        const allDogs = await getAllDogs();
        const filtroName = allDogs.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()));
        
        if(filtroName.length > 0){
            return filtroName
        } 
    } catch (error) {
        throw new Error(`Dog with name ${name} not found`)
    }
}


///////////////// Posteo de perros  ///////////////////////////////////////////////////////





module.exports = {
    dogsBddConTemp,
    getById,

}

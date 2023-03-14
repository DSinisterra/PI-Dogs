const axios = require("axios");
const { Dog, Temperament } = require("../db.js");

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
        
        let bdd = await Dog.findAll();
        if (!bdd) {
            await Dog.findOrCreate(api)
        }

        let dogsBdd = await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        })

        let dogsBddConTemp = dogsBdd.map((dog) => {
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
        return temp;
    } catch (error) {
        throw new Error("No se encontró la info")
    }
}


const getById = async (id) => {
    try {
        return Dog.findByPk(id)
    } catch (error) {
        console.error(error.messsage)
    }
}

const getByName = async(name) => {
    try {
        return Dog.findOne({where: {  name: {[Op.like]: '%name%'}}})
    } catch (error) {
        
    }
}

const createDog = async (name, minWeight, maxWeight, minHeight, maxHeight, minLifeSpan, maxLifeSpan, image) => {
    
    const newDog = await Dog.create({name, minWeight, maxWeight, minHeight, maxHeight, minLifeSpan, maxLifeSpan, image});

    return newDog
}

module.exports = {
    dogsBddConTemp,
    getById,

}
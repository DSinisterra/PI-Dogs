const axios = require("axios");
const { Dog, Temperament } = require("../db.js");
require("dotenv").config();
const {API_KEY} = process.env;

/////////////////// Traer todos los perros de la Api a la BDD /////////////////////////////////////////////////////////

const getDogsFromApi = async () => {
    try {
        const api = await axios.get('https://api.thedogapi.com/v1/breeds/');
        let apiData = api.data.map((dog) => {
            return {
                id: dog.id,
                name: dog.name,
                minWeight: parseInt(dog.weight.metric.split("-")[0]),
                maxWeight: parseInt(dog.weight.metric.split("-")[1]),
                minHeight: parseInt(dog.height.metric.split("-")[0]),
                maxHeight: parseInt(dog.height.metric.split("-")[1]),
                minLifeSpan: parseInt(dog.life_span.split("-")[0]),
                maxLifeSpan: dog.life_span.split("-")[1],
                image: dog.image.url,
                temperament: dog.temperament
            }
        });
        return apiData;
    } catch (error) {
        console.log(error)
    }
}


/////// Traer todos los perros de la BDD con temperamentos ///////////////////////////////////////////////////////


const getAllDogs = async () => {
    try {
        const fromApi = await getDogsFromApi();
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
        return [...fromApi, ...dogsBddConTemp];
    } catch (error) {
        throw new Error("Not information found")
    }
}


///////////////// Traer perros por ID ///////////////////////////////////////////////////////

const getById = async (id) => {
    try {
        const allDogs = await getAllDogs();
        let filtroId =  allDogs.filter((dog) => dog.id === id);

        if(filtroId.length > 0){
            return filtroId[0];
        } else {
            throw new Error("ID is missing");
        }
    } catch (error) {
        throw new Error(`Dog with ID ${id} not found`)
    }
}



///////////////// Traer perros por nombre ///////////////////////////////////////////////////////


const getByName = async(name) => {
    console.log(1);
    try {
        const allDogs = await getAllDogs();
        const filtroName = allDogs.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()));
        
        console.log(2);

        if(filtroName.length > 0){
            console.log(3);
            return filtroName
        } 
        throw new Error(`Dog with name ${name} not found`)
    } catch (error) {
        throw new Error(`Dog with name ${name} not found`)
    }
}


///////////////// Posteo de perros  ///////////////////////////////////////////////////////

const createDog = async(name, minWeight, maxWeight, minHeight, maxHeight, minLifeSpan, maxLifeSpan, image, temperament) => {
    try {
        const dogExist = await getAllDogs().find((dog) => dog.name === name);
        if(dogExist){
            throw new Error(`Dog with name ${name} already exists`)
        } else if (!name || !minWeight || !maxWeight || !minHeight || !maxHeight || !minLifeSpan || !maxLifeSpan || !image || !temperament){
            throw new Error("Provide all the information, please")
        } else if (minWeight < 1 || maxWeight < 1 || minHeight < 1 || maxHeight < 1 || minLifeSpan < 1 || maxLifeSpan < 1){
            throw new Error("Should provide numbers greater than 0")
        } else if (maxWeight < minWeight || maxHeight < minHeight || maxLifeSpan < minLifeSpan){
            throw new Error("Max weight, height and life span should be greater than min weight, height and life span")
        }
        const newDog = await Dog.create({
            name: name,
            minWeight: minWeight,
            maxWeight: maxWeight,
            minHeight: minHeight,
            maxHeight: maxHeight,
            minLifeSpan: minLifeSpan,
            maxLifeSpan: maxLifeSpan,
            image: image,
            temperament: temperament
        })
        return newDog;
    } catch (error) {
        throw new Error("Provide all the information, please")
    }
}


//////////////// Traer temperamentos ////////////////////////

// const getTemperament = async () => {
//     try {
//         const fromApi = getDogsFromApi();
//         const allTemperament = [];

//         fromApi.map((dog) => {
//             if(dog.temperament){
//                 allTemperament.push(...dog.temperament.split(", "))
//             }})

//         allTemperament.map((temp) => {
//             Temperament.findOrCreate({
//                 where: {
//                     name: temp
//                 }
//             })
//         });

//         return allTemperament;
//     } catch (error) {
//         console.log(error)
//     }
// }

module.exports = {
    getDogsFromApi,
    getAllDogs,
    getByName,
    getById,
    createDog,
    // getTemperament
}

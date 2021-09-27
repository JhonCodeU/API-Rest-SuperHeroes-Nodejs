const {Router} = require('express');
const router = Router();

const fetch = require('node-fetch');
const _ = require('underscore');

const superhero = require('../classes/superhero');

const heroArray = [];
async function getAllHeroes(number) {
    //variable API REST
    const accessToken = "1942189552610673";
    const path = "https://superheroapi.com/api/"

    var i = number;
    var exits = true;
    do{
        i++;
        await fetch(`${path}/${accessToken}/${i}`)
        .then(response => {
            response.json()
            .then(apiData => {
                if(apiData.response == 'error' || i == 10){
                    exits = false 
                }else{
                    heroArray.push(apiData);
                    console.log(apiData);
                }
                
            })
        })
        
    }
    while (exits);
    
    console.log('finish the bucle');
    //var hero = new superhero(data.id, data.name);
    //console.log(hero.introduction());
    //return heroArray;
}

// get all heroes
router.get('/', async (req, res) => {

    res.send(heroArray);
});

// get datails hero
router.get('/:id', (req, res) => {
    const { id } = req.params;
    _.each(heroArray, (hero, i) => {
        if (hero.id == id) {
            res.json(heroArray[i]);
        }
    })
});

module.exports = {router, getAllHeroes};
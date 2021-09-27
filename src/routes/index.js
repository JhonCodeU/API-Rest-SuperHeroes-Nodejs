const {Router} = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name" : "test",
        "website": "http://jhoncode"
    }
    res.json(data);
    /*
    var response = await fetch(`${path}/${accessToken}/`);
    var data = await response.json();
    
    var hero = new superhero(data.id, data.name);
    //console.log(hero.introduction());
    res.send(hero);

    if (data.response == "error") {
        //res.json(data);
    }*/

    /*
        const heroArray = [];
        for(let i = 1; i <= 150; i = i + 10){
            await fetch(`${path}/${accessToken}/${i}`)
            .then(response => {
                response.json()
                .then(apiData => {
                    heroArray.push(apiData);
                    //console.log(response);
                })
            })

        }
    res.json(heroArray);
    */
});

module.exports = router;
const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routers
const {router, getAllHeroes} = require('./routes/heroes');
app.use(require('./routes/index'));
app.use('/api/heroes',router);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Sever on port ${app.get('port')}`);
    console.log("startup");
    console.log(getAllHeroes(0));
    console.log(getAllHeroes(11));
});
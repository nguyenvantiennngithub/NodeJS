const path = require('path');
const express = require('express');
const handle = require('express-handlebars');
const morgan = require('morgan');
const router = require('./routers/index.router');
// const { dir } = require("console")

var app = express();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.engine(
    "hbs",
    handle({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
            app.set('views', path.join(__dirname, 'resources', 'views'));
            console.log(__dirname);

router(app);

// app.post("/search", function(req, res){
//     console.log(req.body)
//     res.send(req.body)
// })

app.listen(8080);

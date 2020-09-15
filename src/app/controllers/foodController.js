class FoodControllers {
    //[GET] /food
    index(req, res) {
        res.render('food');
    }
    meat(req, res) {
        res.end('meat');
    }
    fish(req, res) {
        res.end('fish');
    }
}

module.exports = new FoodControllers();

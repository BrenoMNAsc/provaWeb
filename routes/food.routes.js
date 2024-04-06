const controller = require("../controllers/food.controller");

module.exports = function (app) {
    app.get('/api/foods', controller.getAllFoodsController)
    app.get('/api/foods/:id', controller.getFoodByIdController)
    app.post('/api/foods', controller.insertFoodController)
    app.put('/api/foods/:id', controller.updateFoodController)
    app.delete('/api/foods/:id', controller.deleteFoodByIdController)
}
const { getAllFoods, getFoodById, insertFood, updateFood, deleteFoodById } = require('../services/food.service')


getAllFoodsController = async (req, res) => {
    try {
        const foods = await getAllFoods()
            .then((response) => {
                console.log(response)
                return res.json(response)
            }).catch((error) => {
                console.log(error)
                return res.status(500).json(error)
            })
        if (!foods) {
            return res.status(404).json({ message: "Alimentos não encontrados." });
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

getFoodByIdController = async (req, res) => {
    try {
        const food = await getFoodById(req.params.id)
            .then((response) => {
                return res.json(response)
            })
            .catch((error) => {
                console.log(error)
                return res.status(500).json(error)
            })
        if (!food) {
            return res.status(404).json({ message: "Alimento não encontrado." });
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

insertFoodController = async (req, res) => {
    try {
        const newFood = {
            name: req.body.name,
            category: req.body.category,
            quantity: req.body.quantity,
            expirationDate: req.body.expirationDate,
            price: req.body.price
        }
        const food = await insertFood(newFood)
            .then((response) => {
                return res.json(response)
            })
            .catch((error) => {
                console.log(error)
                return res.status(500).json(error)
            })
    } catch (error) {
        return res.status(500).json(error)
    }
}

updateFoodController = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedFoodData = {};
        if (req.body.name) updatedFoodData.name = req.body.name;
        if (req.body.category) updatedFoodData.category = req.body.category;
        if (req.body.quantity) updatedFoodData.quantity = req.body.quantity;
        if (req.body.expirationDate) updatedFoodData.expirationDate = req.body.expirationDate;
        if (req.body.price) updatedFoodData.price = req.body.price;

        const updatedFood = await updateFood(id.toString(), updatedFoodData);

        if (!updatedFood) {
            return res.status(404).json({ message: "Alimento não encontrado." });
        }

        return res.json({ message: 'Item atualizado com sucesso!' });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

deleteFoodByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedFood = await deleteFoodById(id)
            .then((response) => {
                return res.json({ message: "Alimento excluído com sucesso." });
            }).catch((error) => {
                console.log(error)
                return res.status(500).json(error)
            })
        if (!deletedFood) {
            return res.status(404).json({ message: "Alimento não encontrado." });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    getAllFoodsController,
    getFoodByIdController,
    deleteFoodByIdController,
    insertFoodController,
    updateFoodController
}
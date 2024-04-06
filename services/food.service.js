const { Food } = require("../models/index")

const getAllFoods = async () => {
    try {
        const response = await Food.find();
        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const getFoodById = async (id) => {
    try {
        const food = await Food.findById(id);
        return food;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}


const insertFood = async (data) => {
    const newFood = new Food(data);
    await newFood.save().then((res) => {
        return res
    }).catch((er) => {
        console.log(error)
        throw new Error(error);
    })
    return newFood;
}

const updateFood = async (id, data) => {
    try {
        const newInfos = {};
        if (data.name) newInfos.name = data.name;
        if (data.category) newInfos.category = data.category;
        if (data.quantity) newInfos.quantity = data.quantity;
        if (data.expirationDate) newInfos.expirationDate = data.expirationDate;
        if (data.price) newInfos.price = data.price;

        const updatedFood = await Food.updateOne(
            { _id: id },
            { $set: newInfos }
        );

        return updatedFood;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
const deleteFoodById = async (id) => {
    const deletedFood = await Food.findByIdAndDelete(id)
        .then((res) => {
            return res
        })
        .catch((error) => {
            console.log(error)
            throw new Error(error);
        })
}

module.exports = {
    getAllFoods,
    getFoodById,
    insertFood,
    updateFood,
    deleteFoodById
}
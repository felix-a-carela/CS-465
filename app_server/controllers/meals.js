// app_server/controllers/meals.js

const meals = [
    {
        name: "SeaFood Special",
        image: "seafoods.jpg",
        descriptionTitle: "Fried Salmon Special",
        description: "I'm a product overview. Here you can write more information about your product. Buyers like to know ..."
    },
    {
        name: "Sumptuous Desserts",
        image: "desserts.jpg",
        descriptionTitle: "Choco Ice Cream Sandwich",
        description: "I'm a product overview. Here you can write more information about your product. Buyers like to know ..."
    },
    {
        name: "Buffet",
        image: "buffet.jpg",
        descriptionTitle: "Mixed Buffet",
        description: "I'm a product overview. Here you can write more information about your product. Buyers like to know ..."
    }
];

const mealsPage = (req, res) => {
    res.render('meals', { 
        title: "Meals - Travlr Getaways",
        meals,
        current: 'meals'
    });
};

module.exports = {
    mealsPage
};

const index = (req, res) => {
    res.render('index', { 
        title: "Travlr Getaways",
        current: 'home'
    });
};

module.exports = {
    index
};

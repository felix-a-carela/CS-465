// app_server/controllers/about.js

const aboutPage = (req, res) => {
    res.render('about', {
        title: "About - Travlr Getaways",
        current: 'about'
    });
};

module.exports = {
    aboutPage
};

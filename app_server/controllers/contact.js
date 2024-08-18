// app_server/controllers/contact.js

const contactPage = (req, res) => {
    res.render('contact', {
        title: "Contact - Travlr Getaways",
        current: 'contact'
    });
};

const handleFormSubmit = (req, res) => {
    // Handle form submission logic here
    // For now, just redirect back to the contact page with a success message
    res.redirect('/contact');
};

module.exports = {
    contactPage,
    handleFormSubmit
};

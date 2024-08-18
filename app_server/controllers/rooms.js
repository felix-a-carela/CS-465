// app_server/controllers/rooms.js

const rooms = [
    {
        name: "First Class Room",
        image: "first-class.jpg",
        description: "Cras dui sapien, feugiat vitae tristique ut, lobortis tempor orci. Donec pulvinar sagittis metus ut tristique.",
        rate: "220"
    },
    {
        name: "Deluxe Room",
        image: "deluxe.jpg",
        description: "Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida.",
        rate: "150"
    },
    {
        name: "Suite Room",
        image: "suite.jpg",
        description: "Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida.",
        rate: "180"
    }
];

const roomsPage = (req, res) => {
    res.render('rooms', { 
        title: "Rooms - Travlr Getaways",
        rooms,
        current: 'rooms'
    });
};

module.exports = {
    roomsPage
};

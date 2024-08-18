// app_server/controllers/news.js

const latestNews = [
    { title: "2023 Best Beaches Contest Winners" },
    { title: "Top 10 Diving Spots" },
    { title: "Fishing ban to be implemented this year" },
    { title: "Lifeguard saves child from drowning" }
];

const vacationTips = [
    { title: "What to bring on the beach?" },
    { title: "Planning Fun Activities" },
    { title: "Diving Checklist" },
    { title: "First Aid" },
    { title: "How to Build a Sand Castle?" },
    { title: "Tanning Tips" }
];

const mainArticle = {
    title: "Experience Kayaking!",
    subtitle: "Enjoy the thrill of kayaking with our expert guides.",
    image: "kayak.jpg",
    date: "April 03, 2023",
    author: "Juan De La Cruz",
    content1: "Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida.",
    content2: "Cras dui sapien, feugiat vitae tristique ut, lobortis tempor orci. Donec pulvinar sagittis metus ut tristique.",
    content3: "Phasellus viverra fringilla lacus, malesuada blandit velit iaculis dignissim."
};

const newsPage = (req, res) => {
    res.render('news', {
        title: "News - Travlr Getaways",
        latestNews,
        vacationTips,
        mainArticle,
        current: 'news'
    });
};

module.exports = {
    newsPage
};

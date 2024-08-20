const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Albert Einstien'
    },
    {
        id: 1,
        name: 'Sir Isaac Newton'
    },
    {
        id: 2,
        name: 'Marie Curie'
    }
];

// logs the method, url, and time the request took
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

// send the list of friends to the friends url
app.get('/friends', (req, res) => {
    res.json(friends);
});

// getting one friend with the friend id is added as a param to the url
app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if(friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend Not Found!',
        })
    }
});

// getting messages
app.get('/messages', (req, res) => {
    res.send('<ul><li>Sir Isaac Newton</li></ul>');;
});

// posting or adding messages
app.post('/messages', (req, res) => {
    console.log('Updating', data);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
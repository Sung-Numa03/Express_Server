const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;



// logs the method, url, and time the request took
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());


app.use('/friends', friendsRouter); //mounting a router

app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
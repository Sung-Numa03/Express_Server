const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log('ip address:', req.ip);
    next();
});

// adding a friend to the friends array
friendsRouter.post('/', friendsController.postFriend);

// send the list of friends to the friends url
friendsRouter.get('/', friendsController.getFriends);

// getting one friend with the friend id is added as a param to the url
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;
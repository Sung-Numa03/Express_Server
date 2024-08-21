const express = require('express');

const messagesController = require('../controllers/messages.controller');

const messagesRouter = express.Router(); 

// getting messages
messagesRouter.get('/', messagesController.getMassages);

// posting or adding messages
messagesRouter.post('/', messagesController.postMessage);

module.exports = messagesRouter;

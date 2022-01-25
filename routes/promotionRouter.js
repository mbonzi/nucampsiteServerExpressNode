const express = require('express');

const promotionRouter = express.Router();


promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'pext/plain');
    next();
}) 
.get((req, res) => {
    res.end('Will send all of the promotions to you');
})
.post((req, res) => {
    res.end(`Will use the promotion: ${req.body.name} for ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('The update/PUT operation is not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});


promotionRouter.route('/:promotionsId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`We will send the details of the promotion: ${req.params.promotionsId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation was not supported on /promotions/${req.params.promotionsId}`);
})
.put((req, res) => {
    res.write(`Updating the promotion: ${req.params.promotionsId}\n`);
    res.end(`Will update the promotion: ${req.body.name} with description ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting the promotion: ${req.params.promotionsId}`);
});


module.exports = promotionRouter; 
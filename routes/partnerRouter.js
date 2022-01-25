const express = require('express');

const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'pext/plain');
    next();
}) 
.get((req, res) => {
    res.end(`We will send the details of the partner(s), ${req.params.body} to you`);
})
.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('The update/PUT operation is not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});


partnerRouter.route('/:partnersId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`We will send the details of the partner(s), ${req.params.partnersId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation was not supported on /partners/${req.params.partnersId}`);
})
.put((req, res) => {
    res.write(`Updating the partner: ${req.params.partnersId}\n`);
    res.end(`Will update the partner: ${req.body.name} with description ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting the partner: ${req.params.partnersId}`);
});


module.exports = partnerRouter; 
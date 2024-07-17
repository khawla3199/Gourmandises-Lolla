const pastryRouter = require("express").Router()
const Controller=require('../server/controler')

pastryRouter.post("/add", Controller.create);
pastryRouter.get('/get/:id', Controller.retrieveOne);
pastryRouter.put('/put/:id', Controller.updateOne);
pastryRouter.delete('/delete/:id', Controller.deleteOne);
pastryRouter.get('/getall', Controller.retrieve);
// pastryRouter.delete("/delete/:price", Controller.deleteOne);

module.exports = pastryRouter;
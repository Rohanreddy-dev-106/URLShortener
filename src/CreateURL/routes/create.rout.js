import express from "express";
import controler from "../controllers/create.controler.js"

const creatroute = express.Router();

const controllerObject = new controler("url");
creatroute.post("/create", (req, res, next) => {
    controllerObject.CreateUrl(req, res, next)
})



export default creatroute;
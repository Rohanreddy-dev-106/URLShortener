import express from "express";
import controler from "../controller/reade.controller.js";

const readeroute = express.Router();

const controllerObject = new controler("url");

readeroute.get("/find/:shorturl", (req, res, next) => {
    controllerObject.Geturl(req, res, next);
});

export default readeroute;

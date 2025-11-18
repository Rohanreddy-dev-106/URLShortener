import express from "express";
import controler from "../controller/delete.control.js";

const deleterout = express.Router();

const controllerObject = new controler("url");

deleterout .post("/delete", (req, res, next) => {
    controllerObject.DeleteUrl(req, res, next);
});

export default  deleterout ;

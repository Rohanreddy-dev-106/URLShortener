import express from "express";
import creatroute from "./src/CreateURL/routes/create.rout.js"
import readeroute from "./src/ReadURL/routes/read.route.js";
import deleterout from "./src/DeleteURL/router/delete.route.js";

const server=express();



server.use(express.json());
server.use("/",creatroute)
server.use("/",readeroute)
server.use("/",deleterout)

export {server}
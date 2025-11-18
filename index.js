import express from "express";
import creatroute from "./src/CreateURL/routes/create.rout.js"
import readeroute from "./src/ReadURL/routes/read.route.js";

const server=express();



server.use(express.json());
server.use("/",creatroute)
server.use("/",readeroute)

export {server}
import {server} from "./index.js"
import { ConnecttTomongodb, GetDb} from "./src/config/Mongodb.connection.js"
import dotenv from "dotenv";
dotenv.config();
const PORT=process.env.PORT;

server.listen(PORT ,()=>{
    ConnecttTomongodb();
    console.log(`Server started at Port ${PORT}`);
    
})
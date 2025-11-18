import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGODB_CONNECTION_URL;
let clintDB = "";
async function ConnecttTomongodb() {
  try {
    const clint = await mongodb.MongoClient.connect(url);
    clintDB = clint;
    console.log("Mongodb is connected...");
     Index(clintDB.db())
  } catch (error) {
    console.log(error.message);
  }
}
function GetDb() {
  if (!clintDB) {
    return "NO such Db..";
  } else {
    return clintDB.db();
  }
}

async function Index(db) {
    await db.collection("url").createIndex({BaseURL: 1 });
}
export { ConnecttTomongodb, GetDb };

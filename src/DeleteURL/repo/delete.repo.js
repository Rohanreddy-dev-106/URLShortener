import { GetDb } from "../../config/Mongodb.connection.js";

export default class DeleteRepo {
    constructor(Name) {
        this.collection = Name;
    }

    async Delete(url) {
        try {
            const db = GetDb();
            const collection = db.collection(this.collection);

            const result = await collection.deleteOne({ ShortURL: url});

            return result.deletedCount > 0;  
        } catch (error) {
            console.log("Delete Error:", error.message);
           
        }
    }
}

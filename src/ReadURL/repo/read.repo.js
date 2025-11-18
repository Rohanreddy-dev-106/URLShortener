import { GetDb } from "../../config/Mongodb.connection.js";

export default class Readerepo {
    constructor(Name) {
        this.collection = Name;
    }

    async FindUrl(url) {
        try {
            const db = GetDb();
            const collection = db.collection(this.collection);

            const finddoc = await collection.findOne({
                ShortURL: url,
            });
            this.Updatecont(url);

            return finddoc;
        } catch (error) {
            console.log(error.message);

        }
    }
    async Updatecont(url) {
        try {
            const db = GetDb();
            const collection = db.collection(this.collection);

            const update = await collection.findOneAndUpdate(
                { ShortURL: url },
                { $inc: { Clickcount: 1 } },
                { returnDocument: "after" }
            );

            return update.value;
        } catch (err) {
            console.error("Error updating click count:", err);

        }
    }

}
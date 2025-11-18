/** @format */

import { GetDb } from "../../config/Mongodb.connection.js";

export default class Createrepo {
    constructor(Name) {
        this.collection = Name;
    }

    async Create(data) {
        try {
            const db = GetDb();
            const collection = db.collection(this.collection);
            const insert = await collection.insertOne(data);
            return insert;
        } catch (error) {
            console.log(error.message);
        }
    }
}

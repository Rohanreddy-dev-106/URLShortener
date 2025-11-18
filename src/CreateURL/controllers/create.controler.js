import repo from "../repo/create.repo.js";
import model from "../model/create.model.js";
import { nanoid } from "nanoid";

export default class Createcontroller {
    Creatrepo;

    constructor(Name) {
        this.Creatrepo = new repo(Name);
    }

    async CreateUrl(req, res, next) {
        try {
            const shortUrl = nanoid(8);
            const { url, click } = req.body;

            const urldoc = new model(url, shortUrl, click,new Date);

            const result = await this.Creatrepo.Create(urldoc);

            res.status(200).json(result);
        } catch (error) {
            console.log(error.message);
           
        }
    }
}

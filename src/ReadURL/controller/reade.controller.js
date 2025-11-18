/** @format */

import repo from "../repo/read.repo.js";

export default class Readurlcontroller {
    Readrepo;

    constructor(Name) {
        this.Readrepo = new repo(Name);
    }

    async Geturl(req, res, next) {
        try {
            console.log("Params:", req.params); 
             const shorturl = req.params.shorturl;
                console.log("Short URL:", shorturl); 
            const result = await this.Readrepo.FindUrl(shorturl);
            if (!result) {
                return res.status(404).json({ message: "URL not found" });
            }
            return res.redirect(result.BaseURL);
        } catch (error) {
            console.log(error.message);
        }
    }
}

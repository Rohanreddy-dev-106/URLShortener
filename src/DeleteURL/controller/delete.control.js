import repo from  "../repo/delete.repo.js"
export default class DeleteController {
   Deletrepo;

    constructor(Name) {
        this.Deletrepo = new repo(Name); 
    }

    async DeleteUrl(req, res, next) {
        try {
            const { id } = req.body;

            if (!id) {
                return res.status(400).json({ message: "ID is required" });
            }

            const result = await this.Deletrepo.Delete(id);

            if (!result) {
                return res.status(404).json({ message: "URL not found" });
            }

            res.status(200).json({ message: "Deleted successfully" });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

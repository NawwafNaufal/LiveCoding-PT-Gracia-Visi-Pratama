import { listDocumentsService } from "../../service/document/listDocumentsService.js";

export const listDocumentsController = async (req, res) => {
    try {
        const result = await listDocumentsService();
        return res.status(200).json({
            message: "Success Get Documents",
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};
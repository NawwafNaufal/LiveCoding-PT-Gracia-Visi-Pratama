import { updateDocumentService } from "../../service/document/updateDocumentService.js";
export const updateDocumentController = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const filePath = req.file ? req.file.path : undefined;

    try {
        const result = await updateDocumentService(id, title, description, filePath);
        return res.status(200).json({
            message: "Document Updated Successfully",
            data: result
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};
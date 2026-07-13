import {createDocumentService} from "../../service/document/createDocumentService.js";

export const createDocumentController = async (req, res) => {
    const { title, description } = req.body;
    const filePath = req.file ? req.file.path : null;

    try {
        const result = await createDocumentService(title, description, filePath);
        return res.status(201).json({
            message: "Document Created Successfully",
            data: result
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};
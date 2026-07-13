import { updateDocument, getDocumentById } from "../../model/document.js";
import { responseError } from "../../error/responseError.js";
import fs from "fs";

export const updateDocumentService = async (id, title, description, filePath) => {
    const existingDoc = await getDocumentById(id);
    if (!existingDoc) {
        if (filePath) {
            fs.unlinkSync(filePath);
        }
        throw new responseError(400, "Document tidak ditemukan!");
    }

    const result = await updateDocument(id, title, description, filePath);

    if (filePath && existingDoc.file_path && fs.existsSync(existingDoc.file_path)) {
        try {
            fs.unlinkSync(existingDoc.file_path);
        } catch (err) {
            console.error("Gagal menghapus file lama:", err);
        }
    }

    return {
        id,
        title: title || existingDoc.title,
        description: description || existingDoc.description,
        filePath: filePath || existingDoc.file_path
    };
};
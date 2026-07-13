import {createDocument} from "../../model/document.js";
import { responseError } from "../../error/responseError.js";

export const createDocumentService = async (title, description, filePath) => {
    if (!filePath) {
        throw new responseError(400,"File harus diupload!");
    }
    const result = await createDocument(title, description, filePath);
    return { id: result.insertId, title, description, filePath };
};
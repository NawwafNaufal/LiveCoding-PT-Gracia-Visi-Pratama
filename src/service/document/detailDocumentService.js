import {getDocumentById} from "../../model/document.js";

export const detailDocumentService = async (id) => {
    const document = await getDocumentById(id);
    if (!document) {
        throw new responseError(400,"Document tidak ditemukan!");
    }
    return document;
};
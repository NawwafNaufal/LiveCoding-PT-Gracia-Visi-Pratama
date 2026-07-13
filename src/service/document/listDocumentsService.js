import {getAllDocuments} from "../../model/document.js";
export const listDocumentsService = async () => {
    return await getAllDocuments();
};
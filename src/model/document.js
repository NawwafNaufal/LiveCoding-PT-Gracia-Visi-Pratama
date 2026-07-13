import { Document } from "./User.js";

export const createDocument = async (title, description, filePath) => {
    const doc = await Document.create({
        title,
        description,
        file_path: filePath
    });
    return { insertId: doc.id };
};

export const getAllDocuments = async () => {
    const docs = await Document.findAll({
        order: [["createdAt", "DESC"]]
    });
    return docs.map(d => d.get({ plain: true }));
};

export const getDocumentById = async (id) => {
    const doc = await Document.findByPk(id);
    return doc ? doc.get({ plain: true }) : null;
};

export const updateDocument = async (id, title, description, filePath) => {
    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (filePath !== undefined) updateData.file_path = filePath;

    const [affectedCount] = await Document.update(updateData, {
        where: { id }
    });
    return affectedCount;
};

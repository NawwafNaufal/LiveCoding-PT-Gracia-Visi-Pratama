import Joi from "joi";

export const createDocumentSchema = Joi.object({
    title: Joi.string().min(3).max(255).required().messages({
        "string.empty": "Title tidak boleh kosong",
        "string.min": "Title minimal 3 karakter",
        "any.required": "Title wajib diisi"
    }),
    description: Joi.string().min(10).required().messages({
        "string.empty": "Description tidak boleh kosong",
        "string.min": "Description minimal 10 karakter",
        "any.required": "Description wajib diisi"
    })
});

export const updateDocumentSchema = Joi.object({
    title: Joi.string().min(3).max(255).optional().messages({
        "string.min": "Title minimal 3 karakter"
    }),
    description: Joi.string().min(10).optional().messages({
        "string.min": "Description minimal 10 karakter"
    })
});

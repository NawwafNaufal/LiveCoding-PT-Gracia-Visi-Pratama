import Joi from "joi";

export const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required().messages({
        "string.empty": "Username tidak boleh kosong",
        "string.min": "Username minimal 3 karakter",
        "string.max": "Username maksimal 30 karakter",
        "any.required": "Username wajib diisi"
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "Email tidak boleh kosong",
        "string.email": "Format email tidak valid",
        "any.required": "Email wajib diisi"
    }),
    name: Joi.string().min(3).required().messages({
        "string.empty": "Nama tidak boleh kosong",
        "string.min": "Nama minimal 3 karakter",
        "any.required": "Nama wajib diisi"
    }),
    dateBirth: Joi.date().required().messages({
        "date.base": "Format tanggal lahir tidak valid",
        "any.required": "Tanggal lahir wajib diisi"
    }),
    password: Joi.string().min(6).required().messages({
        "string.empty": "Password tidak boleh kosong",
        "string.min": "Password minimal 6 karakter",
        "any.required": "Password wajib diisi"
    }),
    age: Joi.number().integer().min(1).max(120).required().messages({
        "number.base": "Umur harus berupa angka",
        "number.min": "Umur minimal 1 tahun",
        "number.max": "Umur maksimal 120 tahun",
        "any.required": "Umur wajib diisi"
    })
});

export const loginSchema = Joi.object({
    username: Joi.string().optional().messages({
        "string.empty": "Username tidak boleh kosong"
    }),
    email: Joi.string().email().optional().messages({
        "string.empty": "Email tidak boleh kosong",
        "string.email": "Format email tidak valid"
    }),
    password: Joi.string().min(6).required().messages({
        "string.empty": "Password tidak boleh kosong",
        "string.min": "Password minimal 6 karakter",
        "any.required": "Password wajib diisi"
    })
}).or("username", "email").messages({
    "object.missing": "Harap isi salah satu dari Username atau Email"
});

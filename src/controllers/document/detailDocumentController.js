import { detailDocumentService } from "../../service/document/detailDocumentService.js";

export const detailDocumentController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await detailDocumentService(id);
        return res.status(200).json({
            message: "Success Get Document Detail",
            data: result
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message
        });
    }
};
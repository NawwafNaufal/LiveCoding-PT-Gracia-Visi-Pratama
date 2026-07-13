import { getDataInformation } from "../../model/getInformationUser.js";

export const dataInfromationService = async () => {
    const data = await getDataInformation()

    if(!data) {
        throw new Error("Data User Kosong")
    }

    return data
}
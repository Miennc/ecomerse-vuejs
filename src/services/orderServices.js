import { Axios } from "./Axios";

function listOrder() {
    return Axios.get("");
}

export const orderServices = {
    listOrder
};
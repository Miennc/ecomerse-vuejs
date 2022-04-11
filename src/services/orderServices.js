import { Axios } from "./Axios";

function makeOrder(payload) {
    return Axios.post("make-order",payload);
}

export const orderServices = {
    makeOrder
};
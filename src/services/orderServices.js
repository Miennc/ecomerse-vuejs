import { Axios } from "./Axios";

function makeOrder(payload) {
    return Axios.post("make-order",payload);
}
function listOrders(){
  return Axios.get("my-orders");
}
export const orderServices = {
    makeOrder,
    listOrders
};
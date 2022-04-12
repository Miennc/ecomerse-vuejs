import { Axios } from "./Axios";

function makeOrder(payload) {
    return Axios.post("make-order",payload);
}
function listOrders(){
  return Axios.get("my-orders");
}
function listOrdersByStatus(id){
  return Axios.get(`my-orders?status=${id}`);
}
export const orderServices = {
    makeOrder,
    listOrders,
    listOrdersByStatus
};
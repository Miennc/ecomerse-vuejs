import { Axios } from "./Axios";

function getCategory() {
    return Axios.get(`category`);
}
function getCategoryById(id) {
    return Axios.get(`products/category/${id}`);
}
export const categoryServices = {
   getCategory,
   getCategoryById
};
import { Axios } from "./Axios";

function SignIn(payload) {
    return Axios.post("signup", payload);
}
function Login(payload) {
    return Axios.post("login",payload);
}
function getDataUser() {
    return Axios.get("user");
}

export const userServices = {
    SignIn,
    Login,
    getDataUser
};
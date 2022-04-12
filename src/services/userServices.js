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
function editProfile(payload) {
    return Axios.put("update-profile",payload);
}
export const userServices = {
    SignIn,
    Login,
    getDataUser,
    editProfile
};
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
function postAvatar(formData) {
    console.log(formData)
    Axios.setHeaders({ 'Content-Type': 'multipart/form-data' })
    return Axios.post("update-avatar",formData
    ).then((res)=> {
        console.log(res);
    }).catch((err)=>{
        alert(err);
    })
}

export const userServices = {
    SignIn,
    Login,
    getDataUser,
    editProfile,
    postAvatar
};
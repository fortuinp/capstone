import axios from "axios";
function applyToken(token){
    console.log(token);
    if (token) {
        axios.defaults.headers={
            Authorization:`${token}`
        }
    }
}

export default{
    applyToken
}
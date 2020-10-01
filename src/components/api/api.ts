import axios from "axios";

const instance = axios.create({
    baseURL: `/api/postData`,
})

export const api = {
    _postData(data) {
        return instance.post(``, data)
            .then(res => {
                console.log(res.config.data)
            })
            .catch(error => {
                console.error(error)
            })
    },
    postDataReq(data) {
        return this._postData(``, data)
    },
}
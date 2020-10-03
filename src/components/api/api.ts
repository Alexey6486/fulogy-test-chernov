import axios from "axios";

const instance = axios.create({
    baseURL: `/api/hide`,
})

export const api = {
    postData(payload) {
        return instance
            .post('', payload)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }
}
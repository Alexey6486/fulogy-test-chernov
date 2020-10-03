import axios from "axios";

const instance = axios.create({
    baseURL: process.env.API_HIDE,
    headers: {"Content-Type": "application/json", "x-token-access": "random"}
});

interface RequestExtended extends NextApiRequest {
    payload: UserDataFormType
}
import {NextApiRequest, NextApiResponse} from "next";
import { UserDataFormType } from "src/redux/userDataReducer";

const hide = (request: RequestExtended, response: NextApiResponse) => {
    instance
        .post('posts', request.payload)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        })
    response.end();
};

export default hide;
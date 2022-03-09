import axios from "axios";

const instance = axios.create({
    baseURL: "https://smartlogger.ovh/email",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json",
    },
});

instance.interceptors.response.use(null, (err) => {
    const { response } = err;
    const expectedError =
        response && response.status >= 400 && response.status < 500;
    if (!expectedError) console.log("Unexpected Error Happened");

    return Promise.reject(err);
});

const Http = {
    post: instance.post,
};

export default Http;
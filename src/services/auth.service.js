import axios from "axios";


const apiURL = import.meta.env.VITE_API_URL_AUTH;


export const registerAuthService = async(info) => {
    try {
        const url = `${apiURL}register`;
        const {data} = await axios.post(url, {
         headers : {
            "Content-Type" : "application/json",
         },
         body: JSON.stringify(info)
        })

        return data

    } catch (error) {
        throw new Error(error.message)
    }
}

export const loginAuthService = async (info) => {
    try {
        const url = `${apiURL}login`;
        const {data} = await axios.post(url, {
         headers : {
            "Content-Type" : "application/json",
         },
         body: JSON.stringify(info)
        })

        return data

    } catch (error) {
        throw new Error(error.message)
    }

}
const axios = require('axios')


const App_Url = "http://localhost:5050/api/"

const createUser = async () => {
    const payload = {
        name: "Puja Kumari",
        email: "puja@example.com",
        age: 23
    }

    let response = await axios.post(App_Url + "/postUserInfo", payload)

    return response.data;
}


module.exports = { App_Url, createUser }
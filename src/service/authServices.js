const { default: instance } = require("common/config/api")

const authService = {
    authLogin: async() => {
        const reposta = await instance.get('/auth')
        console.log("resposta da chamada da api", reposta)
        return reposta.data;
    }
}

export default authService;
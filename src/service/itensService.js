const { default: instance } = require("common/config/api")

const itensService = {
    buscar: async() => {
        const reposta = await instance.get('/itens')
        return reposta.data;
    }
}

export default itensService;
const { default: instance } = require("common/config/api")

const categoriasService = {
    buscar: async() => {
        const reposta = await instance.get('/categorias')
        console.log("categorias completo", reposta)
        return reposta.data;
    }
}

export default categoriasService;
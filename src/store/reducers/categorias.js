import { createStandaloneToast } from '@chakra-ui/toast';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from 'service/categoriasServices';

const { toast } = createStandaloneToast();

const initialState = {
    fetch: false,
    nome: '',
    data: []
};
console.log("inicio - state", initialState)
export const buscarCategorias = createAsyncThunk(
    'categorias/buscar',
    categoriasService.buscar
);

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
    extraReducers: builder => {
        console.log("fim ->", initialState)
        builder
            .addCase(
                buscarCategorias.fulfilled,
                (state, { payload }) => {
                    toast({
                        title: 'Sucesso!',
                        description: 'Categorias carregadas com sucesso!',
                        status: 'success',
                        duration: 2000,
                        isClosable: true
                    })

                    return (state = {
                        ...state,
                        fetch: true,
                        nome: payload[0].nome,
                        data: [...payload, {
                            nome: 'daniel'
                        }]

                    })





                }

            )
            .addCase(
                buscarCategorias.pending,
                (state, { payload }) => {
                    toast({
                        title: 'Carregando',
                        description: 'Carregando categorias',
                        status: 'loading',
                        duration: 2000,
                        isClosable: true
                    })
                }
            )
        console.log("fim ->", initialState)
    }
});

export default categoriasSlice.reducer;
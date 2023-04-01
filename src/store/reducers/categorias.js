import { createStandaloneToast } from '@chakra-ui/toast';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from 'service/categoriasServices';

const { toast } = createStandaloneToast();

const initialState = [];

export const buscarCategorias = createAsyncThunk(
    'categorias/buscar',
    categoriasService.buscar
);

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
    extraReducers: builder => {
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
                    return payload;
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

    }
});

export default categoriasSlice.reducer;
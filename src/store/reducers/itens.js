import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from 'service/categoriasServices';
import itensService from 'service/itensService';
import { v4 as uuid } from 'uuid';


const initialState = [];

export const buscarItens = createAsyncThunk(
    'itens/buscar',
    itensService.buscar
)


const itensSlice = createSlice({
    name: 'itens',
    initialState,
    reducers: {
        mudarFavorito(state, { payload }) {
            state = state.map(item => {
                if (item.id === payload) item.favorito = !item.favorito
                return item
            })
        },
        cadastrarItem(state, { payload }) {
            state.push({...payload, id: uuid() });
        },
        adicionarItens: (state, { payload }) => {
            state.push(...payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(
            buscarItens.fulfilled,
            (state, { payload }) => {
                return payload;
            }
        )
    }
});
export const { mudarFavorito, cadastrarItem, adicionarItens } = itensSlice.actions;
export default itensSlice.reducer;
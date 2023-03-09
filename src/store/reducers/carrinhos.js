const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const carrinhoSlice = createSlice({

    name: 'carrinhos',
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }) => {

            const temItem = state.some(item => item.id === payload);

            if (!temItem) return [
                ...state,
                {
                    id: payload,
                    quantidade: 1
                }
            ]
            return state.filter(item => item.id !== payload)


        },
        mudarQuantidade: (state, { payload }) => {

            state = state.map(itemCarrinho => {
                if (itemCarrinho.id === payload.id) itemCarrinho.quantidade += payload.quantidade;
                return itemCarrinho;
            })
        },
        resetarCarrinho:()=> initialState,
    }



})

export const { mudarCarrinho, mudarQuantidade,resetarCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
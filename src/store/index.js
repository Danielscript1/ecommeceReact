import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';
import carrinhoSlice from './reducers/carrinhos';
import buscaSlice from './reducers/busca';
import authSlice from './reducers/auth';
import { listener } from './middleware/categoria';



const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
        carrinhos: carrinhoSlice,
        busca: buscaSlice,
        Login: authSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().prepend(listener.middleware),
});

export default store;
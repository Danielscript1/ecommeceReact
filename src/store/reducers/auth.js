import { createStandaloneToast } from '@chakra-ui/toast';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from 'service/authServices';


const { toast } = createStandaloneToast();

export const authLogin = createAsyncThunk(
    'login/authLogin',
    authService.authLogin
);

const initialState = {
    isSucess: false,
    bolean: false,
};
console.log("inicio auth - state", initialState)


const authSlice = createSlice({
    name: 'Login',
    initialState,
    extraReducers: builder => {
        console.log("fim auth->", initialState)
        builder
            .addCase(
                authLogin.fulfilled,
                (state, { payload }) => {
                    toast({
                        title: 'Sucesso!',
                        description: 'Autenticação do  usuario com sucesso!',
                        status: 'success',
                        duration: 2000,
                        isClosable: true
                    })
                    const { bolean } = payload[0];
                    console.log('payload->auth', payload[0].name)
                    if (bolean != false) {
                        localStorage.setItem("auth", JSON.stringify(payload[0]))
                    }
                    return (state = {
                        ...state,
                        isSucess: payload[0].bolean != false,
                        //nome: payload[0].nome,


                    })





                }

            )
            .addCase(
                authLogin.pending,
                (state, { payload }) => {
                    toast({
                        title: 'Carregando',
                        description: 'Carregando...',
                        status: 'loading',
                        duration: 2000,
                        isClosable: true
                    })
                    return (state = {
                        ...state,
                        isSucess: false,
                        //nome: payload[0].nome,


                    })

                }
            )
        console.log("fim auth 2 ->", initialState)
    }
});

export default authSlice.reducer;
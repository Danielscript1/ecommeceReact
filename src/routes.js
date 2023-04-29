import PaginaPadrao from 'components/PaginaPadrao';
import Categoria from 'pages/Categoria';
import Home from 'pages/Home';
import Carrinho from 'pages/Carrinho';
import Anuncie from 'pages/Anuncie';
import { BrowserRouter, Navigate, Outlet, Route, Routes,useNavigation } from 'react-router-dom';
import SignIn from 'pages/SignIn';


export default function Router() {

  
 
  const isAuthenticated = () => localStorage.getItem('auth') !== null;
  console.log('isAuthenticated',isAuthenticated)

  const PrivateRoute = () => {
    const auth = isAuthenticated(); 
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<SignIn />} />
          <Route path='/' element={<PrivateRoute/>}>
          <Route index element={<Home/> }/>
          <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/anuncie' element={<Anuncie />} />
          <Route path='/anuncie/:nomeCategoria' element={<Anuncie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
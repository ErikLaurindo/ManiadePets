import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './pages/Header';
import Home from './pages/Home';
import Usuario from './pages/Usuario';
//import Usuario from './pages/ListaUsuario';
import Contatos from './pages/Contatos';
import Parcerias from './pages/Parcerias';
import Duvidas from './pages/Duvidas';


//import ListaUsuario from './pages/ListaUsuario';


function RoutesApp(){
 return(
    <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuario" element={<Usuario/>}/>
                <Route path="/duvidas" element={<Duvidas/>}/>
                <Route path="/contatos" element={<Contatos/>}/>
                <Route path="/Parcerias" element={<Parcerias/>}/>
               
              

               
                
            </Routes>
        
    
    </BrowserRouter>
 )
}
export default RoutesApp;
//<Route path="/listausuario" element={<ListaUsuario/>}/>
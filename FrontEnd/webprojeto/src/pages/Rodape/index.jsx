import { Link } from 'react-router-dom'
import React from 'react';
import './Rodape.css';
import imagem from './logoume copy.jpg'
import imagem2 from './appleinstale.png'
import imagem3 from './googleplayinstale.png'


const Rodape = () => {

    return( 
            <footer>
                
                
                <div >
                <div className='divparteinstale'>
                <center>

                    <h1>Instale agora o melhor app para você cuidar dos seus pets como voce sempre quis!</h1>
                    <h3>Disponivel em android e IOS</h3>
                    <  Link to="/usuario" className="instale"><img src={imagem2} className="instale" /> </Link>
                    <  Link to="/usuario" className="instale"><img src={imagem3} className="instale" /> </Link>
                
                </center>
                
                
              
            </div>
              
                </div>
                       <div className='testeimagem' >
                       <left> <  Link to="/" ><img src = {imagem}  /> </Link></left>
                       </div>
                       <div className='testelista'>
                        
                       <ul className='Rodapelinks'>
                        
                           <li> <Link to={"/"} className="Home">Home</Link></li>
                           <li> <Link to={"/usuario"} className="Cadastro">Cadastro</Link> </li>
                           <li> <Link to={"/usuario"} className="Dúvidas">Dúvidas</Link> </li>
                           <li> <Link to={"/usuario"} className="Parcerias">Parcerias</Link> </li>
                           <li> <Link to={"/usuario"} className="Contatos">Contatos</Link> </li>
                           
                       </ul>
                       
                       </div>
            </footer>

    );

}
export default Rodape;
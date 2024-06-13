
// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import imagem2 from './appleinstale copy.png';
import imagem3 from './googleplayinstale copy.png';
import Rodape from '../Rodape';
import imagem from './fundoum,.png';
import { useState } from "react";
import api from "../../services/api";
 
 
const Usuario = () => {
   
  const[vnome, setNome] = useState('')
  const[vsenha, setSenha] = useState('')
  const[vemail, setEmail] = useState('')
  const[vnasc, setNasc] = useState('')
  const[vgenero, setGenero] = useState('')  
 
const handleSubmit = async () => {
  try{
   
    const response = await api.post('User',{usersName: vnome, usersSenha: vsenha, usersEmail: vemail, usersNasc: vnasc, usersGenero: vgenero  })
   console.log(response.data)
  }catch (error){
    console.log(error)
  }
}
 
  return (
    <div >
       <div className="divum">
        <h1>Faça Seu Cadastro</h1>
      </div>
    <div className="app-container">
     
    <div className="form-group">
        <label className="label">Nome</label> < br/>
        <input type="text" placeholder="Informe o seu Nome Completo "  onCharge={(e) => setNome(e.target.value)}/>
      </div>
       
      <div className="form-group">
        <label className="label">Email</label> < br/>
        <input type="text" placeholder="Informe o Email "   onCharge={(e) => setEmail(e.target.value)} />
      </div>
 
      <div className="form-group">
        <label className="label">Data de Nascimento</label> < br/>
        <input type="text" placeholder="Informe a Data de Nascimento "   onCharge={(e) => setNasc(e.target.value)} />
      </div>
 
      <div className="form-group">
        <label className="label">Genero</label> < br/>
        <input type="text" placeholder="Informe a Data de Nascimento "   onCharge={(e) => setGenero(e.target.value)} />
      </div>
 
      <div className="form-group">
        <label className="label">senha</label> < br/>
        <input name="password" id="password" type="password" autocomplete="false" readonly onfocus="this.removeAttribute('readonly');" pattern="^[1-9][0-9]{0,3}$" maxlength="8" onCharge={(e) => setSenha(e.target.value)} />
      </div>
 
 
 
      <div className="form-group">
           
            <button onClick={handleSubmit}>Criar Conta</button>
      </div>
     
         
    </div>
    <div>  <img src={imagem} className="imagem" /></div>
   
            <div><Rodape /></div>
           
           
    </div>
  )
}
 
 
 
export default Usuario;
 /*// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import imagem2 from './appleinstale copy.png';
import imagem3 from './googleplayinstale copy.png';
import Rodape from '../Rodape';
import imagem from './fundoum,.png';
import { useState } from "react";
import api from "../../services/api";


const Usuario = () => {
   
  const[User_name, setNome] = useState('')
  const[User_senha, setSenha] = useState('')
  const[User_Email, setEmail] = useState('')  
  
const handleSubmit = async () => {
  try{
    
    const response = await api.post('/Users',{nome: User_name, senha: User_senha, Email: User_Email })
   console.log(response.data)
  }catch (error){
    console.log(error)
  }
}

  return (
    <div >
       <div className="divum">
        <h1>Faça Seu Cadastro</h1>
      </div>
    <div className="app-container">
     
      <div className="form-group">
        <label className="label">Nome</label> < br/>
        <input type="text" placeholder="Informe o Nome do Produto"  onCharge={(e) => setNome(e.target.value)}/> 
      </div>

      <div className="form-group">
        <label className="label">Senha</label> < br/>
        <input type="text" placeholder="Informe a descricao do produto"   onCharge={(e) => setSenha(e.target.value)} /> 
      </div>
       
      <div className="form-group">
        <label className="label">Email</label> < br/>
        <input type="text" placeholder="Informe o preco do produto"   onCharge={(e) => setEmail(e.target.value)} /> 
      </div>



      <div className="form-group">
            
            <button onClick={handleSubmit}>Criar Conta</button>
      </div>
     
         
    </div>
    <div>  <img src={imagem} className="imagem" /></div>
    
            <div><Rodape /></div>
           
           
    </div>
  )
}



export default Usuario;*/
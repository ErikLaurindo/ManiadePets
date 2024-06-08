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
  const[vdescricao, setDescricao] = useState('')
  const[vpreco, setPreco] = useState('')  
  
const handleSubmit = async () => {
  try{
    
    const response = await api.post('/produtos',{nome: vnome, descricao: vdescricao, preco: vpreco })
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
        <label className="label">descricao</label> < br/>
        <input type="text" placeholder="Informe a descricao do produto"   onCharge={(e) => setDescricao(e.target.value)} /> 
      </div>
       
      <div className="form-group">
        <label className="label">preco</label> < br/>
        <input type="text" placeholder="Informe o preco do produto"   onCharge={(e) => setPreco(e.target.value)} /> 
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
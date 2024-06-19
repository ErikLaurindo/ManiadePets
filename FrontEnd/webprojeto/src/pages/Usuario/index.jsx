import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import imagem2 from './appleinstale copy.png';
import imagem3 from './googleplayinstale copy.png';
import Rodape from '../Rodape';
import imagem from './fundoum,.png';
import { useState } from "react";
import api from "../../services/api";
import ReactInputMask from "react-input-mask";

const Usuario = () => {
  const [vnome, setNome] = useState('');
  const [vsenha, setSenha] = useState('');
  const [vemail, setEmail] = useState('');
  const [vnasc, setNasc] = useState('');
  const [vgenero, setGenero] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    // Inicializar um objeto de erros
    const newErrors = {};

    // Verificar se todos os campos estão preenchidos
    if (!vnome) newErrors.nome = "Nome é obrigatório.";
    if (!vemail) newErrors.email = "Email é obrigatório.";
    if (!vnasc) newErrors.nasc = "Data de Nascimento é obrigatória.";
    if (!vgenero) newErrors.genero = "Gênero é obrigatório.";
    if (!vsenha) newErrors.senha = "Senha é obrigatória.";

    // Atualizar estado dos erros
    setErrors(newErrors);

    // Se houver erros, interromper o envio do formulário
    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await api.post('User', {
        userName: vnome,
        userSenha: vsenha,
        userEmail: vemail,
        userNasc: vnasc,
        userGenero: vgenero
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="divum">
        <h1>Faça Seu Cadastro</h1>
      </div>
      <div className="app-container">

        <div className="form-group">
          <label className="label">Nome</label> <br />
          <input type="text" placeholder="Informe o seu Nome Completo" onChange={(e) => setNome(e.target.value)} />
          {errors.nome && <p className="error">{errors.nome}</p>}
        </div>

        <div className="form-group">
          <label className="label">Email</label> <br />
          <input type="text" placeholder="Informe o Email" onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label className="label">Data de Nascimento</label> <br />
          <ReactInputMask
            mask="99/99/9999"
            placeholder="DD/MM/AAAA"
            onChange={(e) => setNasc(e.target.value)}
          />
          {errors.nasc && <p className="error">{errors.nasc}</p>}
        </div>

        <div className="form-group">
          <label className="label">Gênero</label> <br />
          <select value={vgenero} onChange={(e) => setGenero(e.target.value)}>
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
          {errors.genero && <p className="error">{errors.genero}</p>}
        </div>

        <div className="form-group">
          <label className="label">Senha</label> <br />
          <input name="password" id="password" type="password" maxLength={8} onChange={(e) => setSenha(e.target.value)} />
          {errors.senha && <p className="error">{errors.senha}</p>}
        </div>

        <div className="button">
          <button onClick={handleSubmit}>Criar Conta</button>
        </div>

      </div>
      <div>  <img src={imagem} className="imagem" /></div>

      <div>
        
        <Rodape /></div>
    </div>
  );
};

export default Usuario;
 
 
/*export default Usuario;
/ npm install react-hook-form
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
/*import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import imagem2 from './appleinstale copy.png';
import imagem3 from './googleplayinstale copy.png';
import Rodape from '../Rodape';
import imagem from './fundoum,.png';
import api from "../../services/api"


const Usuario = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [vnome, setNome] = useState('');
  const [vsenha, setSenha] = useState('');
  const [vemail, setEmail] = useState('');
  const [vnasc, setNasc] = useState('');
  const [vgenero, setGenero] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/Users', {
        userName: vnome,
        userSenha: vsenha,
        userEmail: vemail,
        userNasc: vnasc,
        userGenero: vgenero
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="divum">
        <h1>Faça Seu Cadastro</h1>
      </div>
      <div className="app-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="label">Nome</label> <br />
            <input type="text" placeholder="Informe o seu Nome Completo" 
              onChange={(e) => setNome(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="label">Email</label> <br />
            <input type="text" placeholder="Informe o Email" 
              onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="label">Data de Nascimento</label> <br />
            <input type="text" placeholder="Informe a Data de Nascimento" 
              onChange={(e) => setNasc(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="label">Genero</label> <br />
            <input type="text" placeholder="Informe o Gênero" 
              onChange={(e) => setGenero(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="label">Senha</label> <br />
            <input name="password" id="password" type="password" 
              onChange={(e) => setSenha(e.target.value)} />
          </div>

          <div className="form-group">
            <button type="submit">Criar Conta</button>
          </div>
        </form>
      </div>
      <div> <img src={imagem} className="imagem" /></div>
      <div><Rodape /></div>
    </div>
  );
}

export default Usuario;
*/ 
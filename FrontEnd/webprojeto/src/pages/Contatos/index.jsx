
import  {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import React from 'react';
import './contatos.css';
import imagem2 from './appleinstale copy.png';
import imagem3 from './googleplayinstale copy.png';
import Rodape from '../Rodape';
import imagem from './fundoum,.png';


const contatos = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
      alert(JSON.stringify(data))  
  };


    return(
      <div>
      <div className="divum">
       <h1>Fale Conosco</h1>
       <h3>Tem Alguma reclamação ou sugestão?Quer pedir algum recurso novo?
        Sua opinião é muito importante para nós!
       </h3>
     </div>
   <div className="divpaicontatos">
    
     <div className="caixacontatos">
       <label className="label">Nome Completo</label> < br/>
       <input type="text" placeholder="Seu Nome"  {...register ("nome")} /> 
     </div>

     <div className="caixacontatos">
       <label className="label">Seu E-mail</label> < br/>
       <input type="email" placeholder="Seu Email"  {...register ("email")} /> 
     </div>
      
     <div className="caixacontatos">
       <label className="label">Telefone/Whatsapp</label> < br/>
       <input type="telefone" placeholder="Telefone/Whatsapp"  {...register ("telefone")} /> 
     </div>

     <div className="caixacontatos">
       <label className="label">Assunto</label> < br/>
       <input type="assunto" placeholder="Seu assunto"  {...register ("assunto")} /> 
     </div>

     <div className="caixacontatos">
       <label className="label">Sua Sugestão</label> < br/>
       <input className='Sugestão'  type="Sugestão" placeholder=" Sua reclamação ou sugestão"  {...register ("sugestão")} /> 
     </div>

     <div className="caixacontatos">
           
           <button onClick={() =>handleSubmit(onSubmit)()}>Enviar</button>
     </div>
    
        
   </div>
   <div>  <img src={imagem} className="imagem" /></div>
   
   
   
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
  
           <div><Rodape /></div>
          
          
   </div>
    

    )

}
export default contatos;
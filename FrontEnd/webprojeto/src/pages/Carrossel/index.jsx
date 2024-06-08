import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carrossel.css";
import imagem from './profdois.png';
import imagem3 from './profum.png';

const Carrossel = () => {
  const settings = {
    dots: true,
     //descrição:se true,exibe os pontos de navegação abaixo do carrossel
     speed: 500,
    infinite: true,
     //descrição:se true,faz com que o carrossel rode de maneia infinita
    speed: 500,
    //descrição:Define a velocidade da transição entre os slides em milissegundos
    slidesToShow: 1,
    //descrição:Quantidades de slides que serao passados por vez
    slidesToScroll: 1,
    //Descrição:Define o intervalo de tempo(milissegundos) entre a troca automatica dos slides
    autoplaySpeed: 2000,
    //Descrição:Ativa ou desativa a rotação automatica dos slides
    autoplay:true,
    //Descrição:Se "true",pausa o autoplay quando o mouse está sobre o carrossel
    pauseOnHover:true
  };

  return (
    
    <div className='divprofu' style  ={{ width: '100% '}}>
      <Slider {...settings}>
        

        
      <div  >
        <div className='profu' > <img src={imagem}  />    
         <h1>Décio Malta</h1>
         <h2 > "Com este app de pets, você pode acompanhar ao vivo os exames e consultas do seu animalzinho. Agora, você pode ver em tempo real o momento exato em que seu gato percebe que a balança do veterinário não é uma cama nova e confortável. Drama garantido!"</h2></div>
        </div>


        <div  >
        <div className='profu' > <img src={imagem3}  />    
         <h1>Antonio Luis Barboza</h1>
         <h2 > "Imagine um app de pets onde você pode agendar uma consulta e assistir ao vivo seu cachorro tentando convencer o veterinário de que o termômetro na verdade é um palito de sorvete gigante. Finalmente, uma maneira de ficar nervoso e rir ao mesmo tempo!"</h2></div>
        </div>
       
      </Slider>
    </div>
  );
}

export default Carrossel;
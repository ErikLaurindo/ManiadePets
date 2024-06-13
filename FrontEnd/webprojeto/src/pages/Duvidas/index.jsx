import style from './duvidas.css'
import Cachorro from "../imagens/cachorro_oficial.jpg"


 function Duvidas() { 
    return (
        <section className={style.container}>
            <h1>Dúvidas</h1>
            <TextoImagem imagem={Cachorro}
             titulo1="Tenho que pagar para utilizar o PetZillas?"
            texto1="Não, o Mania de Pets é gratuito para os tutores, não há nenhum tipo de cobrança, você cadastra seu pet e nós te auxiliamos nos controles de saúde e bem estar dos seus pets" titulo2="Quantos pets eu posso cadastrar?"texto2="Não há limite de pets cadastrados, você pode incluir todos os seus pets." titulo3="Posso compartilhar os dados dos meus pets com o veterinario?" texto3="Sim, com o PetZillas você pode compartilhar os dados de seu pet com o veterinário, um membro da família, um amigo, com a creche onde deixa o seu pet, enfim, da maneira que for necessária."/>    
            <TextoImagem imagem={Cachorro} 
            titulo1="Não encontrei a raça do meu pet. O que eu faço?"
            texto1="Temos uma base de dados de espécies e raças bem completa, caso não encontre no PetZillas, por favor, nos envie uma mensagem que rapidamente incluiremos, nosso e-mail de contato é: adm@petzillas.com" titulo2="Gostaria de sugerir uma nova função. Posso fazer isso?" texto2="Claro! Aqui no PetZillas estamos sempre buscando novas idéias de funcionalidades que possam auxiliar ainda mais no dia a dia dos cuidados de saúde e bem estar dos pets, conta para nós o que precisa ou qual sua idéia, nossa equipe fará de tudo para transformar essa idéia em uma nova funcionalidade, Chama a gente aqui no botãozinho do WhatsApp ou nos envia uma mensagem através do e-mail: adm@petzillas.com"/> 
            <TextoImagem imagem={Cachorro}
             titulo1="Se eu precisar trocar meu telefone, perco as informações cadastradas de meus pets?" 
            texto1="Claro! Aqui no PetZillas estamos sempre buscando novas idéias de funcionalidades que possam auxiliar ainda mais no dia a dia dos cuidados de saúde e bem estão, não precisa se preocupar, todas as informações estão protegidas e ficam salvas em nosso banco de dados, se por qualquer motivo precisar trocar seu telefone, basta acessar de qualquer outro dispositivo digitando seu “login” e “senha”, automaticamente todos os dados cadastrados de seus pets estarão disponíveis novamente, conta para nós o que precisa ou qual sua idéia, nossa equipe fará de tudo para transformar essa idéia em uma nova funcionalidade, Chama a gente aqui no botãozinho do WhatsApp ou nos envia uma mensagem através do e-mail: adm@petzillas.com"/> 



        </section>

    )
}

export default Duvidas;
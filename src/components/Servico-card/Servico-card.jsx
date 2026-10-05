import './Servico-card.css'

function Servico_card({icone,titulo,descricao}){
    return(

     
                <div className='servico-card'>
                    <span>{icone}</span>
                    <h3>{titulo}</h3>
                    <p>{descricao}</p>
                </div>


    );
}

export default Servico_card
import './Main.css'
import Servico_card from '../Servico-card/Servico-card'

const servicos = [
    {id: 1,icone:"⭐", titulo:"desing de interface", descricao:"telas claras,pensadas para o usuario"},
    {id: 2,icone:"🌙", titulo:"Responsividade", descricao:"mesmo site em qualquer tela"},
    {id: 3,icone:"🎊", titulo:"Performance", descricao:"paginas leves que carregam rápido"},
   
]


function Main(){
    return(
        <main className='main'>
            <section className='hero'>
                <h1>Criamos sites que funcionam</h1>
                <p>Layouts responsivos, rápidos e acessiveis para seu negocio crescer na web</p>
                <div className="hero-buttons">
                    <a href="#orçamento" className='btn-primary'>Peça um orçamento</a>
                    <a href="#portifolio" className='btn-secundary'>Ver portifólio</a>
                </div>
            </section>

            <section className='servico'>
            <h2>Nossos serviços</h2>

            <div className="servicos-grid">
               {
                servicos.map((servico)=> (
                    <Servico_card key={servico.id}
                    icone={servico.icone}
                    titulo={servico.titulo}
                    descricao={servico.descricao}/>
                ))
               }
            </div>
            
            </section>
        </main>
    )
}

export default Main

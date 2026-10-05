import './Main.css'
import Servico_card from '../Servico-card/Servico-card'

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
                <Servico_card 
                titulo="desing de interface"
                icone="🌹" 
                descricao="telas claras,pensadas para o usuario"/>

                <Servico_card 
                titulo="Responsividade"
                icone="⭐" 
                descricao="mesmo site em qualquer tela"/>

                <Servico_card 
                titulo="Performance"
                icone="🌙" 
                descricao="paginas leves que carregam rápido"/>

            </div>
            
            </section>
        </main>
    )
}

export default Main

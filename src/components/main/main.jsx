import './Main.css'

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

            <div className='servico-grid'>
                <div className='servico-card'>
                    <span>⭐</span>
                    <h3>Desing de interface</h3>
                    <p>telas claras,pensadas para o usuario</p>
                </div>

                <div className='servico-card'>
                    <span>❤️</span>
                    <h3>Responsividade</h3>
                    <p>mesmo site em qualquer tela</p>
                </div>

                <div className='servico-card'>
                    <span>🌙</span>
                    <h3>Performance</h3>
                    <p>paginas leves que carregam rápido</p>
                </div>
            </div>
            </section>
        </main>
    )
}

export default Main

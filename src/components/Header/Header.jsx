
function Header(){
    return(
        <header className="header">  
            <div className="logo">
                <img className="logo-icon" src="#" alt="logo" />
                <span className="logo-text">Studio alfa</span>
            </div>

            <nav className="nav">
                <a href="#">inicio</a>
                <a href="#">serviços</a>
                <a href="#">sobre</a>
                <a href="#" className="btn-contato">contato</a>
            </nav>
        </header>
    )

}

export default Header
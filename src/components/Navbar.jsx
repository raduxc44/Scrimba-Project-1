import logo from '../images/logo.png'

function Navbar() {
    return(
        <nav>
            <div className='logo-title'>
                <img src={logo} alt="React Logo" className='logo'/>
                <h3 className='logo-text'>ReactFacts</h3>
            </div>
            <h4 className='nav-title'>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar
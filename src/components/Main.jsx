import logo from '../images/react-icon-gray.png'

function Main() {
    return(
        <div className="main-content">
            <h1 className="main-title">Fun facts about React</h1>
            <div className='list-container'>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                <img src={logo} alt="React logo Grayed out" className='gray-logo'/>
            </div>
        </div>
    )
}

export default Main
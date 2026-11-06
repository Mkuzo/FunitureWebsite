import logo from '../assets/logo.png'
export default function Footer(){
    return(
        <div>
            <div className="footer-container">
                <footer>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="links">
                        <div className='i-container'>
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                            <i className="fa fa-twitter-square" aria-hidden="true"></i>
                        </div>
                        <form action="">
                            <input type="email" placeholder='Enter Email'/>
                            <input type="password" placeholder='Enter Password' />
                        </form>
                    </div>
                </footer>
            </div>
        </div>
    )
}
import { useNavigate } from 'react-router-dom'
import image1 from '../assets/image1.jpg'
import Footer from '../Componet/Footer'
export default function Home(){
    const navigate = useNavigate()
    function handleAbout(){
        navigate('/About')
    }
    function handleContact(){
        navigate('/Contact')
    }
    return(
        <div>
            <div className="home-container">
                <div className="home-card">
                    <div className="home-text">
                        <h1>For All Your Funitures Need</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <div className="buttons">
                            <div className="button1">
                                <button onClick={handleContact}>Contact Us</button>
                            </div>
                            <div className="button2">
                                <button onClick={handleAbout}>About Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="home-image">
                        <img src={image1} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
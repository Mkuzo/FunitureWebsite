import image2 from '../assets/image2.jpg'
import Footer from '../Componet/Footer'
export default function About(){
    return(
        <div>
            <div className="about-container">
                <div className="about-card">
                    <div className="about-image">
                        <img src={image2} alt="" />
                    </div>
                    <div className="about-text">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { context } from "../App"
export default function Nav(){
    const {setStore,store,remove,getItem,newThing,setNewThing} = useContext(context)
    const navigate = useNavigate()
    const location = useLocation()
    const [hide,setHide] = useState(false)
    const [activate,setActivate] = useState()
    function handleHome(){
        navigate('/')
    }
    function handleAbout(){
        navigate('/About')
    }
    function handleContact(){
        navigate('/Contact')
    }
    function handleProduct(){
        navigate('/Product')
    }
    function handleCart(){
        navigate('/Cart')
    }
    function handlehide(){
        if(hide === true){
            setHide(false)
        }else{
            setHide(true)
        }
    }
    useEffect(function(){
        const {pathname} = location
        setActivate(pathname)
    },[location])
    return(
        <div>
            <div className="navigation-wrapper">
                <div className="navigation">
                    <div className="logo">
                        <h1>Edge Cut</h1>
                    </div>
                    <ul>
                        <li onClick={handleHome} className={activate === '/' ? "active" : ""}>Home</li>
                        <li onClick={handleAbout} className={activate === '/About' ? "active" : ""}>About</li>
                        <li onClick={handleProduct} className={activate === '/Product' ? "active" : ""}>Product</li>
                        <li onClick={handleCart} className={activate === '/Cart' ? "active" : ""}>Cart <span>{store.length}</span> </li>
                        <li onClick={handleContact} className={activate === '/Contact' ? "active" : ""}>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="smaller-device">
                <div className="logo">
                    <h1>Edge Cut</h1>
                </div>
                <div className="block">
                    <button onClick={handlehide}>Links</button>
                    {hide === true ?                   
                        <div className="drop-down">
                            <ul>
                                <li onClick={handleHome}>Home</li>
                                {/* <br /> */}
                                {/* <br /> */}
                                {/* <br /> */}
                                <li onClick={handleAbout}>About</li>
                                <li onClick={handleProduct}>Product</li>
                                <li onClick={handleCart}> Cart <span>{store.length}</span> </li>
                                <li onClick={handleContact}>Contact Us</li>
                            </ul>
                        </div>:""
                        }
                </div>
            </div>
        </div>
    )
}
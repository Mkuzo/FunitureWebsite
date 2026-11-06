import { useState } from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'
import image11 from '../assets/image11.jpg'

import Footer from '../Componet/Footer'
import { useContext } from 'react'
import { context } from '../App'
export default function Product(){
    const {store,setStore} = useContext(context)
    const productData = [{
        id:1,
        image:image1,
        text:"Sofa",
        price: 100
    },{
        id:2,
        image:image2,
        text:"Stair",
        price: 150
    },{
        id:3,
        image:image3,
        text:"Sofa",
        price: 450
    },{
        id:4,
        image:image4,
        text:"Table",
        price: 400
    },{
        id:5,
        image:image5,
        text:"Sofa",
        price: 300
    },{
        id:6,
        image:image6,
        text:"Sofa",
        price: 600
    },{
        id:7,
        image:image7,
        text:"Sofa",
        price: 130
    },{
        id:8,
        image:image8,
        text:"Chair",
        price: 200
    },{
        id:9,
        image:image9,
        text:"Sofa",
        price: 400
    },{
        id:10,
        image:image10,
        text:"Chair",
        price: 300
    },{
        id:11,
        image:image11,
        text:"Bed",
        price: 700
    }]
    function buy(e){
        if(store.length > 0){
            store.map(function(product){
                if(e.id !== product.id){
                    setStore(function(pre){
                        return([...pre,e])
                    })
                }else{
                    alert("Already Exits")
                }
            })
        }else{
            setStore([e])
        }
        console.log(e)
    }
    return(
        <div>
            <div className="product-container">               
                {productData.map(function(data){
                    return(
                        <div className="product-card" key={data.id}>
                            <div className="product-image">
                                <img src={data.image} alt="" />
                            </div>
                            <div className="product-text">
                                <div className="product-price">
                                    <h1>{data.text}</h1>
                                    <p>Price: ${data.price}</p>
                                </div>
                                <button onClick={function(){
                                    buy(data)
                                }}>Buy</button>
                            </div>
                        </div> 
                    )

                })}
            </div>
            <Footer></Footer>
        </div>
    )
}
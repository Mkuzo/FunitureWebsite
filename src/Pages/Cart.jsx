import { useContext, useEffect} from "react"
import { useState } from "react"
import { context } from "../App"
export default function Cart(){
    const {setStore,store,remove,getItem,newThing,setNewThing} = useContext(context)
    const [total,setTotal] = useState()
    function displayTotal(){
        if(store.length > 0){
            let sum = 0
            store.map(function(data){
                sum += data.price
            })
            setTotal(sum)
        }else{
            setTotal(0)
        }
    }
    useEffect(function(){
        displayTotal()
    },[store])
    useEffect(function(){
        getItem()
    },[])
    return(
        <div className="holder">
            <div className="product-container">               
                {newThing.map(function(data){
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
                                    remove(data)
                                }}>Remove</button>
                            </div>
                        </div> 
                    )

                })}
            </div>
            <p>Total: {total}</p>
        </div>
    )
}
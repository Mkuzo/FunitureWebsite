import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Nav from './Componet/Nav'
import AppRoute from './Componet/AppRoute'
import { createContext } from 'react'
export const context = createContext()
function App() {
  const [count, setCount] = useState(0)
  const [store,setStore] = useState([])
  const [newThing,setNewThing] = useState([])
  useEffect(function(){
    localStorage.setItem('store',JSON.stringify(store))
  },[store])
      function getItem(){
        const newItem = JSON.parse( localStorage.getItem('store'))
        alert('newItem')
        console.log('newItem',newItem)
        console.log('newThing',newThing)
        setNewThing(newItem)
    }
    function remove(e){
        if(store.length > 0){
            const item = store.filter(function(res){
                return(
                    res.id !== e.id
                )
            })
            console.log('item',item)
            setStore(item)
            getItem()
        }else{
            setNewThing([])
            localStorage.removeItem('store')
            alert('Empty')
        }
    }
  return (
    <>
      <context.Provider value={{store,setStore,remove,getItem,newThing,setNewThing}}>
        <Nav></Nav>
        <AppRoute></AppRoute>
      </context.Provider>
    </>
  )
}
export default App

import { useEffect, useState } from "react"
import Item from "./Item"
import PRODUCTS from "../../data.js"

const ItemList = () => {

    const [item, setItem] = useState([])

    useEffect(() => { getProducts().then((res)=>{
      setItem(PRODUCTS)
    }) } , [])
    
    const getProducts = /*async*/ () => {
        /*const URL = 'datos.json'
        const resp = await fetch(URL)
        const data = await resp.json()
        setItem(data)
        console.log(data)*/
        return new Promise((resolve,reject)=>{
              resolve(item)
      }).catch((err)=>console.log(err))
        
    }

  return (
        <>
          {item.map(i => <Item key={i.id} {...i}/> )}
        </>
  )
}
export default ItemList
{/* filtra categorias o mustra todos los productos del catalogo */}
import { useEffect, useState } from "react"
import Item from "./Item"
import PRODUCTS from "../../data.js"
import { useParams } from "react-router-dom"

const ItemList = () => {

    const [item, setItem] = useState([])
    const { categoryId } = useParams()

    useEffect(() => { getProducts().then((res)=>{
      setItem(res)
    }) } , [categoryId])

    
    const getProducts = () => {
        if(categoryId!=undefined){
          const filtrado = PRODUCTS.filter((element) => element.tipo.includes(categoryId))
          return new Promise((resolve,reject)=>{
            resolve(filtrado)
          }).catch((err)=>console.log(err))
        }

        return new Promise((resolve,reject)=>{
              resolve(PRODUCTS)
      }).catch((err)=>console.log(err))
    }

  return (
        <>
          {item.map(i => <Item key={i.id} {...i}/> )}
        </>
  )
}
export default ItemList
import { useEffect, useState } from "react"
import Item from "./Item"
import PRODUCTS from "../../data.js"
import { useParams } from "react-router-dom"


const Temp = () => {

    const { categoryId } = useParams()
    console.log(categoryId);
    useEffect(() => {  getFiltrado()  }, [categoryId])
    const getFiltrado = () => {
      const filtrado = PRODUCTS.filter((element) => element.tipo.includes(categoryId))
      console.log(filtrado)
    }

  return (
        <>
        </>
  )
}
export default Temp
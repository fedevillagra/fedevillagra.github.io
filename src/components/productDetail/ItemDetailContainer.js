{/* filtra el producto seleccionado */}
import { useEffect, useState } from "react"
import PRODUCTS from "../../data"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = (tipo) => {

    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState([])

    useEffect(() => { getDetail().then((res)=>{
        setItemDetail(res)
    }) } , [id])
    
    const getDetail = () => {
        const item = PRODUCTS.find (p=>p.id==id)
        return new Promise((resolve,reject)=>{
                resolve(item)
        }).catch((err)=>console.log(err))
    }

  return (
        <div>
          <ItemDetail key={itemDetail.id} {...itemDetail}/>
        </div>
  )
}
export default ItemDetailContainer
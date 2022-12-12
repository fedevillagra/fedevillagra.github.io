import { useEffect, useState } from "react"
import PRODUCTS from "../../data"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const [itemDetail, setItemDetail] = useState([])

    useEffect(() => { getDetail().then((res)=>{
        setItemDetail(res)
    }) } , [itemId])
    
    const getDetail = () => {
        const item = PRODUCTS.find (p=>p.id==itemId)
        return new Promise((resolve,reject)=>{
                resolve(item)
        }).catch((err)=>console.log(err))
    }

  return (
        <div>
          {<ItemDetail key={itemDetail.id} {...itemDetail}/>}
        </div>
  )
}
export default ItemDetailContainer
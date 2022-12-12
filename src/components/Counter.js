import { useState } from "react"

const Counter = ({stock}) => {

    const [count, setCount] = useState(1)

    const add = () => { (count < stock) && setCount( (c) => c + 1 ) }
    const less = () => { (count > 1) && setCount((c) => c - 1) }

  return (
    <div>
        <div className="input-group">
            <button className="btn btn-ghost" onClick={less}>-</button>
            <span className="bg-white">{count}</span>
            <button className="btn btn-ghost" onClick={add}>+</button>
        </div>
    </div>
  )
}
export default Counter
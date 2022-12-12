import { useState } from "react"
{/* El Contador */}
const Counter = ({stock}) => {

    const [count, setCount] = useState(1)

    const add = () => { (count < stock) && setCount( (c) => c + 1) }
    const less = () => { (count > 1) && setCount((c) => c - 1) }

  return (
    <div>
        <div className="input-group">
            <div className="btn btn-ghost" onClick={less}>-</div>
            <span className="bg-white">{count}</span>
            <div className="btn btn-ghost" onClick={add}>+</div>
        </div>
    </div>
  )
}
export default Counter
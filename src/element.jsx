import css from './element.css'
import { useContext } from 'react'
import Context from './contex'
const Element = ({data}) =>{
    const [modal , setModal] = useContext(Context)
    const handle = () => {
        setModal([true,data])
    }
    return(
        <button className={'containers' + ' ' +data.block} onClick={() => handle() }>
            <h3>{data.symbol}</h3>
            <h4>{data.name} </h4>
            <h5>Mass:{Math.round(data.atomic_mass * 1000) / 1000}</h5>
        </button>
    )
}
export default Element;
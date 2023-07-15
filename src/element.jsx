import css from './element.css'
const Element = ({data}) =>{
    return(
        <div className={'containers' + ' ' +data.block}>
            <h3>{data.symbol}</h3>
            <h4>{data.name} </h4>
            <h5>Mass:{Math.round(data.atomic_mass * 1000) / 1000}</h5>
        </div>
    )
}
export default Element;
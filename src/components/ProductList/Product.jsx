const Product = ({ data,onMove }) => {

    return <div >
        <img src={data.photo} />
        <p>{data.title}<strong>{data.price} USD</strong></p>
        <button onClick={()=>onMove(data)}>Move</button>
    </div>

}

export default Product
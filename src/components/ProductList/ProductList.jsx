 import Product from "./Product"
 
 const ProductList=({items,onMove})=>{

    return <div>

        <h3>Product List</h3>
        <div className="list">
           {
            items.map(item=><Product key={item.id} data={item} onMove={onMove} />)
           }
        </div>
    </div>
}

export default ProductList
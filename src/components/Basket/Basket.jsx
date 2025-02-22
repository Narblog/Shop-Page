import BasketItem from "./BasketItem"

 const Basket=({items})=>{
    return <div>
        <h3>Basket</h3>
        <table>
        <thead>
          <tr >
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {
            items.map(item=><BasketItem key={item.id} product={item}/>)
         }
        </tbody>
      </table>
    </div>
}
export default Basket
 const BasketItem=({product})=>{
    return <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price} USD</td>
              <td>{product.quantity}</td>
              <td>{product.quantity*product.price} USD</td>
              <td>
                <button >+</button>
                <button >-</button>
                <button >x</button>
              </td>
            </tr>
   
}

export default BasketItem
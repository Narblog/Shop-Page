import { useState } from 'react'
import './App.css'
import ProductList from "./components/ProductList/ProductList"
import Basket from './components/Basket/Basket'

function App() {
  const [products,setProducts]=useState([
    {
      id: 101,
      title: "Psychology 9",
      price: 30,
      photo: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNTM1LWJvb2stMDJhXzEucG5n.png"
    },
    {
      id: 102,
      title: "Psychology 1",
      price: 25,
      photo:  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNTM1LWJvb2stMDJhXzEucG5n.png"
    },
    {
      id: 103,
      title: "Psychology 2",
      price: 40,
      photo: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNTM1LWJvb2stMDJhXzEucG5n.png"
    },
    {
      id: 104,
      title: "Psychology 3",
      price: 20,
      photo:  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNTM1LWJvb2stMDJhXzEucG5n.png"
    },
    {
      id: 105,
      title: "Psychology 4",
      price: 15,
      photo:  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNTM1LWJvb2stMDJhXzEucG5n.png"
    },
    {
      id: 106,
      title: "Psychology 5",
      price: 35,
      photo:  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNTM1LWJvb2stMDJhXzEucG5n.png"
    },
    {
      id: 107,
      title: "Psychology 6",
      price: 45,
      photo:  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNTM1LWJvb2stMDJhXzEucG5n.png"
    },
    {
      id: 108,
      title: "Psychology 7",
      price: 50,
      photo:  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNTM1LWJvb2stMDJhXzEucG5n.png"
    }
   
  
  ])
  const[basket,setBasket]=useState([])
  const moveToCard=product=>{
   setBasket(prev=>{
     let found=prev.find(item=>item.id==product.id)
     if(!found){
      return([...prev,{...product,quantity:1}])
     }
     return prev.map(item=>item.id===product.id?{...item,quantity:item.quantity+1}:item)
   })
  }
  const incrementQuantity=(id)=>{
    setBasket(prev=>
      prev.map(item=>
        item.id===id?{...item,quantity:item.quantity+1}:item
      )
    )
  }
  const decrementQuantity=(id)=>{
    setBasket(prev=>
      prev.map(item=>
        item.id===id && item.quantity>1?{...item,quantity:Math.max(item.quantity-1,1)}:item
      )
    )
  }
  const removeFromCard=(id)=>{
    setBasket(prev=>prev.filter(item=>item.id !==id))
  }
  return (
    <>
    <h1>Online Shop</h1>
   <div className='row'>
    <ProductList items={products} onMove={moveToCard}/>
    <Basket items={basket}/>

   </div>
      
    </>
  )
}

export default App




/*

  <div className='row'>
    <div>
      <h3>products</h3>
      <div className="list">
        {
          products.map(item=>{
            return  <div key={item.id}>
                <img src={item.photo}/>
                <p>{item.title}<strong>{item.price} USD</strong></p>
                <button onClick={()=>moveToCard(item)}>move</button>
              </div>
            
          })
        }
      </div>
    </div>
    <div>
      <h3>basket</h3>
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
            basket.map(item=><tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price} USD</td>
              <td>{item.quantity}</td>
              <td>{item.quantity*item.price} USD</td>
              <td>
                <button onClick={()=>incrementQuantity(item.id)}>+</button>
                <button onClick={()=>decrementQuantity(item.id)}>-</button>
                <button onClick={()=>removeFromCard(item.id)}>x</button>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
    </div>
      

*/
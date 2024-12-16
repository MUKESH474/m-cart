import { Fragment } from "react"
import {useLocation } from "react-router-dom";
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
function Cart1({cartItems,setCartItems}){
    const[data,setdata]=useState()
    const [qty,setQty] =useState(1)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
        useEffect(()=>{
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(ans=>setdata(ans))
            .catch(erre=>console.log(erre))
        },[])
        function increaseQty(){
            if(data.rating.count == qty){
                return;
            }
            setQty((state)=> state+1)
        }
        function decreaseQty(){
            if(qty >1){
                setQty((state)=>state-1)
            }
        }
        function removelist(id){
            const newsetdata=data.filter((l)=>l.id !== id)
            setdata(newsetdata);
    }
    return(
        <div className="container-fluid cartd1">
        <h2 className="mt-5">Your Cart: <b>{cartItems}</b></h2>
        
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
                { data ? (data.map((item)=>(<div key={item.id}>
                (<Fragment>

                <hr />
                <div className="cart-item">
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <img src={item.image} alt="Laptop" height="90" width="115" />
                        </div>


                        <div className="col-5 col-lg-3">
                            <a href="#">{item.title}</a>
                        </div>

                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">{item.title}</p>
                        </div>

                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus ms-4" onClick={decreaseQty}>-</span>
                                <input type="number" className="form-control count ms-4 mt-2" value="1" readOnly />

								<span className="btn btn-primary plus ms-4"  onClick={increaseQty}>+</span>
                            </div>
                        </div>

                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <Button variant="outline-danger" onClick={()=>removelist(item.id)}>Remove</Button>
                        </div>

                    </div>
                </div>
                
                </Fragment>)
                </div>))):(<p>loading</p>)}
            </div>

            <div className="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span className="order-summary-values">1 (Units)</span></p>
                    <p>Est. total: <span className="order-summary-values">$245.67</span></p>
    
                    <hr />
                    <button id="checkout_btn" className="btn btn-primary btn-block">Place Order</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Cart1  
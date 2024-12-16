import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate,useLocation,createSearchParams, Link } from "react-router-dom";
import { MdStarHalf } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import {toast} from 'react-toastify'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Header from "./header";

function Productdata({cartItems,setCartItems}){
    const [show, setShow] = useState(true);
    const[data,setdata]=useState([])
    const [qty,setQty] =useState(1)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(ans=>setdata(ans))
        .catch(error=>console.log(error))
    },[])
    const navigate=useNavigate()
        const navi=(ids)=>{
        console.log("see",ids);
        setCartItems(()=>{
            navigate({
                pathname:'/cart',
                search:createSearchParams({id:ids}).toString(),
            })
        },4000)
        }
    function addtocart(){
        const itemExits= cartItems.find((item)=>item.data.id == data.id)
        if(!itemExits){
            const newItem = {data,qty}
            setCartItems((state)=>[...state,newItem])
        }
    }
    
    function removelist(id){
        const newsetdata=data.filter((l)=>l.id !== id)
        setdata(newsetdata);
    }
    function mes(){
        toast.success("your order is Placed")
        setTimeout(()=>{
            navigate({
                pathname:'/'
            })
        },4000)
    }
    
    const nav=useNavigate()
    return(
        
        <div className=" container-fluid" >
           
            <>
            
                <div className="row proddata1 " >
                <h1 className=" productdatatitle">Cart</h1>
                    <table className="carttable1">
                        <td>
                        <img src={data.image} className="cartimage"/>
                        </td>
                    <div className="col-12 col-lg-12 col-sm-12 producttile ">
                        <td>
                        <h4 className="carttaite">{data.title}</h4>
                        </td>
                        <td>
                        <p className="starcl4">Price: ${data.price}</p>
                        </td>
                        <td>
                        <p className="starcl5" >Rating:{data.rating && data.rating.rate}  <MdStarHalf className='star' /></p>
                        </td>
                        <td>
                        <p  className="starcl6">Count:{data.rating && data.rating.count} <FaCartPlus /></p>
                        </td>
                        <td>
                        <Button className="mt-4 starcl7" variant="outline-danger" onClick={()=>removelist(setdata.id)}  >remove</Button>
                        </td>
                        <td>
                        <div className="col-12 col-lg-12 my-4 starcl8">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span className="order-summary-values">1 (Units)</span></p>
                    <p>Est. total: <span className="order-summary-values">${data.price}</span></p>
                    <hr />
                    < ToastContainer position="top-center" theme="colored" limit={3}  transition="Zoom" autoClose={4000} />
                    
                    <button id="checkout_btn" className="btn btn-primary btn-block" onClick={mes}    > 
                        
                        Place Order</button>
                </div>
            </div>
                        </td>



                    </div>
                        {/* </tr> */}
                    </table>
                    
                </div>
                </>
        </div>
    )
}
export default Productdata;
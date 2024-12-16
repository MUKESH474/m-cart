import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate,useLocation,createSearchParams } from "react-router-dom";
import { MdStarHalf } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
function Productdata({cartItems,setCartItems}){
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
        navigate({
            pathname:'/cart',
            search:createSearchParams({id:ids}).toString(),
        })
        }
    function addtocart(){
        const itemExits= cartItems.find((item)=>item.data.id == data.id)
        if(!itemExits){
            const newItem = {data,qty}
            setCartItems((state)=>[...state,newItem])
        }
    }
    function increaseQty(){
        if(data.rating && data.rating.count == qty){
            return;
        }
        setQty((state)=> state+1)
    }
    function decreaseQty(){
        if(qty >1){
            setQty((state)=>state-1)
        }
    }
    const nav=useNavigate()
    return(
        <div className=" container-fluid" >
            <>
                <div className="row proddata" >
                <h1 className=" productdatatitle">Product Detail</h1>
                    <div className="col-5 col-lg-5 col-sm-10">
                        <img src={data.image} className="productdataimage"/>
                    </div>
                    <div className="col-7 col-lg-7 col-sm-7 producttile ">
                        <h4  >{data.title}</h4>
                        <p className="starcl">Price: ${data.price}</p>
                        <p className="starcl" >Rating:{data.rating && data.rating.rate}  <MdStarHalf className='star' /></p>
                        <p  className="starcl">Count:{data.rating && data.rating.count} <FaCartPlus /></p>
                        <p  className="starcl">{data.description}</p>
                        <div className="stockCounter ">
                            <span className="btn btn-danger minus ms-4" onClick={decreaseQty}>-</span>
                            <input type="number" className="form-control count ms-4 mt-2" value={qty} readOnly />
                            <span className="btn btn-primary plus ms-4" onClick={increaseQty}>+</span>
                        </div>
                        <Button className="mt-4" variant="outline-warning" onClick={(event)=>navi(data.id)} disabled={data.rating && data.rating.count == 0}  >Add to cart</Button>
                        
                    </div>
                </div>
                </>
        </div>
    )
}
export default Productdata;
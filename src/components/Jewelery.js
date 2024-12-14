import { useEffect, useState } from 'react'
import { MdStarHalf } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Jewelery(){
    const[data,setdata]=useState()
        useEffect(()=>{
            fetch("https://fakestoreapi.com/products/category/jewelery")
            .then(res=>res.json())
            .then(ans=>setdata(ans))
            .catch(ere=>console.log(ere))
        },[])
    return(
        <div >
            <div className=' container-fluid allcarddet '>
                <div className='row '>
                <h1 className='detproducts'>Jewelery </h1>
                {/* <div className=' col-md-3 col-lg-4 col-sm-10 d-flex ' style={{border:'1px solid'}}> */}
            {data ? (<ul className='cardherocad' >{data.map((item)=>(<div key={item.id}>
                <Card  className='carditem '>
                    <Card.Img variant="top" src={item.image}  className='herocartimg'/>
                    <Card.Body className='cardbodyhero'>
                        <Card.Title className='titleheor'>{item.title}</Card.Title>
                        <div className='datacothero'>
                        <p  className='cardbodyhero'><b>Price :</b> {item.price} $ </p>
                        <p> <b>Rating :</b> {item.rating.rate} <MdStarHalf className='star' /> </p>
                        <p> <b>Count :</b> {item.rating.count} <FaCartPlus /> </p>
                        <Button className='button'>View Products</Button>
                        </div>
                    </Card.Body>
                    </Card>
            </div>))}</ul>):(<p>Loading...</p>)}
                {/* </div> */}
                </div>
            </div>
        </div>
    )
}
export default Jewelery;

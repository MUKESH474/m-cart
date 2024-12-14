import img1 from '../img/img2.webp'
import img2 from '../img/img4.jpg'
import img3 from '../img/img5.jpg'
import img4 from '../img/img6.jpg'
import img5 from '../img/img7.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
import { MdStarHalf } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
function Hero(){
    const[data,setdata]=useState()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(ans=>setdata(ans))
        .catch(ere=>console.log(ere))
    },[])
    return(
        <div className='hero'> 
        
            <div>
            <Carousel className='cardhero'>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 img-fluid"
                        src={img2}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h1 className='cardteaxt'>Electronics</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h1 className='cardteaxt'>Jewelery</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h1 className='cardteaxt'>
                        Men's clothing
                        </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img5}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h1 className='cardteaxt'>
                        Women's clothing
                        </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <img src={img1 }  className=' img-fluid heros1'/>

                <div className=' container-fluid '>
                <div className='row '>
                <h1 className='allproducts' id='alldata'> All Products </h1>
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
export default Hero;






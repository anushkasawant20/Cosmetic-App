import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import { useEffect } from "react";
import Search from "./Search";

function Userproduct(){
  useEffect(()=>{
    fetchData();
    })

  const navigate = useNavigate();
  useEffect(()=>{
      let username = sessionStorage.getItem('username');
      if(username === ' ' || username === null){
          navigate('/login');
      }
  },[])

    const[product,setProduct] = useState([]);

    const fetchData = async()=>{
          const res = await axios.get('http://localhost:8080/product/getAllProduct');
          console.log(res.data);
          setProduct(res.data);
    }

    return(
        <>
        <br/><br/><br/><br/>
        <Search />

          {
            product && 
            product.map((product,ind)=>{
                return(

                <>

<div className="card" style={{width:250, height:500}} id="div2">
  <img className="card-img-top" src={product.image}  style={{height:250,width:250}} id="img2"/>
  <div className="card-body">
    <h3>{product.name}</h3>
    <p className="card-text">{product.category}</p>
    <h3>{product.price}</h3>
    <Link to={`/product/${product.id}`}> <button className="btn btn-success">PlaceOrder</button></Link>
                
   
    
  </div>
                </div>
                </>
                )
            })
          }
          
       
        
    </>
    );
}

export default Userproduct;
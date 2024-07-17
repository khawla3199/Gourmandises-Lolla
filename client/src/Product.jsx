import React, { useState } from 'react'
import axios from 'axios'
import  { useEffect } from "react";

function Product() {
const[dataa,setdata]=useState([])
const[namee,setnamee]=useState('')
const[caracter,setcaracter]=useState('')
const[price,setprice]=useState('')
const[description,setdescription]=useState('')
const[imageUrl,setimageUrl]=useState('')
const[updnamee,setupdnamee]=useState('')
const[updcaracter,setupdcaracter]=useState('')
const[updprice,setupdprice]=useState('')
const[upddescription,setupddescription]=useState('')
const[updimageUrl,setupdimageUrl]=useState('')


    useEffect(()=>{
        axios.get('http://localhost:8080/postr/getall')
        .then(
            (data)=>{
                console.log(data.data)
                setdata(data.data)
            }
        )
        .catch((err)=>{
            console.error(err)
        })
   },[])
   const handledelete = (id) => {
    axios
      .delete(`http://localhost:8080/postr/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const posts=()=>{

    axios.post('http://localhost:8080/postr/add',{imageUrl:imageUrl,caracter:caracter,price:price,description:description,name:namee})
    .then(
        (result)=>{
            console.log(result)
        }
    )
    .catch((err)=>{
        console.log(err)
    })
  }
  const handleupdate = (id) => {
    axios
      .put(`http://localhost:8080/postr/put/${id}`, {imageUrl:imageUrl,caracter:updcaracter,price:updprice,description:upddescription,name:namee})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  return (
    <div>
        <div> Post  :
        <input
              onChange={(e) => {
                setnamee(e.target.value)
              }}
              placeholder="name"
            ></input>
            <input
              onChange={(e) => {
                setcaracter(e.target.value)
              }}
              placeholder="caracter"
            ></input>
            <input
              onChange={(e) => {
                setprice(e.target.value)
              }}
              placeholder="price"
            ></input>
            <input
              onChange={(e) => {
                setdescription(e.target.value)
              }}
              placeholder="description..."
            ></input>
            <input
              onChange={(e) => {
                setimageUrl(e.target.value)
              }}
              placeholder="imageUrl"
            ></input>
            <button onClick={()=>{posts()}}>Post Now!</button>
        </div>
        <body>
          
        </body>
        <header>
           <button>Sign In</button>
              <h1>Welcome to the Pastry Shop</h1>
              <div id="contact">
                <p>Gourmandises Lolla</p>
                <p>contact: 56742511</p>
                <p>place: tunis</p>
              </div>

            </header> 

        
      {dataa.map((e)=>(
                  <div class="grid-container">
                  <div class="grid-item">
                  <div className="product-info">
              
              <div className="product-types">
              <h3 className="product-name">{e.name}</h3>
             
                <img src={e.imageUrl}></img>
               
              <p className="product-caracter">{e.caracter}</p><br />
                <br></br>
                   <h6>{e.price}DT</h6> 
                <p>{e.description}</p>
                <button onClick={() => { handledelete(e._id); } }>Delete it!</button>
                <button onClick={() => { handleupdate(e._id); } }>Update Now !</button>
                <div> Update  :
                  <input
                   onChange={(e) => {
                      setupdnamee(e.target.value);
                    } }
                    placeholder="name"
                  ></input>
                  <input
                    onChange={(e) => {
                      setupdcaracter(e.target.value);
                    } }
                    placeholder="caracter"
                  ></input>
                  <input
                    onChange={(e) => {
                      setupdprice(e.target.value);
                    } }
                    placeholder="price"
                  ></input>
                  <input
                    onChange={(e) => {
                      setupddescription(e.target.value);
                    } }
                    placeholder="description..."
                  ></input>
                  <input
                    onChange={(e) => {
                      setupdimageUrl(e.target.value);
                    } }
                    placeholder="imageUrl"
                  ></input>

                </div>


              </div>
            </div>
                  </div>
                 
                </div>
         
        
      ))}
    </div>
  )
}

// export default Product
// 

//     return (
//  
// );
// }
 export default Product;

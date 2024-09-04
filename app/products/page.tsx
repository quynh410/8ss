"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [products,setProducts]= useState<any>();
  // đi gọi API lấy data để render ra màn hình
  const handleClick=(id:number)=>{
    console.log("id",id)
    axios.get(`http://localhost:3000/api/products/${id}`)
    .then((res)=>{
      console.log(res.data.data);
      
    })
    .catch((err)=>{
      console.log(err);
      ;
    })
  }
  useEffect(()=>{
    axios.get("http://localhost:3000/api/products")
    .then((response)=>{
      console.log(response.data)
      setProducts(response.data.data)
    },)
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
      Danh sách Users 
      {
        products?.map((item:any)=>{
          return (
          <div key={item.id}>
            <h1> Tên: {item.name}</h1>
            <p> Giá : {item.price}</p>
            <button onClick={()=>handleClick(item.id)}>Chi tiết</button>
            <hr /> <br />
          </div>
          )
        })
      }
    </div>
  )
}

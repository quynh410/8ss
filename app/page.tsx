import React from 'react'
import fs from 'fs'
import path from 'path'
export default function page() {
  const filePath = path.join(process.cwd(),"/app/products/product.txt")
  const data  = fs.readFileSync(filePath, "utf8");
  // console.log("file duoc doc voi noi dung :",data);

  // const data = fs.writeFileSync(filePath, "Xin chao!","utf8");
  // console.log("Da ghi du lieu xong" ,data);

  
  return (
    <div>
      TRANG CHU
    </div>
  )
}

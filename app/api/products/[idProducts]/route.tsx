import { log } from "console";
import { NextResponse } from "next/server";
import React from "react";
let products = [
  { id: 1, name: "iphone 5", price: 5000 },
  { id: 2, name: "iphone 13", price: 6000 },
  { id: 3, name: "iphone 15", price: 9000 },
];
export async function GET(req: any, res: any) {
  let findItem = products.find((item) => {
    return item.id == +res.params.idProducts;
  });
  return NextResponse.json({
    message: "Lấy danh sách 1 sản phẩm thành công!",
    data: findItem,
  });
}
export async function POST(req: any, res: any) {
    let data = await req.json()
    console.log(data);
    
  return NextResponse.json({
    message: "Thêm dữ liệu thành công",
    data: data,
  });
}

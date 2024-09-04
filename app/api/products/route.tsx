import { NextResponse } from "next/server"


export async function GET() {
    let products = [
        {id:1,name:"iphone5",price: 5000},
        {id:2,name:"iphone13",price: 6000},
        {id:3,name:"iphone15",price: 9000}
    ]
    return NextResponse.json({
      message: "Lấy danh sách sản phẩm thành công!",
      data: products
    })
}
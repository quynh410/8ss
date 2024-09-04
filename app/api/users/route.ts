import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

const users = [
    {id:1,name:'Jonj Smith'},
    {id:2,name:'Jane Doe'},
    {id:3,name:'Bob Johnson'},
    {id:4,name:'Alice Wilson'},
    {id:5,name:'Charlie Brown'}
]

export async function GET(){
    return NextResponse.json({data: users});
}
export async function POST(request: NextRequest ) {
  //Lấy dự liệu từ client
const dataClient = await request.json();
//Push dữ liệu lấy được vào trong mảng
users.push(dataClient);
//Trả về mảng mới vừa đươc thêm vào 
return NextResponse.json( {newUsers: users } );
}
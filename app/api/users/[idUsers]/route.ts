import { NextRequest, NextResponse } from "next/server"

const users = [
    {id:1,name:'Jonj Smith'},
    {id:2,name:'Jane Doe'},
    {id:3,name:'Bob Johnson'},
    {id:4,name:'Alice Wilson'},
    {id:5,name:'Charlie Brown'}
]
export async function GET(request:NextRequest){
    //lấy query params từ URL
    const url = new URL(request.url)
    const nameQuery = url.searchParams.get('name')
    // Nếu ko có trả về người dùng 
    if(!nameQuery){
        return NextResponse.json({data:users})
    }
    //tìm kiếm người dùng theo tên
    const fillterUsers = users.filter((user)=>{
        return user.name.toLowerCase().includes(nameQuery.toLowerCase())
    })
    //trả về danh sách người dùng phù hợp 
    return NextResponse.json({data:fillterUsers})
}


export async function DELETE(req:NextRequest, params: {params:{id:string,name:string}}){
    // lấy id cùa từng params 
     const id = params.params.id
     // lọc những bản ghi  có id khác với id cần xóa 
     const usersFilter = users.filter((users) => users.id!== +id)
     // trả về danh sách người dùng sau khi xóa
    return NextResponse.json ({newUsers:usersFilter, message:"Xóa thông tin thành công"})
}

export async function PUT(request:NextRequest, params: { params:{id:string, name:string}}){
    //lấy id của từng params
    const id = params.params.id
    const dataClient = await request.json();
    //Tìm kiếm user theo id trong mảng
    const findIndex = users.findIndex((users) => users.id == +id);
    //Cập nhật thông tin user
    if(findIndex !== -1){
        //cập nhât dữ liệu , gán lại giá trị 
        users[findIndex].name = dataClient.name
        return NextResponse.json({data : users})
    }
}

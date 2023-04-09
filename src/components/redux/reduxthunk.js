import axios from 'axios'
import { createAsyncThunk} from '@reduxjs/toolkit'

const getElement=createAsyncThunk("/getelement",async()=>{
   const response= await axios.get("https://webshopapp.herokuapp.com/shop")
   return response.data
}
)
const getUsers=createAsyncThunk("/getusers",async()=>{
   const response= await axios.get("https://webshopapp.herokuapp.com/shop/getusers")
   return response.data
}
)
const AddUser=createAsyncThunk("/adduser",async(item)=>{
   const response= await axios.post("https://webshopapp.herokuapp.com/shop/users", item)
    return response.data
 })
 const loginuser=createAsyncThunk("/loginuser",async(item)=>{
   const response= await axios.post(`https://webshopapp.herokuapp.com/shop/login`, item)
    return response
 })
 const addComment=createAsyncThunk("/addcomment",async(item)=>{
    await axios.put(`https://webshopapp.herokuapp.com/shop/comment/query?email=${item.email}&_id=${item._id}`, item)
    return item
 })
 const deletecomment=createAsyncThunk("/deletecomment",async(item)=>{
   await axios.put(`https://webshopapp.herokuapp.com/shop/deletecomment/query?_id=${item._id}&productId=${item.productId}`, item)
   return item
})

 const like=createAsyncThunk("/like",async(item)=>{
    await axios.put(`https://webshopapp.herokuapp.com/shop/likepost/query?email=${item.email}&_id=${item._id}`, item)
    return item
 })
 const unlike=createAsyncThunk("/unlike",async(item)=>{
    await axios.put(`https://webshopapp.herokuapp.com/shop/unlikepost/query?email=${item.email}&_id=${item._id}`,item)
    return item
 })
 const addNote=createAsyncThunk("/note",async(item)=>{
  await axios.put(`https://webshopapp.herokuapp.com/shop/notepost/query?email=${item.email}&_id=${item._id}`, item)
   return item
})
 const addsale=createAsyncThunk("/addsale",async(item,email)=>{
    await axios.put(`https://webshopapp.herokuapp.com/shop/query?email=${email}&_id=${item._id}/addsale`, item)
    return {item,email}
 })
 const addPorduct=createAsyncThunk("/addproduct",async(item)=>{
    await axios.post(`https://webshopapp.herokuapp.com/shop/addproduct`, item)
    return item
 })
 const byeitem=createAsyncThunk("/bye",async(item)=>{
  const response= await axios.post(`https://webshopapp.herokuapp.com/shop/bye`, item)
   return response.data
})


export {like,unlike,
 deletecomment,
 getUsers,
 byeitem,
    addNote,addComment,
    addsale,getElement,loginuser
    ,AddUser,addPorduct}

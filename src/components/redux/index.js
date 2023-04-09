import {  createSlice } from '@reduxjs/toolkit'
import  {like,unlike,
    addNote,addComment,
    byeitem,
    getUsers,
    addsale,getElement,loginuser,deletecomment
    ,AddUser, addPorduct} from './reduxthunk'

const Server=createSlice({
    name:"Server",
    initialState:{items:[], isloading:false, iserror:false,
    isfounduser:null,
    logindatas:{user:false,
      data:{email:""},
      isadmin:false, notfounduser:false, errorpassword:false},
      allusers:[],
    comments:[],
    user:{},
    productforcom:{},
    commentforedit:{},
    scrollon:"",
    allnotes:[],
    info:true,
    byeinfo:false,
    infobyee:[],
   
    
    },

    reducers:{
      getnotes(state,action){
       state.allnotes=state.items.note

      },
        
        isclick(state,action){
            const expitem=state.items.findIndex((item)=>item._id===action.payload._id)
            const expitemtrue=state.items.find((item)=>item._id===action.payload._id)
            if(expitemtrue.isexpanded){
            state.items[expitem]={...action.payload, isexpanded:false}}
            else{state.items[expitem]={...action.payload, isexpanded:true}}
            

         },
         closeclick(state,action){
            
            const expitem=state.items.findIndex((item)=>item._id===action.payload._id)
            const expitemtrue=state.items.find((item)=>item._id===action.payload._id)
            if(expitemtrue.isexpanded){
            state.items[expitem]={...action.payload, isexpanded:false}}
            

         },
         isclickheader(state,action){
            const expitem=state.items.findIndex((item)=>item._id===action.payload._id)
            const expitemtrue=state.items.find((item)=>item._id===action.payload._id)
            if(expitemtrue.isheaderexpanded){
            state.items[expitem]={...action.payload, isheaderexpanded:false}}
            else{state.items[expitem]={...action.payload, isheaderexpanded:true}}
            

         },
         closeheader(state,action){
            const expitem=state.items.findIndex((item)=>item._id===action.payload._id)
            const expitemtrue=state.items.find((item)=>item._id===action.payload._id)
            if(expitemtrue.isexpanded){
            state.items[expitem]={...action.payload,  isheaderexpanded:false}}
            

         },
         getcomment(state,action){
            const findcomments=state.items.find((item)=>item._id===action.payload._id)
             state.comments=findcomments.comments 
         state.scrollon="comments"


         },
         edit(state,action){
      state.commentforedit=action.payload
         },
         productforcomment(state,action){
            state.productforcom=action.payload
         },
         logout(state,action){
   state.logindatas={user:false,
      data:{},
      isadmin:false, notfounduser:false, errorpassword:false}
   state.user={}
         },
         infodisp(state,action){
            state.byeinfo=false
                  },
       

    },
    extraReducers(build){
        build.addCase(getElement.pending,(state,action)=>{
          state.isloading=true
        })
        build.addCase(getElement.fulfilled,(state,action)=>{
          state.items=action.payload
          state.isloading=false
        })
        build.addCase(getElement.rejected,(state,action)=>{
         state.iserror=true
        })
       
        build.addCase(loginuser.fulfilled,(state,action)=>{
            
          state.logindatas=action.payload.data
          
            state.user=action.payload.data.data
        
        })
      
        build.addCase(deletecomment.fulfilled,(state,action)=>{
         state.comments=state.comments.filter((item)=>item._id!==action.payload._id)
    
        })
        
        build.addCase(like.fulfilled,(state,action)=>{
         const finditem=state.items.find((item)=>item._id===action.payload._id)

         const findind=state.items.findIndex((item)=>item._id===action.payload._id)
         const filterlike=finditem.likes.find((item)=>item.email===action.payload.email)

         if(filterlike){
            state.items[findind].likes=finditem.likes.filter((item)=>item.email!==action.payload.email)
         }
         else {
            state.items[findind].likes=[...finditem.likes,action.payload]

         }
        })
       
        build.addCase(unlike.fulfilled,(state,action)=>{
         const finditem=state.items.find((item)=>item._id===action.payload._id)

         const findind=state.items.findIndex((item)=>item._id===action.payload._id)
         const filterlike=finditem.unlikes.find((item)=>item.email===action.payload.email)

         if(filterlike){
            state.items[findind].unlikes=finditem.unlikes.filter((item)=>item.email!==action.payload.email)
         }
         else {
            state.items[findind].unlikes=[...finditem.unlikes,action.payload]

         }
        })
      
       
        build.addCase(addsale.fulfilled,(state,action)=>{

        })
       
       
        build.addCase(addComment.fulfilled,(state,action)=>{
        state.comments=[action.payload,...state.comments]
        })
     
      
        build.addCase(AddUser.fulfilled,(state,action)=>{
           state.user=action.payload
           state.allusers.push(action.payload)

            
        })
        
        build.addCase(getUsers.fulfilled,(state,action)=>{
         action.payload.map((item,i)=>
         state.allusers.push(item))

      })
       
        build.addCase(addNote.fulfilled,(state,action)=>{
         const finditem=state.items.find((item)=>item._id===action.payload._id)

         const findind=state.items.findIndex((item)=>item._id===action.payload._id)
         const filterlike=finditem.note.find((item)=>item.email===action.payload.email)
      console.log(typeof(parseFloat(action.payload.note)), parseFloat(action.payload.note))
         if(filterlike){
            state.items[findind].note=finditem.note.filter((item)=>item.email!==action.payload.email)
         }
         else {
            state.items[findind].note=[...finditem.note,{email:action.payload.email, noteitem:parseFloat(action.payload.note)}]

         }

        })
       
        build.addCase(addPorduct.fulfilled,(state,action)=>{
         state.items.push(action.payload)
        })

        build.addCase(byeitem.fulfilled,(state,action)=>{
         state.byeinfo=action.payload.bye
         state.infobyee=action.payload.items
        })

    }
})
const byeitems=createSlice({
    name:"byeitems",
    initialState:{items:[], totalPrice:0,totalqty:0, heightitems:0, move:false},
    reducers:{
       bye(state,action){
     const findindex=state.items.findIndex((item)=>item._id===action.payload._id)   
     const finditem=state.items.find((item)=>item._id===action.payload._id)
     state.totalPrice=state.totalPrice+action.payload.price;
     state.totalqty=state.totalqty+1
 if(finditem){
    state.items[findindex]={...finditem,quantity:finditem.quantity+1}
 }
 else if(!finditem){
    state.items=[{...action.payload,quantity:1},...state.items]
 }
   
 
       },
 canceloneitem(state,action){
 const findindex=state.items.findIndex((item)=>item._id===action.payload._id)
 state.totalPrice=state.totalPrice-action.payload.price
 state.totalqty=state.totalqty-1
 if(action.payload.quantity===1){
    state.items=state.items.filter((item)=>item._id!==action.payload._id)
 }
 else{
    state.items[findindex]={...action.payload,quantity:action.payload.quantity-1}
 }
 },
 deleteonebyeitem(state,action){
    state.totalPrice=state.totalPrice-action.payload.price*action.payload.quantity
 state.totalqty=state.totalqty-action.payload.quantity
    state.items=state.items.filter((item)=>item._id!==action.payload._id)
 },
 deleteitemforbye(state,action){
    state.items=[]  
    state.totalPrice=0
    state.totalqty=0   
 },
 setheight(state,action){
state.heightitems=action.payload
 },
 

    
    }
 })

export const bye=byeitems.actions
export const byereducer=byeitems.reducer
export const reducerserver=Server.actions
export const serverreducer=Server.reducer
import express from 'express'
import bodyParser from 'body-parser'
import { cart } from '../model/index.js'

const cartRouter=express.Router()

//fetch all products
cartRouter.get('/',(req,res)=>{
    try{
        cart.fetchCarts(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a cart'
        })
    }

})
cartRouter.get('/:id',(req,res)=>{
    try{
        cart.fetchCart(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a cart'
        })
    }

})
cartRouter.post('/addcart',bodyParser.json(),(req,res)=>{
    try{
        cart.addCart(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to add cart'
        })
    }
})

cartRouter.delete('/delete/:id',(req,res)=>{
    try{
        cart.deleteCart(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to delete new cart'
        })
    }


})
cartRouter.patch('/update/:id',bodyParser.json(),(req,res)=>{
    try{
        cart.updateCart(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to update cart'
        })
    }

})
export{
    cartRouter
}
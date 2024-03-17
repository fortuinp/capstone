import express from 'express'
import bodyParser from 'body-parser'
import { cart } from '../model/index.js'
import { verifyToken } from '../middleware/Aunthentication.js'

const cartRouter=express.Router()

//fetch all products
cartRouter.get('/users/:id/carts',(req,res)=>{
    try{
        cart.fetchCarts(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a cart'
        })
    }

})

cartRouter.post('/users/:id/cart',bodyParser.json(),(req,res)=>{
    try{
        cart.addCart(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to add cart'
        })
    }
})

cartRouter.delete('/users/:id/cart',(req,res)=>{
    try{
        cart.deleteCart(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to delete cart'
        })
    }


})
cartRouter.delete('/users/:id/cart/:id',(req,res)=>{
    try{
        cart.deleteCartItem(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to delete cart item'
        })
    }


})
cartRouter.patch('/users/:id/cart/:id',bodyParser.json(),(req,res)=>{
    try{
        cart.updateCartItem(req,res)
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
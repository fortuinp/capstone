import express from 'express'
import bodyParser from 'body-parser'
import { cart } from '../model/index.js'
import { verifyToken } from '../middleware/Aunthentication.js'

const cartRouter=express.Router()

//fetch all products
cartRouter.get('/:id/carts',(req,res)=>{
    try{
        cart.fetchCart(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve cart'
        })
    }

})

cartRouter.post('/:id/cart',bodyParser.json(),(req,res)=>{
    try{
        cart.addCart(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to add cart'
        })
    }
})

cartRouter.delete('/:id/cart',(req,res)=>{
    try{
        cart.deleteCart(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to delete cart'
        })
    }


})
cartRouter.delete('/:id/cart/:id',(req,res)=>{
    try{
        cart.deleteCartItem(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to delete cart item'
        })
    }


})
cartRouter.patch('/:id/cart/:id',bodyParser.json(),(req,res)=>{
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
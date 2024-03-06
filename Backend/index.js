import { express, userRouter } from "./controllers/UserController.js";
import { productRouter } from "./controllers/ProductController.js";
import cookieParser from "cookie-parser";
import { errorHandling } from "./middleware/ErrorHandling.js";
import path from 'path'
import { config } from "dotenv";
import cors from 'cors'
config()

const app=express()
const port = +process.env.PORT || 4000


app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended:true,
    }),
    cookieParser(),
    cors({
        origin:"*"
    })
)
//Middleware
app.use((req,res,next)=>{
res.header("Access-Control-Allow-Origin","*")
res.header("Access-Control-Allow-Credentials","*")
res.header("Access-Control-Allow-Methods","*")
res.header("Access-Control-Request-Methods","*")
res.header("Access-Control-Allow-Headers","*")
res.header("Access-Control-Expose-Headers","*");
next();
}) 
app.get('^/$|/lifechoices',(req,res)=>{
res.status(200).sendFile(path.join(__dirname,'./static/index.html'))
})
app.use('/users',userRouter)
app.use('/products',productRouter)
app.use(errorHandling)
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
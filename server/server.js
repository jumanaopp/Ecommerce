const express = require('express')
const  mongoose  = require('mongoose')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}))

const registerRouter = require('./src/routes/registerRouter')
const loginRouter = require('./src/routes/loginRouter')
const productsRouter = require('./src/routes/productsRouter')

const cartRouter = require('./src/routes/cartRouter')

const orderRouter = require('./src/routes/orderRouter')


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
app.use('/register',registerRouter)
app.use('/login',loginRouter)

app.use('/products',productsRouter)

app.use('/cart',cartRouter)

app.use('/order',orderRouter)



const MONGODB_URL="mongodb+srv://opjumana:opjumana@cluster0.eppylda.mongodb.net/OrganicEcommerce?retryWrites=true&w=majority"
const port=8000;
mongoose.connect(MONGODB_URL).then(()=>{
  app.listen(port,()=>{
    console.log("server started at http://localhost:8000");
  })
}).catch((error)=>{
  console.log('${error} did not connect')
})
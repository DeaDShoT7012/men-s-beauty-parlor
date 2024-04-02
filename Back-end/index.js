const express = require('express')
const cors = require('cors')
const logic = require('./services/logic')
const server = express()
server.use(cors())
server.use(express.json())
server.listen(8000,()=>{
    console.log('server started at 8000');
})


server.get("/", (req, res) => {
    res.send("Beauty Parlor!!");
  });


//signup 
server.post('/signup',(req,res)=>{
    logic.signup(req.body.uname,req.body.email,req.body.password)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//login
server.post('/login',(req,res)=>{
    logic.login(req.body.email,req.body.password)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//get price
server.get('/get-price',(req,res)=>{
    logic.getprice()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//get barbers
server.get('/get-barbers',(req,res)=>{
    logic.getbarbers()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//get products
server.get('/get-products',(req,res)=>{
    logic.getproducts()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//get a perticular product details
server.get('/view-product/:id',(req,res)=>{
    logic.viewproduct(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//add to cart'
server.post('/addtocart',(req,res)=>{
    logic.addtocart(req.body)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


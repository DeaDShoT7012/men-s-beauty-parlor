const db = require('./db')


//signup
const signup = (uname,email,password)=>{
    return db.User.findOne({
        email
    }).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:'Account Already Exist'
            }
        }else{
            const newUser = new db.User({
                uname:uname,
                email:email,
                password:password
            })
            newUser.save()
            return{
                statusCode:200,
                message:'sign up succesfully'
            }
        }
    })
}

//login
const login = (email,password)=>{
 return db.User.findOne({
    email,
    password
 }).then((result)=>{
    if(result){
        return{
            statusCode:200,
            message:'logged succesfully',
            uname:result.uname, 
            email:result.email
        }
    }else{
        return{
            statusCode:401,
            message:'Invalid Account / Password'
        }
    }
 })
}

//get price
const getprice = ()=>{
    return db.Price.findOne()
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                price:result.styling
            }
        }
        else{
            return{
                statusCode:401,
                message:'No data is available'
            }
        }
    })
}

//get barbers
const getbarbers = ()=>{
    return db.Barber.find()
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                barbers:result
            }
        }
        else{
            return{
                statusCode:401,
                message:'No data is available'
            }
        }
    })
}

//get products
const getproducts = ()=>{
    return db.Product.find()
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                products:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'Please login'
            }
        }
    })
}

//get a perticular producrt details
const viewproduct = (id)=>{
    return db.Product.findOne({
        id
    })
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                product:result
            }
        }
        else{
            return{
                statusCode:401,
                message:'No data is available'
            }
        }
    })  
}

//add to cart
const addtocart = (item)=>{
    return db.Cart.findOne({
        id:item.id
    })
    .then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:'Item already in the cart'
            }
        }
        else{
            let newCart = new db.Cart({
                id:item.id,
                name:item.name,
                price:item.price,
                image:item.image
                
            })
            newCart.save()
            return{
                statusCode:200,
                message:'Item added to the cart'
            }
        }
    })
}






module.exports={
    getprice,
    getproducts,
    viewproduct,
    getbarbers,
    signup,
    login,
    addtocart
}
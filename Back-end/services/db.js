const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/salon')
mongoose.connect('mongodb+srv://bejese9468:wUpFuyMSizSGQaQt@cluster0.wyms4nn.mongodb.net/beutyparler')



const Price = mongoose.model('Price',
{
    styling:[]
})

const Product = mongoose.model('Product',
{
    id:String,
    name:String,
    image:String,
    price:String,
    tags:String,
    categories:String,
    sku:String,
    desc:String
}
)

const Barber = mongoose.model('Barber',
{
    id:String,
    name:String,
    image:String
})

const User = mongoose.model('User',
{
    
    uname:String,
    email:String,
    password:String
}
)

const Cart = mongoose.model('Cart',
{
    id:String,
    name:String,
    price:String,
    image:String,
    quantity:String

})




module.exports={
    Price,
    Product,
    Barber,
    User,
    Cart
}
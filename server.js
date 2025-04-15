const express=require('express');
const app=express();
const port=3000;

const usersRoutes=require('./routes/user');
const productsRoutes=require('./routes/product');
const cartRoutes=require('./routes/cart');

app.get('/',(req,res)=>{
  res.send("Welcome to the E-Commerce API");
})

app.use('/user',usersRoutes);
app.use('/product',productsRoutes);
app.use('/cart',cartRoutes);

app.use((req, res) => {
  res.status(404).send("Page not found");
})

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`)
})
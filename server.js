const express=require('express');
const app=express();
const port=3000;

const usersRoutes=require('./routes/user');
const productsRoutes=require('./routes/product');
const cartRoutes=require('./routes/cart');

app.use('/api/user',usersRoutes);
app.use('/api/product',productsRoutes);
app.use('/api/cart',cartRoutes);

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`)
})
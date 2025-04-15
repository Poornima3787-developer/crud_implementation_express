const getProducts=(req,res)=>{
  res.send("Fetching all products");
}

const getProductsById=(req,res)=>{
  res.send(`Fetching product with ID:${req.params.id}`); 
}

const postProducts=(req,res)=>{
  res.send("New product added");
}

const editProducts=(req,res)=>{
  res.send("Put request called")
}

const deleteProducts=(req,res)=>{
  res.send("Delete request called")
}
module.exports={
  getProducts,
  getProductsById,
  postProducts,
  editProducts,
  deleteProducts
}
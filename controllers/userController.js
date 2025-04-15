const getUser=(req,res)=>{
  res.send(`Fetching all users`);
}

const postUser=(req,res)=>{
  res.send('Adding a new user');
}

const getUserId=(req,res)=>{
  res.send(`Fetching user with ID:${req.params.id}`);
}

module.exports={
  getUser,
  postUser,
  getUserId
}
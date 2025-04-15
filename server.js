const express=require('express');
const app=express();
const port=3000;

const studentsRoutes=require('./routes/students');
const coursesRoutes=require('./routes/courses');

app.get('/',(req,res)=>{
  res.send("Welcome to the Student & Course Portal API!");
})

app.use('/students',studentsRoutes);
app.use('/courses',coursesRoutes);

app.use((req, res) => {
  res.status(404).send("Page not found");
});
app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`)
})
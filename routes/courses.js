const express=require('express');
const router=express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },    
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }    
  ];

router.get("/",(req,res)=>{
  const names = courses.map(course => course.name).join(', ');
  res.send(`Courses: ${names}`);
})

router.get('/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find(c => c.id === courseId);
  if (course) {
    res.send(`Course: ${course.name}, Description: ${course.description}`);
  } else {
    res.send("Course not found");
  }
});

module.exports=router;
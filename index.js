const express = require('express');
const app = express();

const cors=require('cors')
const port = process.env.PORT || 5000;


app.use(cors)
const courslist = require('./data/courseList.json')
const blogs=require('./data/blogList.json');
const { application } = require('express');

app.get('/blogs', (req, res) => {
  res.send(blogs)  
})
app.get('/courseList', (req, res) => {
    res.send(courslist)
})



app.get('/courseList/:id', (req, res) => {

    const id = req.params.id;
    const selectcourslist = courseList.find(n => n.id === id);
    res.send(selectcourslist);

})
app.get('./blogs/:id', (req, res) => {
    const id = req.params.id;
    const selectblogs = blogs.find(n => n.id === id);
    res.send(selectblogs);

})





app.get('/', (req, res) => { 

    res.send("api is available");
})





app.listen(port, () => {
    console.log("server is runing",port)
})



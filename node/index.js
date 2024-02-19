const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/news',(req,res)=>{
    res.send('rain')
})
app.get('/shop',(req,res)=>{
    res.send('Shoping page')
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/about.html')
})

app.listen(3000)
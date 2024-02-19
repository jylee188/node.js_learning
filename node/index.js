const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs')

const { MongoClient } = require('mongodb')

let db
const url = 'mongodb+srv://admin:admin1507@cluster0.fdyirh4.mongodb.net/?retryWrites=true&w=majority'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
  app.listen(3000)
}).catch((err)=>{
  console.log(err)
})

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

app.get('/list',async (req,res)=>{
  let result = await db.collection('post').find().toArray()
  res.render('list.ejs',{post:result})
})

app.get('/time',(req,res)=>{
  res.render('time.ejs',{time:new Date()})
})
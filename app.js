const express = require('express');
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const session = require('express-session');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))  

app.post('/formsubmit', (req, res) => {
  let {user_name, location, language } = req.body;
  res.render('show', {user_name : user_name, location : location , language : language});
})



app.get('/', (req, res)=>{
  res.render('index');
})

app.listen(8000 , ()=> console.log("listening on port 8000"))
module.exports = function(app){
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test:test@cluster0.xwxna.mongodb.net/FirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
var unlencoded=bodyParser.urlencoded({ extended: false });

app.get('/',function(req,res){
    res.render('Home');
});

app.get('/Contact',function(req,res){
    res.render('Contact');
});
app.post('/Contact',function(req,res){
    res.render('Contact');
});
app.get('/Purchase',function(req,res){
    res.render('Purchase');
});
app.get('/Purchase1',function(req,res){
    res.render('Purchase1');
});
app.get('/Sign',function(req,res){
    res.render('Sign');
});
app.get('/Login',function(req,res){
    res.render('Login');
});
app.get('/Model',function(req,res){
    res.render('Model');
});
app.post('/Purchase',unlencoded,function(req,res){
    console.log(req.body);
    client.connect(function(err, db) {
        if (err) throw err;
      var dbo = db.db("FirstDatabase");
      delete req.body._id;
      dbo.collection('Example').insertOne(req.body);
      });
      console.log('Insered');
      res.render('Purchase');
    
});
 app.post('/Purchase1/',unlencoded,function(req,res){
     var Result;
    client.connect(function(err, db) {
        if (err) throw err;
      var dbo = db.db("FirstDatabase");
      dbo.collection("Example").find(req.body).toArray(function(err, result) {
        if (err) throw err;
        Result = result;
        console.log(Result);
 });
});
res.render('Purchase1',{person:req.body});
 });


}
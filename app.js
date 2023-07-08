const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/wikiDB");
console.log("Mongoose is connected successfully");

const app = express();

const articleSchema=new mongoose.Schema({
  title: String,
  content: String
});

const Article=mongoose.model("Article",articleSchema);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO

/////////////////////Request Targeting all Articles/////////////////////

app.route("/articles")
.get(function(req,res){
  Article.find({}).then(function(foundArticles){
    res.send(foundArticles);
  }).catch(function(error){
    res.send(error);
  })
})
.post(function(req,res){
  console.log(req.body.title);
  console.log(req.body.content);
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });
  newArticle.save().then(function(){
    res.send("Article saved successfully");
  }).catch(function(error){
    res.send(error);
  })
})
.delete(function(req,res){
  Article.deleteMany({}).then(function(){
    res.send("Successfully deleted all items");
  }).catch(function(error){
    res.send(error);
  });
});

/////////////////////Request Targeting specific Article/////////////////////

app.route("/articles/:articleTitle")
.get(function(req,res){
  Article.findOne({title: req.params.articleTitle}).then(function(foundArticle){
    if(foundArticle){
      res.send(foundArticle);
    }else {
      res.send("No matching article was found");
    }
  }).catch(function(error){
    res.send(error);
  })
})

.put(function(req,res){
  Article.findOneAndUpdate(
    {title: req.params.articleTitle},
    {title: req.body.title,content: req.body.content},
    {overwrite: true}).then(function(){
      res.send("Title and content updated successfully");
    }).catch(function(error){
      res.send(error);
    })
})

.patch(function(req,res){
  Article.findOneAndUpdate(
    {title: req.params.articleTitle},
    {$set: req.body}
    ).then(function(){
      res.send("Title and content updated successfully");
    }).catch(function(error){
      res.send(error);
    })
})

.delete(function(req,res){
  Article.findOneAndDelete(
    {title: req.params.articleTitle}
    ).then(function(){
      res.send("Title and content deleted successfully");
    }).catch(function(error){
      res.send(error);
    })
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

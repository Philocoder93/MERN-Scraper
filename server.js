"use strict";

var express = require('express')
var mongoose = require('mongoose')
var axios = require('axios')
var bodyParser = require('body-parser')
var cheerio = require('cheerio')
var sanitizeHTML = require('sanitize-html');
var Comment = require('./model/comments')

var app = express()
var router = express.Router()

var port = process.env.API_PORT || 3001

mongoose.connect('mongodb://localhost/mern');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')

  res.setHeader('Cache-Control', 'no-cache')
  next()
})

router.get('/', function(req, res) {
  res.json({message: 'API initialized!'})
})

router.route('/comments')
  .get(function(req, res){
    Comment.find(function(err, comments){
      if (err)
        res.send(err)
      res.json(comments)
    })
  })

  .post(function(req, res){
    var comment = new Comment()
    comment.author = req.body.author
    comment.text = req.body.text

    comment.save(function(err){
      if(err)
        res.send(err)
      res.json({message: 'Comment successfully!'})
    })
  })

app.use('/api', router)

router.get('/crime', function(req, res){
  let base_url = 'https://ucr.fbi.gov/hate-crime/2015/tables-and-data-declarations/2tabledatadecpdf'
  axios.get(base_url).then((response) => {
    console.log(response)
    let $ = cheerio.load(response.data)
    let results = []
    $('tr').each((index, element) => {
      let local = [[index],[]]
      $(element).children().each((childIndex, childElement) => {
        let out = $(childElement).text().replace(/\n/g, '')
        local[1].push(out)
      })
      results.push(local)
    })
    return results
  }).then((results) => { res.json({results: results})})
})

app.use('/scraper',router)

app.listen(port, function(){
  console.log('running')
})

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

//object stores the dynamic properties
var articles = {
    'article-one': {
    title: 'Article One | Dilpreet Chawla',
    heading: 'Article One',
    date: 'Feb 26, 2018',
    content: `<p>
                    This is the first article I wrote while creating this app.
                </p>`
    },
    'article-two':{
    title: 'Article Two | Dilpreet Chawla',
    heading: 'Article Two',
    date: 'Mar 5, 2018',
    content: `<p>
                    This is the second article I wrote while creating this app.
                </p>`
    },
    'article-three':{
    title: 'Article Three | Dilpreet Chawla',
    heading: 'Article Three',
    date: 'Mar 10, 2018',
    content: `<p>
                    This is the third article I wrote while creating this app.
                </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title> ${title} </title>
            <meta name="viewport" content="width-device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" /> 
        </head> 
    
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h1>
                    ${heading}
                </h1>
                <div>
                    ${date} 
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter = 0;
app.get('/counter', function (req, res) {
  counter += 1    
  res.send(counter.toString());    
})

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

//using express feature the part after : will be converted to a variable
app.get('/:articleName', function (req, res) {
    //articleName == article-one
    //articles[articelName] = {} // content for article-one
  var articleName = req.params.articleName;//feature of the express framework to extract the article name
  res.send(createTemplate(articles[articleName]));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

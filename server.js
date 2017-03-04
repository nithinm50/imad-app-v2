var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'nithinm50',
    database: 'nithinm50',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one':{
        title:'Article One | Nithin',
        heading: 'Article one',
        date: 'feb 4 2017',
        content: `
        <p> hello this article 1 para 1 hello this article 1 para 1 hello this article 1 para 1 hello this article 1 para 1 hello this article 1 para 1 hello this article 1 para 1 hello this article 1 para 1 hello this article 1 para 1 hello this article 1 para 1 hello this article 1 para 1
        </p>
        <p> hello this article 1 para 2 hello this article 1 para 2 hello this article 1 para 2 hello this article 1 para 2hello this article 1 para 2 hello this article 1 para 2 hello this article 1 para 2 hello this article 1 para 2 hello this article 1 para 2 hello this article 1 para 2
        </p>
        <p> hello this article 1 para 3 hello this article 1 para 3 hello this article 1 para 3 hello this article 1 para 3 hello this article 1 para 3 hello this article 1 para 3 hello this article 1 para 3 hello this article 1 para 3 hello this article 1 para 3 hello this article 1 para 3
        </p>`
    },
    'article-two':{
        title:'Article Two | Nithin',
        heading: 'Article Two',
        date: 'feb 12 2017',
        content: `
        <p> hello this article 2 para 1 </p>
        <p> hello this article 2 para 2 </p>
        <p> hello this article 2 para 3 </p>`
    },
    'article-three':{
        title:'Article Three | Nithin',
        heading: 'Article Three',
        date: 'feb 18 2017',
        content: `
        <p> hello this article 3 para 1 </p>
        <p> hello this article 3 para 2 </p>
        <p> hello this article 3 para 3 </p>`
    }
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function (req, res){
    pool.query('select * from test', function(err,result){
         if(err){
             res.status(500).send(err.toString());
         } else {
             res.send(JSON.stringify(result));
         }
    });
});

    var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate =`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name = "viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}
var names =[];
app.get('/submit-name', function(req, res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));  
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one':{
        title:'Article One | Nithin',
        heading: 'Article one',
        date: 'feb 4 2017',
        content: `
        <p> hello this article 1 para 1 </p>
        <p> hello this article 1 para 2 </p>
        <p> hello this article 1 para 3 </p>`
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
                    ${heading}
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
                <div>
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

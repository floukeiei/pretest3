
const request = require('request-promise');
const $ = require('cheerio');

const [,,param] = process.argv
request('https://codequiz.azurewebsites.net/',{
    headers: {Cookie : "hasCookie=true"} 
}).then(body=>{
    body = body.replace(/\s/g,'');
    $('table > tbody > tr:not(:first-child)', body).toArray().forEach(row=>{
        if(param && param === $(row.children[0]).text()){
            console.log($(row.children[1]).text());
        }
    });
});
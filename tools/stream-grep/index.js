var request = require('request');
var streamGrep = require('stream-grep')
  , fs = require('fs');
 
streamGrep(request("http://www.baidu.com"), [/create/])
  .on('found', function (term, line) {
    console.log('Found', term, 'line', line)
  })
  .on('end', function(found) {
    console.log('Terms found', found)
  })
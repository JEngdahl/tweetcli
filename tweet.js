var Twitter = require('twitter-node-client').Twitter;
var prompt = require('prompt');
var config = require('./config')

prompt.start();

prompt.get(['update'], function (err, result) {
  if(result.update.length < 141){
    twitter.postTweet({status:result.update}, error, function(){
      console.log('successfull tweet!')
    });

  } else {
    console.log('tweet must be less that 141 char')
  }
});


var twitter = new Twitter(config);

//Example calls
var error = function (err, response, body) {
  console.log('ERROR [%s]', err);
};
var success = function (data) {
  console.log('Data [%s]', data);
};

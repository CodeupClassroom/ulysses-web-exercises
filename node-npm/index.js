const githubUsername = require('github-username');

githubUsername('montealegreluis@gmail.com').then(username => {
    console.log(username);
    //=> 'sindresorhus'
});

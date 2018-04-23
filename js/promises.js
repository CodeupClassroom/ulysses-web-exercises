// Module style
const wait = miliseconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, miliseconds);
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


const request = fetch('https://api.github.com/users/MontealegreLuis/events/public', {
    headers: {'Authorization': 'token YOUR_TOKEN_HERE'}
});
request
    .then(response => response.json())
    .then(publicEvents => console.log(publicEvents[0].created_at))
;

request.catch(error => console.log(error));

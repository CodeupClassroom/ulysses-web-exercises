const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

/*
// This is the result we're looking for
const result = {
    "1": {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    "2": {
        id: 2,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    "3": {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    }
};
*/

console.log('Users that know at least 3 languages');
console.log(users.filter(user => user.languages.length >= 3));

console.log('All the emails');
console.log(users.map(user => user.email));

const result = users.reduce((accumulator, user) => {
    accumulator[user.id] = user;
    return accumulator;
}, {});
console.log(result);

const total = [1, 2, 3, 4].reduce((accumulator, current) => {
    // console.log(accumulator);
    // console.log(current);
    return accumulator + current;
}, '');
console.log(total);

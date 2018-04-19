/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

const name = 'Isaac';
const email = 'isaac@codeup.com';
const languages = ['php', 'javascript'];

// email = 'test@codeup.com';

users.push({
    name,
    email,
    languages
});

let emails = [];
let names = [];

users.forEach(user => {
    emails.push(user.email); // populate emails
    names.push(user.name); // populate names
});

// users.forEach(user => emails.push(user.email));
// console.log(emails);

// users.forEach(user => names.push(user.name));
// console.log(names);

let developers = [];
users.forEach(({name, email, languages}) => {
  // const {name, email, languages} = user;
  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);
});
console.log(developers);

let list = '<ul>';
for (const developer of developers) {
  // TODO: rewrite the assignment below to use template strings
  list += '<li>' + developer + '</li>';
}
list += '</ul>';

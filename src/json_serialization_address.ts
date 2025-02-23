console.log("---------------JSON Parsing Address!----------------------");

interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface User {
  name: string;
  role: string;
  salary: number;
  company: string;
}
  
interface Person {
  id: number;
  name: string;
  email: string;
  address: Address;
  hobbies: string[];
  users: User[];
}

const jsonString = `{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "zipCode": "12345"
  },
  "hobbies": ["reading", "hiking"],
  "users": [
    { "name": "Arvind Rajaraman", "role": "Developer", "company":"Open AI", "salary":400000 },
    { "name": "Aditi Rajaraman", "role": "Designer", "company":"Google", "salary":300000 },
    { "name": "Devi", "role": "BA", "company":"BCBS", "salary":150000 },
    { "name": "Rajaraman S", "role": "Developer", "company":"Open AI", "salary":320000 }
  ]
}`;
  
console.log("---------------Parse JSON!----------------------");
const person: Person = JSON.parse(jsonString);

console.log(person.name);
console.log(person.address.city);

console.log("---------------Iterate Array!----------------------");
//Iterate through Array
person.hobbies.forEach(data => {
  console.log(data)
});

console.log("---------------Using Map!----------------------");
//Use Map to manipulate arrays
person.hobbies.map(data => {
  console.log(data)
});

console.log("---------------Using Reduce!----------------------");
/*
  This method can be particularly useful when you need to accumulate or aggregate data from the array.
*/
const userDescriptions = person.users.reduce((descriptions: string[], user: User) => {
  descriptions.push(`Name: ${user.name}, Role: ${user.role}`);
  return descriptions;
}, []);
console.log(userDescriptions.join('\n'));


console.log("---------------Using Filters!----------------------");
/*
  filter out the data/array elements on the basis of condition and return the result as a list.
*/
var developers = person.users.filter(function(record) {  
  return record.role == 'Developer' ;  
}); 

developers.forEach(data => {
  console.log(data)
});

console.log("---------------Using Find!----------------------");
/*
  filter out the data/array elements on the basis of condition and return the result as a list.
*/
let salariedEmployees : User | undefined = person.users.find(element => element.salary > 200000); 
if (salariedEmployees === undefined) {
  console.log('No Salaried Employees ')
} 
else{
  console.log(salariedEmployees.name);
}
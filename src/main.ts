import { User } from './User';

const user = new User({ name: 'myname', age: 20 });

user.set({ name: 'conrad' });

console.log(user.get('name'));
console.log(user.get('age'));

import fruits from "./foods";
import{Choice, remove} from './helpers';

let fruit = Choice(fruits);

console.log(`I'd like one ${fruit}, please`)
console.log(`Here you go: ${fruit}`)
console.log(`Delicious! May I have another?`)
let remain = remove(fruit,fruits)
console.log(`I'm sorry. we are all out. We have ${remain} left`)

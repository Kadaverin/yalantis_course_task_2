import memoization from './memoization';
import { UserRepository } from './async/repositories/index';
import { users, groups } from './async/constants';
import { makeIntegerIterator, take } from './iterators';


// ITERATORS DEMO
///////////////////////////////////////////////////////
console.log('\nTAKE THREE ITERATION VALUE \n');

const iterator = makeIntegerIterator(); 
const takeThreeValuesIterable = take(3, iterator);

console.log('-- First three in a loop ');
for (let i of takeThreeValuesIterable) {
  console.log(i);
};

console.log(' -- Next trhee using destructing');
console.log([ ...takeThreeValuesIterable ]);

// MEMOIZATION DEMO
///////////////////////////////////////////////////////
console.log('\nMemoization demo \n')

const sum = (a: number, b: number) => a + b;
const memoizedSum = memoization(sum);

console.log('-- Memoizaed sum witn agrs 1, 2 ');
console.log(memoizedSum(1, 2));
console.log(memoizedSum(1, 2));


console.log('-- Usual sum witn agrs 1, 2 ');
console.log(sum(1,2));
console.log(sum(1,2));

// ASYNC API DEMO
///////////////////////////////////////////////////////
console.log('\nAdding users to group \n');

const selectedGroup = groups[1];

UserRepository.bulkAddUsersToGroup(users, selectedGroup)
  .then( usersWithGroup => console.log(usersWithGroup));

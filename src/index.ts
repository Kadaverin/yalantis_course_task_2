import { UserRepository } from './async/repositories/index';
import { users, groups } from './async/constants';
import { makeIntegerIterator, take } from './iterators';

// ITERATORS DEMO
///////////////////////////////////////////////////////
console.log('TAKE FIRST THREE ITERATION VALUE');

const iterator = makeIntegerIterator(); 
const firstTrheeValuesIterable = take(3, iterator);

for (let i of firstTrheeValuesIterable) {
  console.log(i);
};

// ASYNC API DEMO
///////////////////////////////////////////////////////
console.log('Adding users to group');

const selectedGroup = groups[1];

UserRepository.bulkAddUsersToGroup(users, selectedGroup)
  .then( usersWithGroup => console.log(usersWithGroup));




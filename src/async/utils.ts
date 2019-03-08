import { makeIntegerIterator } from './../iterators';
import { users } from './constants';


export function getIntFromRange( min: number, max: number): number {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}



export const getStubRandTimeInMs = () :number => getIntFromRange(500, 1000);



interface AbstractEntity  {
  id?: number
}

export const createIntIdGenerator = (allEntities: AbstractEntity[]) => {
  const maxId = allEntities.reduce( 
    (max, cur) => cur.id > max ? cur.id : max, 
    allEntities[0].id
  );

  const nextId = maxId + 1;

  return makeIntegerIterator(nextId)
}

export const usersIdsGenerator = createIntIdGenerator(users)
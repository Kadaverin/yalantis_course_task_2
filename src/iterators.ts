export interface AbstractIterator {
  next: () => { 
    done: boolean, 
    value: any
  },
}

export const makeIntegerIterator = (startValue = 0) => ({
  next() {
    return {
      value: startValue++,
      done: false
    }
  } 
})

export const take = ( n: number, iterator: AbstractIterator ) => ({
  [Symbol.iterator]: () => {
    let step = 1;
    return {
      next() {
        const nextIter = iterator.next();

        const res = {
          done: nextIter.done,
          value: nextIter.value
        }
  
        if(step > n) {
          res.done = true
        }

        step += 1;
  
        return res;
      }
    }
  }
})


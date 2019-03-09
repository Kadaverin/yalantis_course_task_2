export type KeyFormatter = (args: any[]) => string;

export interface ICache {
  [ key:string ]: any // add index signature
}


function memoization(func: Function, cacheKeyFormatter: KeyFormatter = JSON.stringify) {

  const memoized = (...args: any[]): any => {
    const argsKey = cacheKeyFormatter(args);

    if (memoized.cache.hasOwnProperty(argsKey)) {
      console.log('getting from cache');
      return memoized.cache[ argsKey ];
    }

    return memoized.cache[ argsKey] = func.apply(this, args);
  }

  memoized.cache = {} as ICache;

  return memoized;
}

export default memoization;

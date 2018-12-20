export const partialize = (fn, ...params) => 
    fn.bind(null, ...params);

export const pipe = (...fns) => value => 
  fns.reduce((previousValue, fn) => 
      fn(previousValue), value);
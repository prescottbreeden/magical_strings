import { converge, curry, defaultTo, reduce } from 'ramda';

// *randomString* :: () -> string
export const randomString = () =>
  Math.random()
    .toString(36)
    .substring(7);

// *trace* :: string -> a -> a
export const trace = curry((txt, x) => {
  console.log(txt, x);
  return x;
});

// less fussy version of compose
// compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
export const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

// prop :: a -> obj -> obj[a] | undefined
export const prop = curry((a, obj) => (obj ? obj[a] : undefined));

// set :: string a -> { [string]: a }
export const set = curry((name, value) => ({ [name]: value }));

export const getProp = a => b => prop(b, a);

// handleChangeEvent :: event -> obj
export const handleChangeEvent = compose(
  converge(set, [prop('name'), prop('value')]),
  prop('target')
);

// replaceItem :: [a] -> a -> [a]
export const replaceItem = curry((list, b) => {
  return list.map(a => (a.id === b.id ? b : a));
});

// all :: [bool] -> bool
export const all = reduce((a, b) => (a ? b : a), true);

// formatPhone :: string -> string
export const formatPhone = phone => {
  const digits = phone.replace(/\D/g, '');
  const match = digits.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]} - ${match[3]}`;
  }
  return phone;
};

// idOrRandom :: obj -> string
export const idOrRandom = compose(defaultTo(randomString()), prop('id'));

/**
 *  Evaluate any two values for deep equality
 *  @param a any value
 *  @param b any value
 *  @return boolean
 */
export const deepEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

// formatMoney :: number | bigint -> string
export const formatMoney = money => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(money);
};

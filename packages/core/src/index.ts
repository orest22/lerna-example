import utils from '@example/utils';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return utils.sum(a, b);
};

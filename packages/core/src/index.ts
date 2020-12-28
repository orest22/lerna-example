import utils from '@orest22/utils';

/**
 * Return sub of two numbers
 * @param a
 * @param b
 */
export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return utils.sum(a, b);
};

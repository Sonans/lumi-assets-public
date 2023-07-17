/**
 * Helper function that joins classes to a single string
 */
export function classes(...classes: string[]){
  return classes.filter((item) => item).join(' ');
}
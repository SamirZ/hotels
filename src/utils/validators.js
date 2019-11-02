export const required = value => (value || typeof value === 'number' ? undefined : 'Required');
export const isEmail = value => (value && value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) ? undefined : 'Invalid email';
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined
export const matchPasswords = pass1 => pass2 => 
  pass1 === pass2 ? undefined : `Passwords don't match`;
export const minLength6 = minLength(6);
export const minLength2 = minLength(2)
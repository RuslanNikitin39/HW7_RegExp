import Validator from '../app';

test.each([
  ['Name12345abc', false],
  ['NameNik_', false],
  ['Name56rt', false],
  ['123NoName-', false],
  ['Name5566988', false],
  ['МоеИмя10GG', false],
  ['Bob', true],
])('testing of correct username %s', (userName, returned) => {
  const user = new Validator(userName);
  expect(user.validateUsername()).toBe(returned);
});
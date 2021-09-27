import kebab from '../index'

describe('Acceptance', () => {
  it('kebabs case', () => {
    const myString = kebab('Hello World!');
    expect(myString).toBe('Hello-World!');
  });
});

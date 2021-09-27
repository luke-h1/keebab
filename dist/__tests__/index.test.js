import keebab from '../index';
describe('Acceptance', () => {
    it('kebabs case', () => {
        const myString = keebab('Hello World!');
        expect(myString).toBe('Hello-World!');
    });
});

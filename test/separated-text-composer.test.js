const separated_text_composer = require('..');
describe('separated_text_composer', () => {
    it('is callable when given nothing', () => {
        separated_text_composer();
    });
    it('splits multiple lines correctly', () => {
        expect(
            separated_text_composer(`
Hejpådig <<->> Hello you

Hur är läget? <<->> How are you?
Det är bra <<->> I'm great
Nice
`)
        ).toEqual([
            `
Hejpådig

Hur är läget?
Det är bra
Nice
`,
            `
Hello you

How are you?
I'm great
Nice
`,
        ]);
    });
    it('works with no space around separator', () => {
        expect(separated_text_composer('language one<<->>language two')).toEqual([
            'language one',
            'language two',
        ]);
    });
    it('works with separator in between lines', () => {
        expect(
            separated_text_composer(
                `hej
<>
hi`,
                '\n<>\n'
            )
        ).toEqual([`hej`, `hi`]);
    });
    it('works with separator using regex symbols', () => {
        expect(
            separated_text_composer(
                `hej
<|>
hi`,
                '\n<|>\n'
            )
        ).toEqual([`hej`, `hi`]);
    });
    it('works with default separators not suposed to be separators', () => {
        expect(
            separated_text_composer('language<<->>one<>language<<->>two', '<>')
        ).toEqual(['language<<->>one', 'language<<->>two']);
        expect(
            separated_text_composer('language<<<->>>one<>language<<<->>>two', '<>')
        ).toEqual(['language<<<->>>one', 'language<<<->>>two']);
    });
});

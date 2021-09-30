const separated_text_composer = require('..');

const text = `
Hejpådig <<->> Hello you

Hur är läget? <<->> How are you?
Det är bra <<->> I'm great
Nice
`;
const text_one = `
Hejpådig

Hur är läget?
Det är bra
Nice
`;
const text_two = `
Hello you

How are you?
I'm great
Nice
`;

test('separated-text-composer splits multiple lines correctly', () => {
    expect(separated_text_composer(text)).toEqual([text_one, text_two]);
});

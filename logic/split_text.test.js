const { split_text } = require('./split_text');

describe('split_text', () => {
    it("returns unmodified, when input doesn't have any separator", () => {
        expect(split_text('hi')).toEqual(['hi']);
    });
    it('returns array with length two when text includes one separator', () => {
        expect(split_text('language one <<->> language two').length).toBe(2);
    });
    it('returns array of two separated languages when text is one line and includes a separator', () => {
        expect(split_text('language one <<->> language two')).toEqual([
            'language one',
            'language two',
        ]);
    });
    it('returns array of two separated languages languages when text has multiple lines, some of them with seporators', () => {
        expect(
            split_text(
                'language one <<->> language two\n\nalso language one <<->> also language two'
            )
        ).toEqual([
            'language one\n\nalso language one',
            'language two\n\nalso language two',
        ]);

        expect(
            split_text(
                `Hejpådig <<->> Hello you

Hur är läget? <<->> How are you?
Det är bra <<->> I'm great
Nice`
            )
        ).toEqual([
            `Hejpådig

Hur är läget?
Det är bra
Nice`,
            `Hello you

How are you?
I'm great
Nice`,
        ]);
    });
});

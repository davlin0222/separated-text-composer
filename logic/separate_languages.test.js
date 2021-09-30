const { separate_languages } = require('./separate_languages');

describe('separate_languages', () => {
    it("returns unmodified, when input doesn't have any separator", () => {
        expect(separate_languages('hi')).toEqual(['hi']);
    });
    it('returns array with length two when text includes one separator', () => {
        expect(separate_languages('language one <<->> language two').length).toBe(2);
    });
    it('returns array of two separated languages when text is one line and includes a separator', () => {
        expect(separate_languages('language one <<->> language two')).toEqual([
            'language one',
            'language two',
        ]);
    });
    it('returns array of two separated languages languages when text has multiple lines, some of them with seporators', () => {
        expect(
            separate_languages(
                'language one <<->> language two\n\nalso language one <<->> also language two'
            )
        ).toEqual([
            'language one\n\nalso language one',
            'language two\n\nalso language two',
        ]);

        expect(
            separate_languages(
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

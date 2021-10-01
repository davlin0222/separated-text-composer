const { separate_text } = require('./separate_text');

describe('separate_text', () => {
    it('is callable', () => {
        separate_text();
    });
    it("returns unmodified, when input doesn't have any separator", () => {
        expect(separate_text('hi')).toEqual(['hi']);
    });
    it('returns array with length two when text includes one separator', () => {
        expect(separate_text('language one <<->> language two').length).toBe(2);
    });
    it('returns array of two separated varieties when text is one line and includes a separator', () => {
        expect(separate_text('language one <<->> language two')).toEqual([
            'language one',
            'language two',
        ]);
    });
    it('returns array of two separated varieties when text has multiple lines, some of them with separators', () => {
        expect(
            separate_text(
                'language one <<->> language two\n\nalso language one <<->> also language two'
            )
        ).toEqual([
            'language one\n\nalso language one',
            'language two\n\nalso language two',
        ]);

        expect(
            separate_text(
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
    it('works when provided custom separator', () => {
        expect(separate_text('language one <---> language two', '<--->')).toEqual([
            'language one',
            'language two',
        ]);
    });
});

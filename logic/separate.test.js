const { separate } = require('./separate');

describe('separate', () => {
    it("returns unmodified, when input doesn't have any seporator", () => {
        expect(separate('hi')).toEqual(['hi']);
    });
    it('returns array with two values when there is a seporator on a line', () => {
        expect(separate('language one <<->> language two').length).toBe(2);
    });
    it('returns array of seporated languages of one line', () => {
        expect(separate('language one <<->> language two')).toEqual([
            'language one',
            'language two',
        ]);
    });
});

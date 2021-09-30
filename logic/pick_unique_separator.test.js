const { pick_unique_separator } = require('./pick_unique_separator');

describe('pick_unique_separator', () => {
    it('is callable', () => {
        pick_unique_separator();
    });
    it('returns first seporator', () => {
        expect(pick_unique_separator('')).toBe('<<<->>>');
    });
    it('returns second separator if first is used', () => {
        expect(pick_unique_separator('<<<->>>')).toBe('<<<-->>>');
    });
    it('returns next separator if prior is used', () => {
        expect(pick_unique_separator('<<<->>><<<-->>>')).toBe('<<<--->>>');
        expect(
            pick_unique_separator('<<<->>><<<-->>><<<--->>><<<---->>><<<----->>>')
        ).toBe('<<<------>>>');
    });
});

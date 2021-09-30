const { split_text } = require('./logic/split_text');

module.exports = text_splitter;

function text_splitter(text) {
    const two_texts = split_text(text);

    return two_texts;
}

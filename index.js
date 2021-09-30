const { separate_text } = require('./logic/separate_text');

module.exports = separated_text_composer;

function separated_text_composer(text) {
    const two_texts = separate_text(text);

    return two_texts;
}

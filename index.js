const { pick_unique_separator } = require('./logic/pick_unique_separator');
const { separate_text } = require('./logic/separate_text');

module.exports = separated_text_composer;

function separated_text_composer(separated_text = '', separator = '<<->>') {
    const unique_separator = pick_unique_separator(separated_text);

    const uniquely_separated_text = separated_text.replaceAll(
        separator,
        unique_separator
    );

    return separate_text(uniquely_separated_text, unique_separator);
}

module.exports = { split_text };

function split_text(text) {
    if (!text.includes('<<->>')) return [text];

    const lines = text.split('\n');

    const separated_lines = lines.map(line => {
        if (line.includes('<<->>')) return line.split(' <<->> ');
        return [line, line];
    });
    // console.log('separate ~ separated_lines', separated_lines);

    const lines_per_language = separated_lines.reduce(
        (language_lines, separated_line) => {
            return [
                [...language_lines[0], separated_line[0]],
                [...language_lines[1], separated_line[1]],
            ];
        },
        [[], []]
    );
    // console.log('lines_per_language', lines_per_language);

    const text_per_language = lines_per_language.map(text_in_language => {
        return text_in_language.join('\n');
    });
    // console.log('text_per_language', text_per_language);

    return text_per_language;
}

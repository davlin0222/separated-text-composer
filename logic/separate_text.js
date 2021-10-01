module.exports = { separate_text };

function separate_text(text = '', separator = '<<->>', end_of_line = '\n') {
    if (!text.includes(separator)) return [text];

    const lines = text.split(end_of_line);

    const separated_lines = lines.map(line => {
        if (!line.includes(separator)) return [line, line];
        const line_varieties = line.split(separator);
        const line_variety_one = line_varieties[0].replace(/\s+$/g, '');
        const line_variety_two = line_varieties[1].replace(/^\s+/g, '');
        return [line_variety_one, line_variety_two];
    });

    const lines_per_variety = separated_lines.reduce(
        (variety_lines, separated_line) => {
            return [
                [...variety_lines[0], separated_line[0]],
                [...variety_lines[1], separated_line[1]],
            ];
        },
        [[], []]
    );

    const text_per_variety = lines_per_variety.map(text_in_variety => {
        return text_in_variety.join(end_of_line);
    });

    return text_per_variety;
}

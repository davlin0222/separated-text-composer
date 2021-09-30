module.exports = { separate };

function separate(text) {
    if (!text.includes('<<->>')) return [text];

    return text.split(' <<->> ');
}

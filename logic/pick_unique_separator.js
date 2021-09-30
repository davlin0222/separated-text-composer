module.exports = { pick_unique_separator };

function pick_unique_separator(text = '') {
    return search_unique_separator('-');

    function search_unique_separator(middle) {
        const separator = construct_separator(middle);
        if (!text.includes(separator)) return separator;
        return search_unique_separator(middle + '-');
    }
}

function construct_separator(middle) {
    return '<<<' + middle + '>>>';
}

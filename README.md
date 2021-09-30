# Separated text composer

Turn one text into two texts using inline separators

# Getting started

<!-- ## Install

```bash
npm i separated-text-composer
``` -->

## Usage

```js
const separated_text_composer = require('./path/to/separated-text-composer');

const text = `
Tjena! <<->> What's up!
Vad gör du idag? <<->> What are you doing today?
Programmerar såklart <<->> Programming of course
Nice!
`;

const separated_texts = separated_text_composer(text);

console.log(separated_texts[0]);
/* Returns:
Tjena!
Vad gör du idag?
Programmerar såklart
Nice!
*/

console.log(separated_texts[1]);
/* Returns:
What's up!
What are you doing today?
Programming of course
Nice!
*/
```

[code from _demo/usage_](./demo/usage/usage.js)

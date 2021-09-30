# Text splitter

Turn one text into two texts using inline separators

# Getting started

<!-- ## Install

```bash
npm i text-splitter
``` -->

## Usage

```js
const text_splitter = require('./path/to/text-splitter');

const text = `
Tjena! <<->> What's up!
Vad gör du idag? <<->> What are you doing today?
Programmerar såklart <<->> Programming of course
Nice!
`;

const text_versions = text_splitter(text);

console.log(text_versions[0]);
/* Returns:
Tjena!
Vad gör du idag?
Programmerar såklart
Nice!
*/

console.log(text_versions[1]);
/* Returns:
What's up!
What are you doing today?
Programming of course
Nice!
*/
```

[code from _demo/usage.js_](./demo/usage.js)

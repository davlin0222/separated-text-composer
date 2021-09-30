const text_splitter = require('./path/to/text-splitter');

// const text = `
// A: Tjena! <<->> A: What's up!
// B: Vad gör du idag? <<->> B: What are you doing today?
// A: Programmerar såklart <<->> A: Programming of course
// B: Nice!
// `;

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

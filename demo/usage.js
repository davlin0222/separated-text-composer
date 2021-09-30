const separated_texts = require('./path/to/separated-text-composer');

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

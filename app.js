// Change for the sake of change
const fs = require ('fs')

fs.writeFileSync('notes.txt', 'Some text.\n')

try {
    fs.appendFileSync('notes.txt', 'Some more lines of text.');
    console.log('The "data to append" was appended to file!');
} catch (err) {
    /* Handle the error */
}

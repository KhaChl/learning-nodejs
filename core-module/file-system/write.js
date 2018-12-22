const fs = require('fs');

fs.writeFile('./text.txt', 'Hello World', (error) => {
    if (error) throw error;
    console.log('The file has been saved!');
});
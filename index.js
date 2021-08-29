const { readFileSync, existsSync } = require('fs');

//--------- Console Colorlization ---------

const red = (v) => `\u001b[31m${v}\u001b[0m`;
const purple = (v) => `\u001b[35m${v}\u001b[0m`;

//--------- Console Colorlization ---------

const filePath = './target.sh';

function main() {
    
    console.log(purple('[1/1] Reading target file...'));

    // If "target.sh" is not provided...
    if(!existsSync(filePath)) {
        console.log(red('Error: The target file is not found.'))
        process.exitCode = 1;
        return;
    }
    
    const data = readFileSync(filePath).toString();
    console.log(data);

}

main();
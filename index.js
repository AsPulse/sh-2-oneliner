const { readFileSync, existsSync } = require('fs');

//--------- Console Colorlization ---------

const red = (v) => `\u001b[31m${v}\u001b[0m`;
const purple = (v) => `\u001b[35m${v}\u001b[0m`;

//--------- Console Colorlization ---------

const filePath = './target.sh';
const tempshName = 'temporary.sh';

function main() {

    console.log(purple('[1/2] Reading target file...'));

    // If "target.sh" is not provided...
    if(!existsSync(filePath)) {
        console.log(red('Error: The target file is not found.'))
        process.exitCode = 1;
        return;
    }
    
    const data = readFileSync(filePath).toString();
    
    console.log(purple('[2/2] Converting Lines...'));
    const dataLines = data.split("\n");
    const commandLikeLines = dataLines.map(v => v.replace(/(.*)/, `echo "$1" >> ${tempshName}`));

    console.log(commandLikeLines);
}

main();
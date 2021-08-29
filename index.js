const { readFileSync, existsSync } = require('fs');

//--------- Console Colorlization ---------

const red = (v) => `\u001b[31m${v}\u001b[0m`;
const purple = (v) => `\u001b[35m${v}\u001b[0m`;

//--------- Console Colorlization ---------

const filePath = './target.sh';
const tempshName = 'temporary.sh';

function main() {

    console.log(purple('[1/3] Reading target file...'));

    // If "target.sh" is not provided...
    if(!existsSync(filePath)) {
        console.log(red('Error: The target file is not found.'))
        process.exitCode = 1;
        return;
    }
    
    const data = readFileSync(filePath).toString();
    
    console.log(purple('[2/3] Converting Lines...'));
    const dataLines = data.split("\n");
    const commandLikeLines = dataLines.map(v => v.replace(/(.*)/, `echo "$1" >> ${tempshName}`));
    
    console.log(purple('[3/3] Output for the oneliner...'));

    commandLikeLines.push(`sh ${tempshName}`);
    commandLikeLines.push(`rm ${tempshName}`);

    const result = commandLikeLines.join(' && ');

    console.log(purple('--------'));
    console.log(purple('Completed! Here is:'));
    console.log(result);
    console.log(purple('--------'));

}

main();
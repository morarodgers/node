const { writeFile, readFile } = require('fs').promises
const writer = async () => {
    try {
        await writeFile('newFile.txt','Hey there!\nHow are you doing today?\nMind some coffee?');
        console.log('First task done');
    } catch (error) {
        console.log("There was an error writing the file", error);
    }
}

const reader = async () => {
    try {
        const data = await readFile('newFile.txt', 'utf8');
        console.log("The file's content is:\n", data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}
    
// Calling the functions
const readWrite = async () => {
    //await reader();
    await writer();
    await reader();
}
readWrite()
    .catch(error => console.error('Error:', error));